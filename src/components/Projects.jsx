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
    tech:  ["HTML", "CSS", "JavaScript"],
    description: "A quiz game based on the popular TV show.",
    image: kbc,
    github: "https://github.com/shubh-akodia/kaun_banega_crorepati",
    live:"https://shubh-akodia.github.io/kaun_banega_crorepati/"
  },
  {
    title: "EMI Calculator",
    tech:  ["HTML", "CSS", "JavaScript"],
    description: "Calculates monthly EMI for loans.",
    image: emi,
    github: "https://github.com/shubh-akodia/emi",
    live:"https://shubh-akodia.github.io/emi/"
  },
    {
        title: "Employee Salary Manager",
        tech:  ["HTML", "CSS", "JavaScript"],
        description: "A system to manage employee salaries and generate payslips.",
        image: salary,
        github: "https://github.com/shubh-akodia/employee_salary",
        live:"https://shubh-akodia.github.io/employee_salary/"
    },
    {
        title: "Exam sheet",
        tech:  ["HTML", "CSS", "JavaScript"],
        description: "A simple exam sheet application including quiz and result.",
        image: exam,
        live:"https://shubh-akodia.github.io/exam_sheet/",
        github: "https://github.com/shubh-akodia/exam_sheet"
    },
    {
        title: "Typing speed test",
        tech:  ["HTML", "CSS", "JavaScript"],
        description: "A typing speed test application to measure typing speed and accuracy.",
        image: typing,
        live:"https://shubh-akodia.github.io/typing_speed/",
        github: "https://github.com/shubh-akodia/typing_speed"
    },
     {
        title: "recharge app",
        tech:  ["HTML", "CSS", "JavaScript"],
        description: "A simple recharge application for mobile services.",
        image: recharge,
        live:"https://shubh-akodia.github.io/recharge-/",
        github: "https://github.com/shubh-akodia/recharge-"         
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
  onClose={() => setSelectedProject(null)}
/>
      )}
    </section>
  );
}

export default Projects;