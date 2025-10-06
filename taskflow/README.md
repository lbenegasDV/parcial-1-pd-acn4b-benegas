# 🧭 TaskFlow — Gestor de Tareas en JavaScript Vanilla

**Materia:** Plataformas de Desarrollo  
**Parcial 1 — Aplicación en JavaScript Vanilla con manejo de DOM, localStorage, clases, eventos y módulos**  
**Profesor:** Medina Sergio Daniel  
**Alumno:** Benegas, Héctor Leonardo  
**Comisión:** ACN4BV  

---

## 📋 Descripción del proyecto

**TaskFlow** es una aplicación web de una sola página desarrollada en **JavaScript Vanilla (ES6+)**, con manejo de **DOM dinámico, clases, arrays, eventos, localStorage y módulos**.  
Permite crear, editar, eliminar, marcar y filtrar tareas, manteniendo la información de forma persistente en el navegador.  
Incluye además paginación, búsqueda instantánea, toasts de confirmación y carga de una frase motivacional desde una API externa.

---

## ⚙️ Funcionalidades principales

- Alta, edición, eliminación y marcado de tareas como completadas  
- Filtrado por estado (todas / pendientes / hechas)  
- Búsqueda por título en tiempo real  
- Paginación configurable  
- Persistencia en **localStorage**  
- Interfaz visual con **Bootstrap 5** y **Bootstrap Icons**  
- Clase `Task` con constructor y método `toggleDone()`  
- Uso combinado de **funciones regulares** y **arrow functions**  
- Confirmaciones y mensajes con toasts y callbacks  
- Consumo de **API externa (quotable.io)** con `async/await`  
- Código modular, ordenado y sin errores de consola

---

## 🧱 Estructura del proyecto

taskflow/
├─ index.html
├─ css/
│ └─ styles.css
└─ js/
├─ app.js # Punto de entrada de la aplicación
├─ task.js # Clase Task (modelo de datos)
├─ storage.js # Manejo de localStorage
├─ ui.js # Renderizado dinámico y eventos DOM
├─ api.js # API externa y categorías
└─ utils.js # Funciones auxiliares y helpers


---

## 🚀 Instrucciones para ejecutar la aplicación

### 1. Requisitos previos
- Tener instalado **Node.js** (versión 16 o superior).  
- Navegador moderno (Chrome, Edge o Firefox).

### 2. Clonar el repositorio
```bash
git clone https://github.com/<usuario>/taskflow.git
cd taskflow

### 3. Iniciar el servidor local
```bash
Para evitar bloqueos de CORS en módulos ES6, la aplicación debe ejecutarse con un servidor local.
Podés hacerlo con http-server (incluido en Node.js mediante npx):

npx http-server .


Por defecto se abrirá en:

http://127.0.0.1:8080

🧩 Uso básico

Ingresar al formulario “Nueva tarea”.

Escribir un título y seleccionar una categoría.

Presionar Agregar → la tarea se muestra en la lista.

Desde la lista podés:

Marcar como completada.

Editar con el ícono ✏️.

Eliminar con el ícono 🗑️ (confirmación por callback).

Las tareas quedan guardadas en el navegador gracias a localStorage.

💾 Persistencia de datos

Los datos se almacenan localmente en localStorage bajo la clave taskflow:tasks.

Al recargar la página, se restauran automáticamente.

Se incluye una semilla inicial para mostrar ejemplos la primera vez.

💬 Frase del día (API externa)

Al iniciar la aplicación, se realiza una solicitud fetch a https://api.quotable.io/random
.
En caso de no tener conexión, se muestra una frase motivacional local predefinida.

🧠 Tecnologías utilizadas

HTML5, CSS3, Bootstrap 5, Bootstrap Icons

JavaScript ES6+ (Vanilla)

Módulos import/export

localStorage

Fetch API (async/await)

🧩 Autor

Benegas, Héctor Leonardo
Comisión ACN4BV — Escuela Da Vinci
Parcial 1 – Plataformas de Desarrollo
Docente: Sergio Daniel Medina