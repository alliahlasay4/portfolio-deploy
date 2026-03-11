import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-8">

          <h2 className="text-4xl md:text-5xl font-bold text-dark">
            About Me
          </h2>

          <p className="text-dark text-lg leading-relaxed">
            I'm an Information Technology student specializing in Web Development at
            De La Salle University – Dasmariñas. My focus is frontend development,
            building responsive and user-friendly interfaces using modern web technologies.
          </p>

          <p className="text-dark text-lg leading-relaxed">
            I currently work as a Frontend Developer Intern at Supsoft Tech, where I
            translate Figma UI designs into functional React components and develop
            responsive user interfaces for data-driven web applications.
          </p>

          <p className="text-dark text-lg leading-relaxed">
            My experience includes building systems such as employee management platforms,
            intern management systems, and other administrative web applications that
            integrate frontend interfaces with backend-driven data.
          </p>

          {/* EXPERIENCE HIGHLIGHTS */}
          <div className="flex flex-wrap gap-3 pt-2">

            <Highlight text="Frontend Developer Intern" />
            <Highlight text="DOST Scholar" />
            <Highlight text="Dean’s List" />

          </div>

        </div>

        {/* SKILLS GRID */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-5"
        >

          <Skill name="React" />
          <Skill name="JavaScript" />
          <Skill name="HTML/CSS" />
          <Skill name="Tailwind" />
          <Skill name="MySQL" />
          <Skill name="PHP" />
          <Skill name="Java" />
          <Skill name="Python" />
          <Skill name="Figma" />

        </motion.div>

      </div>
    </section>
  );
}

function Highlight({ text }) {
  return (
    <div className="
      bg-primary
      text-dark
      px-4 py-2
      rounded-full
      text-sm
      font-medium
      shadow-sm
    ">
      {text}
    </div>
  );
}

function Skill({ name }) {
  return (
    <div className="
      bg-accent
      text-dark
      font-medium
      px-4 py-4
      rounded-xl
      text-center
      shadow-md
      hover:scale-105
      hover:shadow-lg
      transition
    ">
      {name}
    </div>
  );
}