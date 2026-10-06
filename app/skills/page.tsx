import Navbar from "../components/Navbar";

export default function Skills() {
  return (
    <div className="min-h-screen bg-white">

      <Navbar />

      <section className="py-20 px-6">

        <h1 className="text-4xl font-bold text-orange-600 text-center">
          My Skills
        </h1>

        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">

          <div className="border border-orange-200 p-6 text-center rounded-lg">
            C
          </div>

          <div className="border border-orange-200 p-6 text-center rounded-lg">
            Java
          </div>

          <div className="border border-orange-200 p-6 text-center rounded-lg">
            Python
          </div>

          <div className="border border-orange-200 p-6 text-center rounded-lg">
            HTML
          </div>

          <div className="border border-orange-200 p-6 text-center rounded-lg">
            CSS
          </div>

          <div className="border border-orange-200 p-6 text-center rounded-lg">
            JavaScript
          </div>

          <div className="border border-orange-200 p-6 text-center rounded-lg">
            React
          </div>

          <div className="border border-orange-200 p-6 text-center rounded-lg">
            Next.js
          </div>

        </div>

      </section>

    </div>
  );
}