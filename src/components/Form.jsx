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
    <form onSubmit={handleSubmit} className="mb-4">
      {["name", "phone", "email", "address", "age", "photoUrl"].map((f) => (
        <input
          key={f}
          name={f}
          value={form[f]}
          onChange={handleChange}
          placeholder={f}
          className="form-control mb-2"
          required
        />
      ))}
      <button className="btn btn-primary w-100">Agregar usuario</button>
    </form>
  );
}
