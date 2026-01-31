import "bootstrap/dist/css/bootstrap.min.css";

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="d-flex h-100 w-100">
      <body className="d-flex h-100 w-100">{children}</body>
    </html>
  );
}
