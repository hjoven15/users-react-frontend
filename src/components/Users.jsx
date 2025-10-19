import User from "./User";

export default function Users({ users }) {
  return (
    <div className="container mt-4">
      <div className="row">
        {users.map((u, i) => (
          <User key={i} user={u} />
        ))}
      </div>
    </div>
  );
}
