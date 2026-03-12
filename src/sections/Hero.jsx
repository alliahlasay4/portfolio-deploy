import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import me from "../assets/me2.png";


export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-primary flex items-center pt-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid lg:grid-cols-2 items-center gap-12">

        {/* LEFT SIDE */}
        <div className="space-y-6 text-center lg:text-left">

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-dark text-lg md:text-xl"
          >
            Hi, I'm Alliah!
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight"
          >
            <span className="block">FRONTEND</span>
            <span className="block text-secondary">DEVELOPER</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-dark max-w-xl mx-auto lg:mx-0"
          >
            I'm a Frontend developer focused on building modern web
            applications using React and creating clean,
            intuitive user interfaces.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6"
          >
            <a
              href="#projects"
              className="px-6 md:px-8 py-3 md:py-4 bg-secondary text-white rounded-xl font-medium shadow-md hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 md:px-8 py-3 md:py-4 border-2 border-dark text-dark rounded-xl hover:bg-dark hover:text-white transition"
            >
              Contact Me
            </a>

            <a
              href="/Lasay_CV.pdf"
              download
              className="px-6 md:px-8 py-3 md:py-4 border-2 border-dark text-dark rounded-xl hover:bg-dark hover:text-white transition"
            >
              Download CV
            </a>
          </motion.div>

          {/* SOCIAL LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center lg:justify-start gap-6 pt-4"
          >
            <a
              href="https://github.com/alliahlasay4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark text-2xl hover:text-secondary hover:scale-110 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/alliah-cassandra-lasay-28519326a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark text-2xl hover:text-secondary hover:scale-110 transition"
            >
              <FaLinkedin />
            </a>

          </motion.div>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center lg:justify-end items-end h-full relative"
        >
          <motion.img
            src={me}
            alt="Alliah"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="
      relative
      h-[420px]
      md:h-[520px]
      lg:h-[650px]
      xl:h-[720px]
      object-contain
      drop-shadow-xl
    "
          />

          <div className="absolute bottom-6 w-[300px] md:w-[420px] h-[40px] bg-black/20 blur-2xl rounded-full"></div>
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-dark text-xl"
        >
          ↓
        </motion.div>
      </div>
    </section>
  );
}