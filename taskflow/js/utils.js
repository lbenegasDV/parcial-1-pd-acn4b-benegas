export const uid = () =>
  (window.crypto?.randomUUID?.() ?? `id-${Date.now()}-${Math.random().toString(16).slice(2)}`);

export const qs  = (sel, root = document) => root.querySelector(sel);
export const qsa = (sel, root = document) => [...root.querySelectorAll(sel)];

export const formatDate = iso => new Date(iso).toLocaleDateString();

export const showToast = (message, type = "primary") => {
  const container = qs("#toastContainer");
  const el = document.createElement("div");
  el.className = `toast align-items-center text-bg-${type} border-0`;
  el.role = "status";
  el.ariaLive = "polite";
  el.innerHTML = `
    <div class="d-flex">
      <div class="toast-body">${message}</div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
    </div>`;
  container.appendChild(el);
  // eslint-disable-next-line no-undef
  const t = new bootstrap.Toast(el, { delay: 2200 });
  t.show();
  el.addEventListener("hidden.bs.toast", () => el.remove());
};
