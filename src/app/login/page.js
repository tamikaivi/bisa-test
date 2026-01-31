import Form from "../ui/form/form";

export default function Login() {
  return (
    <div className="container-fluid d-flex align-items-center min-vh-100">
      <div className="row justify-content-center justify-content-md-start w-100">
        <div className="col-12 col-md-6 col-lg-4">
          <h2 className="mb-4">Iniciar Sesión</h2>
          <Form />
        </div>
      </div>
    </div>
  );
}
