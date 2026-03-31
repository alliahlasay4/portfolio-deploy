import { motion } from "framer-motion";

const skills = {
  Frontend: [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind",
    "Bootstrap"
  ],
  Backend: [
    "PHP",
    "MongoDB",
    "MySQL"
  ],
  "Programming Languages": [
    "Python",
    "Java",
    "C#",
    "C++",
    "Dart"
  ],
  "Tools & Software": [
    "Git",
    "GitHub",
    "Figma",
    "Canva",
    "Photoshop",
    "Illustrator",
    "Filmora",
    "Microsoft Office"
  ]
};

export default function Skills() {
  return (
    <section id="skills" className="py-14 md:py-16 bg-primary scroll-mt-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

          {Object.entries(skills).map(([category, items], index) => (

            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-white p-4 rounded-xl shadow-sm"
            >

              <h3 className="text-lg font-bold text-dark mb-2">
                {category}
              </h3>

              <div className="flex flex-wrap gap-1.5">
                {items.map((skill, i) => (
                  <span
                    key={i}
                    className="text-sm bg-accent text-dark px-2.5 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}