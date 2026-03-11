import { motion } from "framer-motion";

const achievements = [
  "DOST Scholar (2022 – Present)",
  "Dean’s List (2022 – Present)",
];

const certifications = [
  "Certified IT Specialist – Databases",
  "PCAP: Programming Essentials in Python",
  "TOEIC Certificate",
  "Principles of Graphic Design – UPOU",
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0 },
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 bg-primary">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* TITLE ANIMATION */}
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-dark mb-16"
        >
          Achievements & Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* ACHIEVEMENTS */}
          <div>

            <h3 className="text-2xl font-semibold text-dark mb-6">
              Achievements
            </h3>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  variants={card}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-lg p-4 shadow hover:shadow-md transition"
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>

          </div>

          {/* CERTIFICATIONS */}
          <div>

            <h3 className="text-2xl font-semibold text-dark mb-6">
              Certifications
            </h3>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {certifications.map((item, index) => (
                <motion.div
                  key={index}
                  variants={card}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-lg p-4 shadow hover:shadow-md transition"
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
}