import { cv } from "../data/data";
import { Heading } from "../common/Heading";
import { FaPhoneAlt } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";

const Cv = () => {
  return (
    <div className="container">
      <Heading title="My Cv" />
      <form action="" className="cv-form" data-aos="zoom-out-up">
        <div className="left-cv">
          <div className="img">
            <img src="../images/myphoto1.png" alt="" />
          </div>
          <div className="left-content">
            <div className="profile">
              <h1>PROFILE</h1>
              <div className="cv-profile">
                <p>{cv.profile}</p>
              </div>
            </div>

            <div className="Details">
              <h1>Details</h1>
              <span>Nationality: Khmer</span>
              <br />
              <span>Date of Birth: 05/02/2004</span>

              <br />
              <span>
                <FaAddressBook />
                National Road No. 1, Sangkat Niroth, Khan Chbar Ampov, Phnom
                Penh
              </span>
            </div>

            <div className="contact-cv">
              <h1>CONTACT</h1>
              <span>
                <FaPhoneAlt />
                011 300 512 (Cellcard)
              </span>
              <br />
              <span>
                <FaTelegram />
                011 300 512
              </span>
              <br />
              <span>
                <IoMdMail />
                <i>Eangmengkong21@gmail.com</i>
              </span>
              <br />

              <span className="github">
                <FaGithub />
                <i>https://github.com/eangmengkong</i>
              </span>
              <div className="language">
                <h1>Language</h1>
                <li>Khmer : native</li>
                <li>English : good </li>
                <li>Chinese : moderate </li>
              </div>
              <div className="hobbies">
                <h1>HOBBIES</h1>
                <li>Coding</li>
                <li>Studying </li>
                <li>Workout </li>
                <li>Researching</li>
              </div>
            </div>
          </div>
        </div>

        <div className="right-cv">
          <div className="right-header">
            <h1>
              EANG <br />
              MENGKONG
            </h1>
            <span>Web Developer</span>
            <div className="right-cv-content">
              <div className="education">
                <h2>EDUCATION</h2>
                <hr />
                {cv.education.map((edu, i) => (
                  <div className="educaion-content" key={i}>
                    <h3>{edu.title}</h3>
                    <span>{edu.year}</span>
                    <h5>{edu.description}</h5>
                  </div>
                ))}
              </div>
              <div className="experience">
                <h2>EXPERIENCE</h2>
                <hr />
                <div className="about-experience">
                  <h4>Build some school projects and personal projects</h4>
                  {cv.experience.map((edu, i) => (
                    <ul key={i}>
                      <li>{edu.skills}</li>
                    </ul>
                  ))}
                </div>
              </div>
              <div className="skill">
                <h2>SKILLS</h2>
                <hr />
                <li>HTML </li>
                <li>CSS </li>
                <li>JAVASCRIPT</li>
                <li>REACT JS </li>
                <li>Tailwind Css </li>
                <li>C </li>
              </div>
              <div className="reference">
                <h2>REFERENCES</h2>
                <hr />
                <p>Available Upon Request</p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Cv;
