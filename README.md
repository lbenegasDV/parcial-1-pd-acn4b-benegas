# 🧭 TaskFlow — Gestor de Tareas en JavaScript Vanilla

**Materia:** Plataformas de Desarrollo
**Parcial 1:** Aplicación en JavaScript Vanilla con manejo de DOM, `localStorage`, clases, eventos y módulos
**Profesor:** Medina Sergio Daniel
**Alumno:** Benegas, Héctor Leonardo
**Comisión:** ACN4BV

---

## 📋 Descripción del proyecto

**TaskFlow** es una aplicación web de una sola página (SPA) desarrollada en **JavaScript Vanilla (ES6+)**.

Utiliza manejo de **DOM dinámico**, **clases**, **arrays**, **eventos**, **localStorage** y **módulos**. Permite:

* **Crear, editar, eliminar, marcar y filtrar tareas.**
* Mantener la información de forma **persistente** en el navegador.
* Incluye **paginación** y **búsqueda instantánea**.
* Utiliza **toasts** de confirmación.
* Carga una **frase motivacional** desde una API externa (`quotable.io`).

---

## ⚙️ Funcionalidades principales

* ✅ **CRUD de Tareas:** Alta, edición, eliminación y marcado de tareas como completadas.
* 🔎 **Filtrado:** Por estado (todas / pendientes / hechas).
* ⏱️ **Búsqueda:** Por título en tiempo real.
* 🔢 **Paginación:** Configurable.
* 💾 **Persistencia:** En `localStorage`.
* 🎨 **Interfaz Visual:** Implementada con **Bootstrap 5** y **Bootstrap Icons**.
* 🧱 **Modelo:** Clase `Task` con constructor y método `toggleDone()`.
* 🚀 **Estilo de Código:** Uso combinado de funciones regulares y *arrow functions*.
* 🔔 **Interacción:** Confirmaciones y mensajes con *toasts* y *callbacks*.
* 🌐 **API Externa:** Consumo de `quotable.io` con `async/await`.
* 📦 **Arquitectura:** Código modular, ordenado y sin errores de consola.


---

# 🧭 TaskFlow — Gestor de Tareas en JavaScript Vanilla

**Materia:** Plataformas de Desarrollo
**Parcial 1:** Aplicación en JavaScript Vanilla con manejo de DOM, `localStorage`, clases, eventos y módulos
**Profesor:** Medina Sergio Daniel
**Alumno:** Benegas, Héctor Leonardo
**Comisión:** ACN4BV

---

## 📋 Descripción del proyecto

**TaskFlow** es una aplicación web de una sola página (SPA) desarrollada en **JavaScript Vanilla (ES6+)**.

Utiliza manejo de **DOM dinámico**, **clases**, **arrays**, **eventos**, **localStorage** y **módulos**. Permite:

* **Crear, editar, eliminar, marcar y filtrar tareas.**
* Mantener la información de forma **persistente** en el navegador.
* Incluye **paginación** y **búsqueda instantánea**.
* Utiliza **toasts** de confirmación.
* Carga una **frase motivacional** desde una API externa (`quotable.io`).

---

## ⚙️ Funcionalidades principales

* ✅ **CRUD de Tareas:** Alta, edición, eliminación y marcado de tareas como completadas.
* 🔎 **Filtrado:** Por estado (todas / pendientes / hechas).
* ⏱️ **Búsqueda:** Por título en tiempo real.
* 🔢 **Paginación:** Configurable.
* 💾 **Persistencia:** En `localStorage`.
* 🎨 **Interfaz Visual:** Implementada con **Bootstrap 5** y **Bootstrap Icons**.
* 🧱 **Modelo:** Clase `Task` con constructor y método `toggleDone()`.
* 🚀 **Estilo de Código:** Uso combinado de funciones regulares y *arrow functions*.
* 🔔 **Interacción:** Confirmaciones y mensajes con *toasts* y *callbacks*.
* 🌐 **API Externa:** Consumo de `quotable.io` con `async/await`.
* 📦 **Arquitectura:** Código modular, ordenado y sin errores de consola.

---

## 🧱 Estructura del proyecto

```bash
taskflow/
├─ index.html
├─ css/
│ └─ styles.css
└─ js/
  ├─ app.js      # Punto de entrada de la aplicación
  ├─ task.js     # Clase Task (modelo de datos)
  ├─ storage.js  # Manejo de localStorage
  ├─ ui.js       # Renderizado dinámico y eventos DOM
  ├─ api.js      # API externa y categorías
  └─ utils.js    # Funciones auxiliares y helpers
```
---

## 🚀 Instrucciones para ejecutar la aplicación

### Requisitos previos

* Tener instalado **Node.js** (versión 16 o superior).
* Navegador moderno (Chrome, Edge o Firefox).

### Clonar el repositorio

```bash
git clone [https://github.com/tu_usuario/taskflow.git](https://github.com/tu_usuario/taskflow.git) # Reemplazar con el enlace correcto
cd taskflow
```

---

### Requisitos previos

* Para evitar bloqueos de CORS en módulos ES6, la aplicación debe ejecutarse con un servidor local. Puedes usar http-server (incluido en Node.js mediante npx):


### Clonar el repositorio

```bash
npx http-server .
```

Por defecto, la aplicación estará disponible en:

👉 http://127.0.0.1:8080
---
## 🧩 Uso básico

1.  **Ingresar** al formulario “Nueva tarea”.
2.  **Escribir** un título y **seleccionar** una categoría.
3.  **Presionar Agregar** → la tarea se muestra en la lista.

Desde la lista puedes:

* Marcar como completada.
* Editar con el ícono ✏️.
* Eliminar con el ícono 🗑️ (confirmación por *callback*).

**Las tareas quedan guardadas en el navegador gracias a `localStorage`.**

---

## 💾 Persistencia de datos

Los datos se almacenan localmente en `localStorage` bajo la clave `taskflow:tasks`. Al recargar la página, se restauran automáticamente.

Se incluye una **semilla inicial** para mostrar ejemplos la primera vez que se accede.

---

## 💬 Frase del día (API externa)

Al iniciar la aplicación, se realiza una solicitud `fetch` a `https://api.quotable.io/random`.

En caso de no tener conexión, se muestra una frase motivacional local predefinida.

---

## 🧠 Tecnologías utilizadas

* **HTML5, CSS3**
* **Bootstrap 5 y Bootstrap Icons**
* **JavaScript ES6+ (Vanilla)**
* Módulos `import`/`export`
* `localStorage`
* **Fetch API (`async`/`await`)**

---

## 👤 Autor

**Benegas, Héctor Leonardo**
* Comisión ACN4BV — Escuela Da Vinci
* Parcial 1 – Plataformas de Desarrollo
* Docente: Sergio Daniel Medina
