import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-dark text-white shadow-md">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">

        <h1 className="font-bold text-xl">
          My Portfolio
        </h1>

        <ul className="hidden md:flex gap-8">
          <li>
            <a href="#about" className="hover:text-accent transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-accent transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-accent transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-accent transition">
              Contact
            </a>
          </li>
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-xl"
        >
          ☰
        </button>

      </div>

      {open && (
        <div className="md:hidden bg-dark text-center py-4 space-y-4 border-t border-secondary">
          <a href="#about" className="block hover:text-accent">About</a>
          <a href="#skills" className="block hover:text-accent">Skills</a>
          <a href="#projects" className="block hover:text-accent">Projects</a>
          <a href="#contact" className="block hover:text-accent">Contact</a>
        </div>
      )}

    </nav>
  );
}