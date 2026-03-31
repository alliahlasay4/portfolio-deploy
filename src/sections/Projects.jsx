import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { projects } from "../data/projects";

export default function Projects() {
  const featuredTitles = [
    "Blood Donation Management System",
    "Intern Management System",
    "Grocery Calculator & Listing Mobile App",
  ];

  const featured = projects.filter(p => featuredTitles.includes(p.title));
  const others = projects.filter(p => !featuredTitles.includes(p.title));

  const perPage = 3;
  const [page, setPage] = useState(0);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

  const pageCount = Math.ceil(others.length / perPage);
  const paginatedProjects =
    others.slice(page * perPage, page * perPage + perPage);

  return (
    <section id="projects" className="py-14 md:py-16 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <p className="text-secondary font-medium mb-1">
          Portfolio
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-dark mb-8">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featured.map((project, index) => (
            <ProjectCard
              project={project}
              key={index}
              featured
              onClick={() => setSelectedProjectIndex(projects.findIndex(p => p.title === project.title))}
            />
          ))}
        </div>

        {/* OTHER PROJECTS */}
        <h3 className="text-3xl font-bold text-dark mb-6">
          Other Projects
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedProjects.map((project, index) => (
            <ProjectCard
              project={project}
              key={index}
              onClick={() => setSelectedProjectIndex(projects.findIndex(p => p.title === project.title))}
            />
          ))}
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center gap-3 mt-8">
          <button
            disabled={page === 0}
            onClick={() => setPage(page - 1)}
            className="px-4 py-2 bg-primary rounded-lg shadow hover:shadow-md transition disabled:opacity-40"
          >
            Prev
          </button>

          <span className="flex items-center text-dark font-medium">
            Page {page + 1} / {pageCount}
          </span>

          <button
            disabled={page === pageCount - 1}
            onClick={() => setPage(page + 1)}
            className="px-4 py-2 bg-primary rounded-lg shadow hover:shadow-md transition disabled:opacity-40"
          >
            Next
          </button>
        </div>

      </div>

      {selectedProjectIndex !== null && (
        <ProjectModal
          project={projects[selectedProjectIndex]}
          close={() => setSelectedProjectIndex(null)}
          onPrev={() => setSelectedProjectIndex((idx) => (idx - 1 + projects.length) % projects.length)}
          onNext={() => setSelectedProjectIndex((idx) => (idx + 1) % projects.length)}
        />
      )}
    </section>
  );
}

function ProjectCard({ project, featured, onClick }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className={`
    bg-primary
    rounded-xl
    shadow-md
    hover:shadow-2xl
    transition
    overflow-hidden
    cursor-pointer
    flex flex-col
    ${featured ? "border-2 border-secondary" : ""}
  `}
    >
      <img
        src={project.images?.[0]}
        alt={project.title}
        className="w-full h-48 object-cover transition duration-300 group-hover:scale-105"
      />

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-dark mb-2">
          {project.title}
        </h3>

        <p className="text-dark text-sm mb-3 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="text-xs bg-accent text-dark px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, close, onPrev, onNext }) {
  const [zoomed, setZoomed] = useState(false);

  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    setImageIndex(0);
  }, [project]);

  return (
    <>
      <div className="
        fixed inset-0
        bg-black/60
        flex items-center justify-center
        z-50
        p-6
      ">

        <div
          className="
  bg-primary
  rounded-xl
  max-w-3xl
  w-full
  max-h-[85vh]
  overflow-y-auto
  p-6 md:p-8
  pt-12
  relative
  shadow-2xl
"
        >

          <button
            onClick={close}
            className="
    absolute
    top-4
    right-4
    w-10
    h-10
    flex
    items-center
    justify-center
    rounded-full
    bg-white
    shadow-md
    text-lg
    text-dark
    hover:bg-accent
    transition
    z-10
  "
          >
            ✕
          </button>

          {/* CLICKABLE IMAGE */}
          <div className="relative mb-6 flex justify-center">
            <div className="w-full max-h-[60vh] overflow-hidden rounded-lg shadow-2xl">
              <img
                src={project.images?.[imageIndex]}
                alt={project.title}
                onClick={() => setZoomed(true)}
                className="w-full h-full object-contain cursor-zoom-in"
              />
            </div>

            {project.images?.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setImageIndex(
                      imageIndex === 0
                        ? project.images.length - 1
                        : imageIndex - 1
                    )
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-1 rounded shadow"
                >
                  ‹
                </button>

                <button
                  onClick={() =>
                    setImageIndex(
                      imageIndex === project.images.length - 1
                        ? 0
                        : imageIndex + 1
                    )
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-1 rounded shadow"
                >
                  ›
                </button>
              </>
            )}
          </div>

          <div className="flex justify-between gap-3 mb-6">
            <button
              onClick={onPrev}
              className="px-4 py-2 rounded-lg bg-secondary text-primary hover:opacity-90 transition"
            >
              Previous
            </button>
            <button
              onClick={onNext}
              className="px-4 py-2 rounded-lg bg-secondary text-primary hover:opacity-90 transition"
            >
              Next
            </button>
          </div>
          <h2 className="text-2xl font-bold text-dark mb-2">
            {project.title}
          </h2>

          <div className="mb-4 flex gap-2">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary/20 text-secondary rounded-full">
              {project.role}
            </span>
            <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-200 text-dark rounded-full">
              {project.date}
            </span>
          </div>


          <div className="space-y-4 text-dark text-sm mb-6">

            {/* Problem */}
            <div>
              <h4 className="font-semibold">Problem</h4>
              <p>{project.problem}</p>
            </div>

            {/* Solution */}
            <div>
              <h4 className="font-semibold">Solution</h4>
              <p>{project.solution}</p>
            </div>

            {/* Features */}
            <div>
              <h4 className="font-semibold">Key Features</h4>
              <ul className="list-disc pl-5 space-y-1">
                {project.features?.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>

            {/* Contributions */}
            <div>
              <h4 className="font-semibold">My Contributions</h4>
              <ul className="list-disc pl-5 space-y-1">
                {project.contributions?.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>

          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="text-xs bg-accent text-dark px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-3 mb-4 flex-wrap">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
  flex items-center gap-2
  px-4 py-2 text-sm font-medium
  bg-secondary text-primary
  rounded-lg
  shadow-md
  hover:shadow-lg hover:opacity-90
  transition
"
              >
                View Code
              </a>
            )}
          </div>

        </div>
      </div>

      {/* ZOOM VIEW */}
      {zoomed && (
        <div
          onClick={() => setZoomed(false)}
          className="
      fixed inset-0
      bg-black/90
      flex items-center justify-center
      z-[60]
      p-6
      cursor-zoom-out
    "
        >
          <img
            src={project.images?.[imageIndex]}
            alt={project.title}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}

    </>
  );
}