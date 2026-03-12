import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-10">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* NAME */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold">
              Alliah Cassandra Lasay
            </h3>
            <p className="text-sm text-gray-300">
              Frontend Developer
            </p>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex gap-6 text-xl">

            <a
              href="https://github.com/alliahlasay4"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:alliahlasay4@gmail.com"
              className="hover:text-secondary transition"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-600 my-6"></div>

        {/* COPYRIGHT */}
        <p className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Alliah Cassandra Lasay. Built with React and Tailwind CSS.
        </p>

      </div>

    </footer>
  );
}