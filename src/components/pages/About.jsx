import { about } from "../data/data";
import { Heading } from "../common/Heading";
import { Link } from "react-router-dom/cjs/react-router-dom";
const About = () => {
  const handleDownload = () => {
    const cvUrl = "/MyCv.pdf"; // Ensure the file is in the public folder
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "EangMengkong_CV.pdf"; // Set the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <section className="about">
        <div className="container">
          {about.map((value, i) => (
            <div key={i} className="about-flex">
              <div className="left" data-aos="fade-down-right">
                <img src={value.cover} alt="" />
              </div>
              <div className="right" data-aos="fade-down-left">
                <Heading title="About Me" />
                <p>{value.desc}</p>
                <p>{value.desc1}</p>

                <Link to="/cv">
                  <button className="primaryBtn " id="btn-viewcv">
                    View CV
                  </button>
                </Link>
                <button className="primaryBtn" onClick={handleDownload}>
                  Download CV
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
