import bcrypt from "bcryptjs";

export async function POST(request) {
  const { email, password, ci } = await request.json();
  const salt = "$2b$10$ske6MTUtZ0rbCDdsTMo8yu";
  const correctPasswordHash = bcrypt.hashSync("123", salt);
  if (
    email === "vivianloza1@gmail.com" &&
    password === correctPasswordHash &&
    ci === "123"
  ) {
    return Response.json({ message: "Login exitoso" }, { status: 200 });
  } else {
    return Response.json(
      { message: "Credenciales incorrectas" },
      { status: 401 },
    );
  }
}
