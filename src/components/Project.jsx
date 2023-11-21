// function projects {
//     return (
//     // brings in 6 different projects
//     //     An image of the deployed application (either a GIF or a screenshot)

//     // The title of the project

//     // A link to the deployed application

//     // A link to the corresponding GitHub repository
// // musik
//     https://github.com/HunterMuratore/Musik
//     // book search, musik, simple weather app,
//     );
// }import React from "react";
import musik from "../../assets/project_images/Musik.png";

const imageStyle = {
  maxWidth: "600px",
  maxHeight: "400px",
};

const customMargin = {
  marginTop: "1.5rem",
};

const projects = [
  {
    name: "Musik",
    description:
      "Full stack app allowing users to share their favorite songs and connect with other users over music.",
    img: musik,
    gitLink: "https://github.com/HunterMuratore/Musik",
    appLink: "https://arcane-refuge-32686-92d3868f1b08.herokuapp.com/",
  },
];

function Projects() {
  return (
    <section className="projects text-center mb-3">
      <article className="2xl:text-2xl xl:text-xl lg:text-xl md:text-lg sm:text-md">
        <h1 className="text-2xl font-bold mt-10 mb-5">Projects</h1>
        <p className="mt-2"></p>
      </article>
      <figure className="container mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
        {projects.map((project, i) => (
          <div key={i} className="project-card flex flex-col p-2 mx-auto">
            <img
              style={imageStyle}
              src={project.img}
              alt={project.name}
              className="project-img"
            />
            <h2 style={customMargin} className="mt-6 font-semibold text-lg">
              {project.name}
            </h2>
            <figcaption className="my-1 card-body">
              {project.description}
            </figcaption>
            <div className="mt-auto mb-5">
              <a
                href={project.gitLink}
                target="_blank"
                rel="noopener noreferrer"
                className="my-btn text-sm my-5 py-2 px-3 rounded"
              >
                GitHub
              </a>
              {project.appLink && (
                <a
                  href={project.appLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="my-btn text-sm my-5 py-2 px-3 rounded ml-6"
                >
                  Live App
                </a>
              )}
            </div>
          </div>
        ))}
      </figure>
    </section>
  );
}

export default Projects;
