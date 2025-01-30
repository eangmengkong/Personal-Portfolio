import { Heading } from "../common/Heading";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import ProgressBar from "react-progressbar";

const Resume = () => {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 70 },
    { name: "React", level: 70 },
    { name: "Tailwind Css", level: 80 },
    { name: "C", level: 40 },
  ];

  return (
    <section className="resume">
      <div className="container">
        <div className="background-resume">
          <div className="left-resume">
            <div className="left-resume-content">
              <div>
                <h1>Mengkong</h1>
                <span>Web Developer</span>
              </div>
              <div className="resume-social-media">
                <a
                  href="https://www.facebook.com/share/161uQ4N9HN/?mibextid=kFxxJD"
                  target="_blank"
                >
                  <FaFacebook />
                </a>

                <a href=" https://github.com/eangmengkong" target="_blank">
                  <FaGithub />
                </a>

                <a href="https://t.me/MengkongEang" target="_blank">
                  <FaTelegram />
                </a>
              </div>
            </div>
          </div>

          <div className="right-resume">
            <div>
              <Heading title="Resume" />
              <div className="resume-title">
                <h4>Frontend Developer /</h4>
                <h4>Ux | Ui Designer /</h4>
                <h4>IT Supporter</h4>
              </div>

              <div className="about-resume">
                <p>
                  Motivated web development student seeking a frontend
                  internship to improve my skills. Passionate about creating
                  user-friendly and interactive websites. Eager to learn,
                  collaborate, and solve real-world challenges. Committed to
                  continuous learning and staying updated with industry trends.
                </p>
              </div>
              <hr />
              <div className="resume-skill">
                <h1>Skills</h1>
                <div className="skill-grid">
                  {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <p>{skill.name}</p>
                      <ProgressBar completed={skill.level} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
