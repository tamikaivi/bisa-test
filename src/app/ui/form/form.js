"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import bcrypt from "bcryptjs";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ci, setCi] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const submitMethod = async (e) => {
    e.preventDefault();
    setError("");

    if (!ci || !email || !password) {
      setError("Todos los campos son obligatorios");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Correo electrónico no válido");
      return;
    }
    if (password.length < 3) {
      setError("La contraseña debe tener al menos 3 caracteres");
      return;
    }
    if (!/^\d+$/.test(ci)) {
      setError("CI debe contener solo números");
      return;
    }

    const salt = "$2b$10$ske6MTUtZ0rbCDdsTMo8yu";
    const hashedPassword = bcrypt.hashSync(password, salt);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password: hashedPassword, ci }),
      });

      if (res.ok) {
        router.push("/menu");
      } else {
        const data = await res.json();
        setError(data.message || "Error en el login");
      }
    } catch (err) {
      setError("Error de conexión");
    }
  };

  return (
    <form
      onSubmit={submitMethod}
      className="p-4 border rounded d-flex flex-column"
    >
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="mb-3">
        <label htmlFor="ci" className="form-label">
          CI
        </label>
        <input
          type="text"
          id="ci"
          name="ci"
          className="form-control"
          value={ci}
          onChange={(e) => setCi(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Correo
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary ">
        Login
      </button>
    </form>
  );
}
