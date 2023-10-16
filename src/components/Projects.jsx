import "./projects.css";
import { useState } from "react";
import { Element } from "react-scroll";

export function Projects() {
  const [hover, setHover] = useState(null);

  const handleMouseEnter = (divId) => setHover(divId);

  const handleMouseLeave = () => setHover(null);

  const projectInfo = [
    {
      id: 1,
      title: "Twitter Clone",
      description:
        "A social media app modeled after X (Twitter), with a personal touch.",
      tech: "Tech Used: HTML, TailwindCSS, TypeScript, Next.js, Prisma, PlanetScale",
      button: "Coming Soon",
      link: null,
    },
    {
      id: 2,
      title: "Confidant",
      description:
        "An electronic journal where users create journal entries and easily find past ones via a calendar.",
      tech: "Tech Used: HTML, CSS, JavaScript, React.js, Express.js, Node,js, PostgreSQL, RESTful API",
      button: "View Demo",
      link: "https://www.youtube.com/watch?v=h_6Ovp98eRY&ab_channel=ErinFirstman",
    },
    {
      id: 3,
      title: "Sticky Situations",
      description:
        "An e-commerce site where users can purchase stickers (additional admin capability).",
      tech: "Tech Used: HTML, CSS, JavaScript, React.js, Express.js, Node,js, PostgreSQL, RESTful API",
      button: "View Demo",
      link: "https://www.youtube.com/watch?v=GfMReVr7MLk&list=PLH8yf4pGZM236BFvuXyBrz1M5CGdc8zRe&index=5",
    },
    {
      id: 4,
      title: "The Auction Attic",
      description:
        "A secondhand marketplace for registered users to view items for sale and post their own listings.",
      tech: "Tech Used: HTML, CSS, JavaScript, RESTful API",
      button: "View Site",
      link: "https://the-auction-attic.netlify.app/",
    },
  ];

  return (
    <Element name="projects">
      <div className="projects">
        <div className="projects_container">
          {projectInfo.map((project) => {
            return (
              <div
                className="projects_card"
                key={project.id}
                onMouseEnter={() => handleMouseEnter(project.id)}
                onMouseLeave={handleMouseLeave}
              >
                <h2>{project.title}</h2>
                {hover === project.id ? (
                  <p>{project.tech}</p>
                ) : (
                  <p>{project.description}</p>
                )}
                <a href={project.link} target="_blank">
                  <button>{project.button}</button>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </Element>
  );
}
