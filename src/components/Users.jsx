import User from "./User";

export default function Users({ users }) {
  return (
    <div className="d-flex flex-column align-items-center mt-4">
      {users.map((u, i) => (
        <User key={i} user={u} />
      ))}
    </div>
  );
}
