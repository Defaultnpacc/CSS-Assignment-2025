import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-blue-900 text-white p-4">
        <h1 className="text-3xl font-bold">KYS General Hospital</h1>
      </header>
      <main className="p-8 sm:p-20">
        <section className="mb-12">
          <Image
            src="/hospital.jpg"
            alt="Hospital"
            width={1200}
            height={600}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </section>
        <section className="text-center sm:text-left">
          <h2 className="text-2xl font-bold mb-4">Welcome to KYS General Hospital</h2>
          <p className="mb-4">
            At KYS General Hospital, we are committed to providing the highest quality healthcare services to our community. Our team of experienced professionals is dedicated to ensuring your well-being and comfort.
          </p>
          <p className="mb-4">
            We offer a wide range of medical services, including emergency care, surgery, maternity care, and more. Our state-of-the-art facilities and advanced medical technology ensure that you receive the best possible care.
          </p>
          <p className="mb-4">
            Thank you for choosing KYS General Hospital. We look forward to serving you and your family.
          </p>
        </section>
      </main>
      <footer className="bg-blue-900 text-white p-4 text-center">
        <p>&copy; 2025 KYS General Hospital. All rights reserved.</p>
      </footer>
    </div>
  );
}
