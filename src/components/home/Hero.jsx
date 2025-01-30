import { home } from "../data/data";
import Typewriter from "typewriter-effect";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
const Hero = () => {
  return (
    <>
      <section className="hero">
        {home.map((value, i) => (
          <>
            <div className="heroContent" key={i}>
              <h3 className="fontSize" data-aos="fade-right">
                {value.text}
              </h3>
              <h1>
                <Typewriter
                  options={{
                    strings: [
                      `${value.name}`,
                      `${value.post}`,
                      `${value.design}`,
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <p data-aos="fade-left">{value.desc}</p>
              <div className="social-media">
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
          </>
        ))}
      </section>
    </>
  );
};

export default Hero;
