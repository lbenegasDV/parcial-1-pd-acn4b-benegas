/* global bootstrap */
import { qs, qsa, showToast, formatDate, uid } from "./utils.js";
import { saveTasks } from "./storage.js";
import { Task } from "./task.js";

export function createUIState(tasks) {
  return {
    tasks,
    filter: "all",      // all | pending | done
    search: "",
    pageSize: 5,
    page: 1
  };
}

export function bindCategorySelects(categories) {
  const selNew  = qs("#taskCategory");
  const selEdit = qs("#editCategory");
  const list = categories?.length ? categories : ["General"];
  const opts = list.map(c => `<option value="${c}">${c}</option>`).join("");
  selNew.innerHTML = opts;
  selEdit.innerHTML = opts;
}



export function attachHandlers(state) {
  // Alta
  qs("#new-task-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const title = qs("#taskTitle").value.trim();
    const category = qs("#taskCategory").value;
    if (!title) return;

    state.tasks.unshift(new Task({ id: uid(), title, category, done: false }));
    saveTasks(state.tasks);
    qs("#new-task-form").reset();
    showToast("Tarea agregada", "primary");
    state.page = 1;
    render(state);
  });

  // Filtros (pills)
  qsa("#filterNav [data-filter]").forEach(btn => {
    btn.addEventListener("click", () => {
      qsa("#filterNav .nav-link").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.filter = btn.dataset.filter;
      state.page = 1;
      render(state);
    });
  });

  // Búsqueda
  qs("#searchInput").addEventListener("keyup", (e) => {
    state.search = e.target.value.toLowerCase();
    state.page = 1;
    render(state);
  });

  // Page size
  qs("#pageSize").addEventListener("change", (e) => {
    state.pageSize = Number(e.target.value);
    state.page = 1;
    render(state);
  });

  // Delegación de eventos en la lista
  qs("#taskList").addEventListener("click", (e) => {
    const li = e.target.closest("[data-id]");
    if (!li) return;
    const id = li.dataset.id;
    const task = state.tasks.find(t => t.id === id);
    if (!task) return;

    // Toggle done
    if (e.target.matches(".toggle-done, .toggle-done *")) {
      task.toggleDone();
      saveTasks(state.tasks);
      render(state);
      return;
    }

    // Editar
    if (e.target.matches(".btn-edit, .btn-edit *")) {
      openEditModal(task);
      return;
    }

    // Borrar
    if (e.target.matches(".btn-delete, .btn-delete *")) {
      if (confirm("¿Borrar esta tarea?")) {
        const ix = state.tasks.findIndex(t => t.id === id);
        if (ix > -1) state.tasks.splice(ix, 1);
        saveTasks(state.tasks);
        showToast("Tarea eliminada", "secondary");
        // Ajuste de paginación si quedaste en página vacía
        const pages = totalPages(getFiltered(state), state.pageSize);
        if (state.page > pages) state.page = Math.max(1, pages);
        render(state);
      }
      return;
    }
  });

  // Guardar edición
  qs("#editForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const id = qs("#editId").value;
    const t  = state.tasks.find(x => x.id === id);
    if (!t) return;
    t.title = qs("#editTitle").value.trim();
    t.category = qs("#editCategory").value;
    t.done = qs("#editDone").checked;
    saveTasks(state.tasks);
    showToast("Cambios guardados", "primary");
    bootstrap.Modal.getInstance(qs("#editModal")).hide();
    render(state);
  });
}

function openEditModal(task) {
  qs("#editId").value = task.id;
  qs("#editTitle").value = task.title;
  qs("#editCategory").value = task.category;
  qs("#editDone").checked = task.done;
  new bootstrap.Modal("#editModal").show();
}

/* ---------- RENDER ---------- */

function getFiltered(state) {
  return state.tasks.filter(t => {
    const okFilter = state.filter === "all" ? true : state.filter === "done" ? t.done : !t.done;
    const okSearch = !state.search || t.title.toLowerCase().includes(state.search);
    return okFilter && okSearch;
  });
}

function totalPages(arr, size) {
  return Math.max(1, Math.ceil(arr.length / size));
}

export function render(state) {
  // Badges resumen
  const total = state.tasks.length;
  const done = state.tasks.filter(t => t.done).length;
  const pend = total - done;
  qs("#badgeTotal").textContent = `${total} total`;
  qs("#badgePending").textContent = `${pend} pendientes`;
  qs("#badgeDone").textContent = `${done} hechas`;

  // Lista
  const filtered = getFiltered(state);
  const pages = totalPages(filtered, state.pageSize);
  state.page = Math.min(state.page, pages);

  const start = (state.page - 1) * state.pageSize;
  const slice = filtered.slice(start, start + state.pageSize);

  const html = slice.map(t => `
    <div class="list-group-item d-flex align-items-center gap-3" data-id="${t.id}">
      <button class="btn btn-outline-success btn-icon toggle-done" title="Cambiar estado">
        ${t.done ? '<i class="bi bi-check2"></i>' : '<i class="bi bi-circle"></i>'}
      </button>
      <div class="flex-grow-1">
        <div class="d-flex align-items-center gap-2">
          <span class="task-title ${t.done ? 'done' : ''}">${escapeHtml(t.title)}</span>
          <span class="badge badge-cat rounded-pill ms-1">${escapeHtml(t.category)}</span>
        </div>
        <div class="small text-body-secondary">Creada: ${formatDate(t.createdAt)}</div>
      </div>
      <div class="d-flex gap-2">
        <button class="btn btn-light border btn-icon btn-edit" title="Editar">
          <i class="bi bi-pencil"></i>
        </button>
        <button class="btn btn-light border btn-icon btn-delete" title="Eliminar">
          <i class="bi bi-trash"></i>
        </button>
      </div>
    </div>
  `).join("");

  qs("#taskList").innerHTML = html || `<div class="list-group-item text-center text-body-secondary">Sin resultados</div>`;

  // Paginación
  renderPagination(state, pages);
}

function renderPagination(state, pages) {
  const ul = qs("#pagination");
  if (pages <= 1) {
    ul.innerHTML = "";
    return;
  }
  let items = "";
  const addItem = (label, page, disabled = false, active = false) => {
    items += `
      <li class="page-item ${disabled ? 'disabled' : ''} ${active ? 'active' : ''}">
        <button class="page-link" data-page="${page}">${label}</button>
      </li>`;
  };
  addItem("«", state.page - 1, state.page === 1);
  // Vecindad de páginas
  const range = 2;
  const start = Math.max(1, state.page - range);
  const end   = Math.min(pages, state.page + range);
  for (let p = start; p <= end; p++) addItem(p, p, false, p === state.page);
  addItem("»", state.page + 1, state.page === pages);

  ul.innerHTML = items;

  ul.querySelectorAll("[data-page]").forEach(btn => {
    btn.addEventListener("click", () => {
      const p = Number(btn.dataset.page);
      if (!Number.isNaN(p) && p >= 1 && p <= pages && p !== state.page) {
        state.page = p;
        render(state);
      }
    });
  });
}

// Pequeña protección XSS para títulos
function escapeHtml(str) {
  return str.replace(/[&<>"']/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[m]));
}
