import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import kbc from "../assets/kbc.jpg";
import emi from "../assets/emi.jpg";
import salary from "../assets/salary.jpg";
import exam from "../assets/exam.jpg";
import recharge from "../assets/recharge.jpg";
import typing from "../assets/typing.jpg";

const projects = [
     {
    title: "Kaun Banega Crorepati",
    tech: "javascript",
    description: "A quiz game based on the popular TV show.",
    image: kbc,
    link: "https://github.com/shubh-akodia/kaun_banega_crorepati"
  },
  {
    title: "EMI Calculator",
    tech: "javascript",
    description: "Calculates monthly EMI for loans.",
    image: emi
  },
    {
        title: "Employee salary ",
        tech: "javascript",
        description: "A system to manage employee salaries and generate payslips.",
        image: salary
    },
    {
        title: "Exam sheet",
        tech: "javascript",
        description: "A simple exam sheet application including quiz and result.",
        image: exam
    },
    {
        title: "Typing speed test",
        tech: "javascript",
        description: "A typing speed test application to measure typing speed and accuracy.",
        image: typing
    },
     {
        title: "recharge app",
        tech: "javascript",
        description: "A simple recharge application for mobile services.",
        image: recharge         
    },
     
];


function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="project-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          closeModal={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default Projects;