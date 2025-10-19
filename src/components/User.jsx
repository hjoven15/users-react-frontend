export default function User({ user }) {
  return (
    <div className="col-md-4 mb-3">
      <div className="card h-100">
        <img src={user.photoUrl} className="card-img-top" alt={user.name} />
        <div className="card-body">
          <h5 className="card-title">{user.name}</h5>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.address}</p>
          <p>Edad: {user.age}</p>
        </div>
      </div>
    </div>
  );
}
