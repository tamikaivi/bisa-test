"use client";
import { useState, useEffect } from "react";
export function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ci, setCi] = useState("");
  const sumitMethod = async (form) => {
    console.log(form);
  };
  return (
    <form action={formAction}>
      <label htmlFor="ci">CI</label>
      <input type="text" id="ci" name="ci" required />
      <label htmlFor="email">Correo</label>
      <input type="text" id="email" name="email" required />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" required />

      <button disabled={pending}>Login</button>
    </form>
  );
}
