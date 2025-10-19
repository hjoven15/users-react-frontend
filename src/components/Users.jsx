import User from "./User";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Users({ users }) {
  return (
    <div className="w-100">
      {users.map((u, i) => (
        <div key={i} className="d-flex justify-content-center mb-3">
          <User user={u} />
        </div>
      ))}
    </div>
  );
}