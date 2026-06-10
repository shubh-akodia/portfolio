import { FaHtml5, FaCss3Alt, FaJava } from "react-icons/fa";
import { SiJavascript, SiMysql } from "react-icons/si";
import { FaReact } from "react-icons/fa6";

function Skills() {
  const skills = [
    { name: "React", icon: <FaReact size={40} /> },
    { name: "JavaScript", icon: <SiJavascript size={40} /> },
    { name: "Java", icon: <FaJava size={40} /> },
    { name: "MySQL", icon: <SiMysql size={40} /> },
    { name: "HTML", icon: <FaHtml5 size={40} /> },
    { name: "CSS", icon: <FaCss3Alt size={40} /> },
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>

      <div className="project-container">
        {skills.map((skill, index) => (
          <div className="card skill-card" key={index}>
            {skill.icon}
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;