import { useState } from "react";
import { project } from "../data/data";
import { Heading } from "../common/Heading";

const allCategory = ["all", ...new Set(project.map((item) => item.category))];

export const Project = () => {
  const [list, setLists] = useState(project);
  const [category] = useState(allCategory);

  const filterItems = (category) => {
    if (category === "all") {
      setLists(project);
    } else {
      const newItems = project.filter((item) => item.category === category);
      setLists(newItems);
    }
  };

  return (
    <>
      <article>
        <div className="container">
          <Heading title="Projects" />
          <div className="catButton">
            {category.map((category, i) => (
              <button
                className="primaryBtn"
                onClick={() => filterItems(category)}
                data-aos="zoom-out-down"
                key={i}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="content grid3">
            {list.map((value, i) => (
              <div className="box" data-aos="fade-up" key={i}>
                <div className="img">
                  <img src={value.cover} alt="" />
                </div>
                <div className="overlay">
                  <h3>{value.title}</h3>
                  <span>{value.name}</span>
                  {value.link ? (
                    <button id="view-project-btn">
                      <a
                        href={value.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </a>
                    </button>
                  ) : (
                    <button id="view-project-btn" disabled>
                      No Link Available
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  );
};
