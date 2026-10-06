import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">

      <Navbar />

      <section className="max-w-2xl mx-auto py-20 px-6">

        <h1 className="text-4xl font-bold text-orange-600 text-center">
          Contact Me
        </h1>

        <div className="border border-orange-200 rounded-lg p-8 mt-10">

          <p className="text-lg text-gray-700">
            I would love to connect with you.
          </p>

          <p className="mt-6 text-gray-700">
            <b>Email:</b> vaishnavibhat232k7@gmail.com
          </p>

          <p className="mt-4 text-gray-700">
  <b>GitHub:</b>{" "}
  <a
    href="https://github.com/vaishnavibhat232k7-glitch"
    target="_blank"
    rel="noopener noreferrer"
    className="text-orange-600 hover:underline"
  >
    Visit my GitHub
  </a>
</p>

<p className="mt-4 text-gray-700">
  <b>LinkedIn:</b>{" "}
  <a
    href="https://www.linkedin.com/in/vaishnavibhat23/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-orange-600 hover:underline"
  >
    Visit my LinkedIn
  </a>
</p>

        </div>

      </section>

    </div>
  );
}