import Image from "next/image";
export default function NotFound() {
  return (
    <div className="d-flex justify-content-center w-100 h-100 align-items-center flex-column">
      <Image
        src="/404.svg"
        alt="Error 404"
        width={120}
        height={120}
        sizes="(max-width: 768px) 100vw, 500px"
        className="img-fluid w-25"
      />
      <span>No encontrado.</span>
    </div>
  );
}
