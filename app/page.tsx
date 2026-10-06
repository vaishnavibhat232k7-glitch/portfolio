import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      <Navbar />

      <section className="text-center py-32 px-6">

        <p className="text-orange-600 text-lg font-semibold">
          Hello, I am
        </p>

        <h1 className="text-5xl font-bold text-gray-800 mt-3">
          Vaishnavi
        </h1>

        <h2 className="text-2xl text-gray-600 mt-4">
          2nd Year Engineering Student
        </h2>

        <p className="text-gray-500 mt-3">
          Computer Science and Engineering
        </p>

        <p className="text-gray-500 mt-1">
          Sahyadri College of Engineering and Management
        </p>

      </section>

    </div>
  );
}