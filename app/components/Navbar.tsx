import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b-2 border-orange-500 px-8 py-5 flex justify-between items-center">

      <h1 className="text-2xl font-bold text-orange-600">
        Vaishnavi
      </h1>

      <div className="flex gap-6">

        <Link href="/" className="text-gray-700 hover:text-orange-600">
          Home
        </Link>

        <Link href="/about" className="text-gray-700 hover:text-orange-600">
          About
        </Link>

        <Link href="/skills" className="text-gray-700 hover:text-orange-600">
          Skills
        </Link>

        <Link href="/projects" className="text-gray-700 hover:text-orange-600">
          Projects
        </Link>

        <Link href="/contact" className="text-gray-700 hover:text-orange-600">
          Contact
        </Link>

      </div>

    </nav>
  );
}