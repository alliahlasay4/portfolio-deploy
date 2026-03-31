import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import me from "../assets/me2.png";


export default function Hero() {

  const { scrollY } = useScroll();

  const bgY = useTransform(scrollY, [0, 500], [0, -60]);
  const imageY = useTransform(scrollY, [0, 500], [0, -30]);


  return (
    <section
      id="hero"
      className="min-h-[80vh] md:min-h-screen bg-primary flex items-start md:items-center pt-20 md:pt-10 pb-16 md:pb-24 overflow-hidden scroll-mt-24"
    >
      <motion.div
        style={{ y: bgY }}
        className="
    absolute inset-0
    bg-[url('/backgrounds/bg.png')]
    bg-cover
    bg-[position:60%_center]
    opacity-15
    pointer-events-none
    blur-[1px]
  "
      ></motion.div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid lg:grid-cols-2 items-center gap-10 md:gap-16">

        {/* LEFT SIDE */}
        <div className="space-y-5 md:space-y-6 text-center lg:text-left max-w-2xl">

          {/* MOBILE PROFILE IMAGE */}
          <div className="flex justify-center lg:hidden mb-4">
            <motion.img
              src={me}
              alt="Alliah"
              style={{ y: imageY }}
              className="h-32 w-32 object-cover rounded-full shadow-lg border-4 border-white"
            />
          </div>
          {/* NAME */}
          <div className="space-y-1 translate-y-2 md:translate-y-3">
            {/* NAME */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-secondary text-lg md:text-xl font-semibold tracking-wide"
            >
              Alliah Cassandra Lasay
            </motion.p>

            {/* ROLE */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-dark text-sm md:text-base text-dark/70"
            >
              Frontend Developer • React • UI/UX Focused
            </motion.p>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight"
          >
            <span className="block text-dark">Frontend Developer</span>
            <span className="block text-secondary font-extrabold">
              Building clean & responsive interfaces
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-dark max-w-xl mx-auto lg:mx-0"
          >
            I build responsive and user-focused web applications using React,
            with a strong emphasis on clean UI, usability, and performance.
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
              className="px-6 md:px-8 py-3 md:py-4 bg-secondary text-white rounded-lg font-medium shadow-md hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 md:px-8 py-3 md:py-4 border border-dark text-dark rounded-lg hover:bg-dark hover:text-white transition"
            >
              Contact Me
            </a>

            <a
              href="/portfolio/Lasay_CV.pdf"
              download
              className="px-6 md:px-8 py-3 md:py-4 border border-dark/60 text-dark/80 rounded-lg hover:bg-dark hover:text-white transition"
            >
              Download CV
            </a>

          </motion.div>

          {/* SOCIAL LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center lg:justify-start gap-6"
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

            <a
              href="mailto:alliahlasay4@gmail.com"
              className="text-dark text-2xl hover:text-secondary hover:scale-110 transition"
            >
              <FaEnvelope />
            </a>

            <a
              href="tel:09286593680"
              className="text-dark text-2xl hover:text-secondary hover:scale-110 transition"
            >
              <FaPhone />
            </a>

          </motion.div>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="hidden lg:flex justify-center lg:justify-end items-center relative -mt-6"
        >
          <motion.img
            src={me}
            alt="Alliah"
            style={{ y: imageY }}
            className="relative h-[210px] sm:h-[260px] md:h-[310px] lg:h-[360px] xl:h-[420px] object-contain drop-shadow-xl"
          />
          
          <div className="absolute bottom-6 w-[300px] md:w-[420px] h-[40px] bg-black/20 blur-2xl rounded-full"></div>
        </motion.div>

      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="hidden md:block absolute bottom-0 lg:bottom-0 left-1/2 -translate-x-1/2 text-dark text-lg opacity-70"
      >
        ↓
      </motion.div>
    </section>
  );
}