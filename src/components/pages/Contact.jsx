import { Heading } from "../common/Heading";
import { contact } from "../data/data";
import {
  FaAddressBook,
  FaTelegram,
  FaFacebook,
  FaGithub,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  const icons = {
    address: <FaAddressBook />,
    email: <IoIosMail />,
    telegram: <FaTelegram />,
    phoneNumber: <FaPhoneAlt />,
    github: <FaGithub />,
    facebook: <FaFacebook />,
  };

  return (
    <div className="contact">
      <div className="container">
        <Heading title="Keep In Touch" />
        <div className="content flexsb">
          {/* Contact Form Section */}
          <div className="right">
            <form
              action="https://formsubmit.co/eangmengkong21@gmail.com"
              method="POST"
            >
              <div className="flex">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  aria-label="Your Name"
                  data-aos="flip-left"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  aria-label="Your Email"
                  data-aos="flip-right"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                aria-label="Subject"
                data-aos="flip-up"
                required
              />
              <textarea
                name="message"
                cols="30"
                rows="8"
                placeholder="Message"
                aria-label="Message"
                data-aos="flip-down"
                required
              ></textarea>
              <button type="submit" data-aos="zoom-in-up">
                Submit
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="left">
            {contact.map((item, i) => (
              <div className="box" data-aos="zoom-in" key={i}>
                {Object.keys(item).map((key, index) => (
                  <p key={index}>
                    {icons[key]} {item[key]}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
