import { useState, useEffect } from "react";
import Users from "./components/Users";
import Form from "./components/Form";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const addUser = (newUser) => setUsers([newUser, ...users]);

  return (
    <div className="container">
      <h1 className="text-center my-4">Usuarios</h1>
      <Form onAddUser={addUser} />
      <Users users={users} />
    </div>
  );
}
