import { useState, useEffect } from "react";
import profile from "../assets/profile.png";
// import { TypeAnimation } from "react-type-animation";

import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";

const backgrounds = [bg1, bg2, bg3];

function Hero() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${backgrounds[currentBg]})`,
      }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Hi, I'm Shubhangi</h1>
         <p>Frontend Developer specializing in
            React, JavaScript and Java.
            
            I build responsive web applications
            and enjoy solving real-world problems.</p>

          <div className="hero-buttons">
            <a href="#projects">
              <button>View Projects</button>
            </a>
            <a href="#contact">
  <button>Contact Me</button>
</a>
          </div>
        </div>

        <img src={profile} alt="Profile" className="profile-pic" />
      </div>
    </section>
  );
}

export default Hero;
