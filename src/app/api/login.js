export default function handler(req, res) {
  if (
    req.method === "PUT" &&
    email === "vivianloza1@gmail.com" &&
    password === "123" &&
    ci === "1110"
  ) {
    return res.status(200).json({ message: "Login exitoso" });
  }
}
