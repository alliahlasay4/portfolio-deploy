import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-primary">

      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-dark mb-8"
        >
          Let's Work Together
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-dark text-lg mb-10"
        >
          I'm currently open to internship and junior developer opportunities.
          Feel free to reach out if you'd like to collaborate or discuss a project.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:alliahlasay4@gmail.com"
            className="px-8 py-4 bg-secondary text-white rounded-xl font-medium shadow-md"
          >
            Email Me
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/alliahlasay4"
            className="px-8 py-4 border-2 border-dark text-dark rounded-xl hover:bg-dark hover:text-white transition"
          >
            GitHub
          </motion.a>

        </motion.div>

      </div>

    </section>
  );
}