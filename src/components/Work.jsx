import React from "react";

//Components
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/project-1.png",
    title: "Capture Portfolio Website",
    tags: ["ReactJS", "GSAP"],
    projectLink: "https://capture-portfolio-website.vercel.app/",
  },
  {
    imgSrc: "/images/project-3.png",
    title: "Ignite Gaming App",
    tags: ["ReactJS", "API"],
    projectLink: "https://ignite-three-tau.vercel.app/",
  },
  {
    imgSrc: "/images/project-2.png",
    title: "Travelly",
    tags: ["JavaScript", "GSAP"],
    projectLink: "https://travelly-henna.vercel.app/",
  },

  {
    imgSrc: "/images/project-4.png",
    title: "Waves Music Player",
    tags: ["ReactJS", "API"],
    projectLink: "https://react-music-player-iota.vercel.app/",
  },
  {
    imgSrc: "/images/project-5.png",
    title: "Beat Maker App",
    tags: ["JavaScript", "Development"],
    projectLink: "https://beat-maker-orpin.vercel.app/",
  },
  {
    imgSrc: "/images/project-6.png",
    title: "Todo App",
    tags: ["JavaScript", "Web-design"],
    projectLink: "https://todo-list-lemon-three.vercel.app/",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
