import { motion } from "framer-motion";

const achievements = [
  "DOST Scholar (2022 – Present)",
  "Dean’s List (2022 – Present)",
];

const certifications = [
  "Certified IT Specialist – Databases (2024) ",
  "PCAP: Programming Essentials in Python (2023)",
  "TOEIC Certificate (2024)",
  "Principles of Graphic Design – UPOU (2024)",
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-14 md:py-16 bg-white scroll-mt-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-dark mb-6"
        >
          Achievements & Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">

          {/* ACHIEVEMENTS */}
          <div>

            <h3 className="text-xl md:text-2xl font-semibold text-dark mb-3">
              Achievements
            </h3>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-2"
            >
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  variants={card}
                  whileHover={{ y: -3, scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  className="bg-primary rounded-lg p-3 shadow hover:shadow-md transition text-sm text-dark"
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>

          </div>

          {/* CERTIFICATIONS */}
          <div>

            <h3 className="text-xl md:text-2xl font-semibold text-dark mb-3">
              Certifications
            </h3>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-2"
            >
              {certifications.map((item, index) => (
                <motion.div
                  key={index}
                  variants={card}
                  whileHover={{ y: -3, scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  className="bg-primary rounded-lg p-3 shadow hover:shadow-md transition text-sm text-dark"
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