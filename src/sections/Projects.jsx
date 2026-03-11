import { motion } from "framer-motion";
import { useState } from "react";
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
    <section id="projects" className="py-28 bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* FEATURED */}
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
            className="px-4 py-2 bg-white rounded-lg shadow disabled:opacity-40"
          >
            Prev
          </button>

          <span className="flex items-center text-dark font-medium">
            Page {page + 1} / {pageCount}
          </span>

          <button
            disabled={page === pageCount - 1}
            onClick={() => setPage(page + 1)}
            className="px-4 py-2 bg-white rounded-lg shadow disabled:opacity-40"
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
      whileHover={{ y: -8 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className={`
        bg-white
        rounded-xl
        shadow-md
        hover:shadow-xl
        transition
        overflow-hidden
        cursor-pointer
        ${featured ? "border-2 border-secondary" : ""}
      `}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-bold text-dark mb-3">
          {project.title}
        </h3>

        <p className="text-dark text-sm mb-4">
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
  return (
    <div className="
      fixed inset-0
      bg-black/60
      flex items-center justify-center
      z-50
      p-6
    ">

      <div className="
        bg-white
        rounded-xl
        max-w-3xl
        w-full
        p-8
        relative
      ">

        <button
          onClick={close}
          className="absolute top-4 right-4 text-xl text-dark"
        >
          ✕
        </button>

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

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

        <a
          href={project.github}
          className="bg-secondary text-white px-5 py-3 rounded-lg font-medium"
        >
          View Code
        </a>

      </div>
    </div>
  );
}