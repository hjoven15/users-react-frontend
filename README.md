# 👥 Sistema de Usuarios – Frontend (React + Vite + Bootstrap)

Aplicación frontend desarrollada con **React + Vite** que permite **visualizar y crear perfiles de usuario** consumiendo una API REST.  
Este proyecto corresponde a la **Parte 2** del parcial de programación (Corte 2).

---

## 🚀 Tecnologías utilizadas
- ⚛️ **React + Vite**
- 🎨 **Bootstrap 5**
- 🔄 **Fetch API**
- 🧩 Componentes reutilizables (`Form`, `Users`, `User`)

---

## 📁 Estructura principal
```
src/
 ├── components/
 │   ├── Form.jsx
 │   ├── User.jsx
 │   └── Users.jsx
 ├── App.jsx
 ├── main.jsx
```

---

## ⚙️ Instalación y ejecución

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/hjoven15/users-react-frontend.git
   cd users-react-frontend
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Ejecutar el proyecto:
   ```bash
   npm run dev
   ```

4. Abrir en el navegador:
   ```
   http://localhost:5173
   ```

---

## 🌐 Conexión con el Backend
La aplicación consume los endpoints de la API:
- **GET** `http://localhost:3000/users` → Obtiene la lista de usuarios  
- **POST** `http://localhost:3000/users` → Crea un nuevo usuario  

El backend debe estar ejecutándose localmente en el puerto **3000**.

---

## ✨ Características
- Formulario validado con campos en español.
- Envío de datos al backend con `fetch`.
- Tarjetas responsivas con imagen y datos alineados.
- Diseño centrado y limpio con Bootstrap.

---

## 👨‍💻 Autor
**Haminton Joven Cano**  
🎓 Proyecto académico – *Corporación Instituto de Administración y Finanzas (CIAF)*  
📘 Asignatura: **Programación IV**
🧩 Corte 2 – Desarrollo Frontend con React + Vite + Bootstrap
