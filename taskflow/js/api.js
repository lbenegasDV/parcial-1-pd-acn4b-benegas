// Frase del día (API externa con fallback local)
export async function fetchQuote() {
  try {
    const res = await fetch("https://api.quotable.io/random");
    if (!res.ok) throw new Error("bad status");
    const data = await res.json();
    return data?.content ?? "Simplicidad bien hecha.";
  } catch {
    const fallback = [
      "Hazlo simple, pero hazlo.",
      "Pequeños pasos sostienen grandes cambios.",
      "Menos ruido, más foco.",
      "Hoy vale por dos si empezás ahora."
    ];
    return fallback[Math.floor(Math.random() * fallback.length)];
  }
}

export const CATEGORIES = ["General", "Estudio", "Trabajo", "Salud", "Personal"];
