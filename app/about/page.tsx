import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-white">

      <Navbar />

      <section className="max-w-4xl mx-auto py-20 px-6">

        <h1 className="text-4xl font-bold text-orange-600 text-center">
          About Me
        </h1>

        <div className="border border-orange-200 rounded-lg p-8 mt-10">

          <p className="text-lg text-gray-700 leading-8">
            I am Vaishnavi, a second-year engineering student
            pursuing Computer Science and Engineering at Sahyadri
            College of Engineering and Management.
          </p>

          <p className="text-lg text-gray-700 leading-8 mt-5">
            I am interested in programming, web development and
            learning new technologies. I enjoy creating projects
            and improving my technical skills.
          </p>

          <h2 className="text-2xl font-bold text-orange-600 mt-8">
            Education
          </h2>

          <p className="text-gray-700 mt-3">
            Bachelor of Engineering
          </p>

          <p className="text-gray-700">
            Computer Science and Engineering
          </p>

          <p className="text-gray-700">
            Sahyadri College of Engineering and Management
          </p>

        </div>

      </section>

    </div>
  );
}