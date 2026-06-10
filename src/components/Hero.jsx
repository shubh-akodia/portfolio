import profile from "../assets/profile.png";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">
        <h1>Hi, I'm Shubhangi</h1>
        <p>Frontend Developer specializing in
          React, JavaScript and Java.

          I build responsive web applications
          and enjoy solving real-world problems.</p>

        <div className="hero-buttons">
          <button
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            View Projects
          </button>

          <a href="/resume.pdf" download>
            <button>Download Resume</button>
          </a>
        </div>
      </div>
      <img
        src={profile}
        alt="Profile"
        className="profile-pic"
      />


    </section>
  );
}

export default Hero;