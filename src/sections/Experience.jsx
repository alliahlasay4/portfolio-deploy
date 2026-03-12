import { motion } from "framer-motion";

const experience = [
  {
    role: "Frontend Developer Intern",
    company: "Supsoft Tech",
    period: "2026 – Present",
    points: [
      "Develop responsive UI components using React, HTML, CSS, and JavaScript.",
      "Translate Figma UI designs into functional frontend pages.",
      "Integrate frontend components with backend-driven data.",
      "Ensure cross-browser compatibility and responsive behavior.",
      "Debug client-side issues and improve usability and performance."
    ],
    tech: ["React", "JavaScript", "HTML", "CSS", "Figma"]
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* TITLE ANIMATION */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-dark mb-16"
        >
          Experience
        </motion.h2>

        {/* EXPERIENCE LIST */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-10"
        >
          {experience.map((job, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition"
            >

              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-xl font-bold text-dark">
                  {job.role} • {job.company}
                </h3>

                <span className="text-sm text-dark">
                  {job.period}
                </span>
              </div>

              <ul className="list-disc pl-5 text-dark space-y-2 mb-4">
                {job.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {job.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-accent text-dark px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}