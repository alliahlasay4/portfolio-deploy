import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-14 bg-primary scroll-mt-24">

      <div className="max-w-3xl mx-auto px-6 text-center">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-dark mb-3 text-center"
        >
          Let's Work Together
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-dark text-base md:text-lg mb-4 "
        >
          I'm currently open to junior developer opportunities.
          Feel free to reach out if you'd like to collaborate or discuss a project.
        </motion.p>

        <div className="space-y-0.5 mb-4 w-fit mx-auto bg-white/60 backdrop-blur-md rounded-xl py-3 px-4 shadow-lg">

          {/* EMAIL */}
          <a
            href="mailto:alliahlasay4@gmail.com"
            className="flex items-center justify-center gap-3 text-dark text-lg md:text-xl font-semibold hover:text-secondary hover:scale-[1.02] transition"
          >
            <FaEnvelope className="text-xl text-secondary" />
            <span className="tracking-wide">
              alliahlasay4@gmail.com
            </span>
          </a>

          {/* PHONE */}
          <a
            href="tel:09286593680"
            className="flex items-center justify-center gap-3 text-dark text-lg md:text-xl font-semibold hover:text-secondary hover:scale-[1.02] transition"
          >
            <FaPhone className="text-xl text-secondary" />
            <span className="tracking-wide">
              0928 659 3680
            </span>
          </a>

        </div>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 mt-0"
        >

          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="https://github.com/alliahlasay4"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-dark text-dark rounded-lg hover:bg-dark hover:text-white transition"
          >
            <FaGithub />
            GitHub
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="https://www.linkedin.com/in/alliah-cassandra-lasay-28519326a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-dark text-dark rounded-lg hover:bg-dark hover:text-white transition"
          >
            <FaLinkedin />
            LinkedIn
          </motion.a>

        </motion.div>

      </div>

    </section>
  );
}