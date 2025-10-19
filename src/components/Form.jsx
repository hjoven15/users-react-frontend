import { useState } from "react";

export default function Form({ onAddUser }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    age: "",
    photoUrl: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const newUser = await res.json();
    onAddUser(newUser);
    setForm({ name: "", phone: "", email: "", address: "", age: "", photoUrl: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm bg-light mb-4">
      <h4 className="mb-3 text-center">Agregar nuevo usuario</h4>

      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Nombre completo</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Ingrese el nombre completo"
            className="form-control"
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Teléfono</label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Ingrese el número de teléfono"
            className="form-control"
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Correo electrónico</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="ejemplo@correo.com"
            className="form-control"
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Dirección</label>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Ingrese la dirección"
            className="form-control"
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Edad</label>
          <input
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
            placeholder="Ingrese la edad"
            className="form-control"
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">URL de la foto</label>
          <input
            type="url"
            name="photoUrl"
            value={form.photoUrl}
            onChange={handleChange}
            placeholder="https://ejemplo.com/foto.jpg"
            className="form-control"
            required
          />
        </div>
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-primary w-100 py-2">Agregar usuario</button>
      </div>
    </form>
  );
}
