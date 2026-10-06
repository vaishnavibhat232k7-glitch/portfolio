import Navbar from "../components/Navbar";

export default function Projects() {
  return (
    <div className="min-h-screen bg-white">

      <Navbar />

      <section className="py-20 px-6">

        <h1 className="text-4xl font-bold text-orange-600 text-center">
          My Projects
        </h1>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mt-12">

          <div className="border border-orange-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-orange-600">
              ArecaSmart
            </h2>

            <p className="text-gray-700 mt-4 leading-7">
              A web platform designed to help farmers with
              arecanut and cashew post-harvest management,
              storage and market information.
            </p>
          </div>

          <div className="border border-orange-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-orange-600">
              Student Management Portal
            </h2>

            <p className="text-gray-700 mt-4 leading-7">
              A web application for managing and displaying
              student information using modern web technologies.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}