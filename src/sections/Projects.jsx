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
  const [selectedProject, setSelectedProject] = useState(null);

  const pageCount = Math.ceil(others.length / perPage);
  const paginatedProjects =
    others.slice(page * perPage, page * perPage + perPage);

  return (
    <section id="projects" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <p className="text-secondary font-medium mb-2">
          Portfolio
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-dark mb-12">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {featured.map((project, index) => (
            <ProjectCard
              project={project}
              key={index}
              featured
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* OTHER PROJECTS */}
        <h3 className="text-3xl font-bold text-dark mb-10">
          Other Projects
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedProjects.map((project, index) => (
            <ProjectCard
              project={project}
              key={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center gap-4 mt-12">
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

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          close={() => setSelectedProject(null)}
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

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-dark mb-3">
          {project.title}
        </h3>

        <p className="text-dark text-sm mb-4 flex-grow">
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

function ProjectModal({ project, close }) {
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
          <div className="relative mb-6">

            <img
              src={project.images?.[imageIndex]}
              alt={project.title}
              onClick={() => setZoomed(true)}
              className="max-w-full max-h-full rounded-lg shadow-2xl"
            />

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
          <h2 className="text-2xl font-bold text-dark mb-3">
            {project.title}
          </h2>

          <p className="text-dark mb-6">
            {project.description}
          </p>

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
          <div className="flex gap-4">

            <a
              href={project.github}
              target="_blank"
              className="bg-secondary text-primary px-5 py-3 rounded-lg font-medium hover:opacity-90 transition"
            >
              View Code
            </a>

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                className="border border-dark text-dark px-5 py-3 rounded-lg font-medium hover:bg-dark hover:text-white transition"
              >
                Live Demo
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
            className="max-w-full max-h-full rounded-lg shadow-2xl"
          />
        </div>
      )}

    </>
  );
}