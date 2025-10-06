import { ensureSeed, loadTasks } from "./storage.js";
import { createUIState, render, bindCategorySelects, attachHandlers } from "./ui.js";
import { fetchQuote, CATEGORIES } from "./api.js";
import { qs } from "./utils.js";

(async function main() {
  const tasks = ensureSeed();
  const state = createUIState(tasks);

  // 🔹 Acá se llenan las categorías
  bindCategorySelects(CATEGORIES);
  attachHandlers(state);
  render(state);

  try {
    const quote = await fetchQuote();
    qs("#quoteBox span").textContent = `“${quote}”`;
  } catch {}
})();
