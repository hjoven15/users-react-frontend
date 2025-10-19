import 'bootstrap/dist/css/bootstrap.min.css';

export default function User({ user }) {
  return (
    <div
      className="card mb-3 shadow-sm d-flex justify-content-center"
      style={{ maxWidth: "540px", width: "100%" }}
    >
      <div className="row g-0 align-items-center">
        <div className="col-md-4">
          <img
            src={user.photoUrl}
            className="img-fluid rounded-start"
            alt={user.name}
            style={{
              objectFit: "cover",
              height: "180px",
              width: "100%",
            }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title mb-2">{user.name}</h5>
            <p className="card-text mb-1"><strong>Correo:</strong> {user.email}</p>
            <p className="card-text mb-1"><strong>Teléfono:</strong> {user.phone}</p>
            <p className="card-text mb-1"><strong>Dirección:</strong> {user.address}</p>
            <p className="card-text"><strong>Edad:</strong> {user.age} años</p>
            <p className="card-text">
              <small className="text-body-secondary">Usuario registrado</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
