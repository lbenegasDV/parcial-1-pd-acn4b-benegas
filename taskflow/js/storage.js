import { Task } from "./task.js";

const KEY = "taskflow:tasks";

export function loadTasks() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const arr = JSON.parse(raw);
    return arr.map(Task.from);
  } catch {
    return [];
  }
}

export function saveTasks(tasks) {
  localStorage.setItem(KEY, JSON.stringify(tasks.map(t => t.toJSON())));
}

/** Semilla inicial (para que el profe vea algo al abrir) */
export function ensureSeed() {
  const current = loadTasks();
  if (current.length > 0) return current;
  const seed = [
    new Task({ id: "t1", title: "Terminar el parcial 1", category: "Estudio", done: false }),
    new Task({ id: "t2", title: "Hacer 30 minutos de cardio", category: "Salud", done: true }),
    new Task({ id: "t3", title: "Revisar consigna en DvCampus", category: "Estudio", done: false })
  ];
  saveTasks(seed);
  return seed;
}
