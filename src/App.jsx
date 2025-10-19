import { useState, useEffect } from "react";
import Users from "./components/Users";
import Form from "./components/Form";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const addUser = (newUser) => setUsers([newUser, ...users]);

  return (
    <div className="container-fluid min-vh-100 bg-light py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8 col-xl-6">
          <h1 className="text-center mb-4">Sistema de Usuarios</h1>

          <div className="mb-5">
            <Form onAddUser={addUser} />
          </div>

          <div className="d-flex justify-content-center">
            <Users users={users} />
          </div>
        </div>
      </div>
    </div>
  );
}