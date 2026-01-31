export default async function ProcessCode({ params }) {
  const { "process-code": processCode } = await params;

  return (
    <div className="container mt-5">
      <h2>Challenge One - Process Code</h2>
      <p>Process Code: {processCode}</p>
    </div>
  );
}
