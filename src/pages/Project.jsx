import React from "react";
import "./Projects.css";
import { useNavigate } from "react-router-dom";

export const Project = () => {
  const projects = [
    {
      title: "3D-Weatherapp",
      description: "An interactive weatherapp built using React Three Fiber, featuring realistic physics and dynamic animations.",
      link: "https://github.com/gnaneswarkuma/3dweatherapp"
    },
    {
      title: "webgallery",
      description: "very helpfull website where we can store the url of images build using nodejs,mongodb,gsap  and dynamic animations.",
      image: "https://via.placeholder.com/300x200",
      link: "https://github.com/gnaneswarkuma/webgallery/tree/master"
    },
    {
      title: "Catering-services",
      description: "Developed a website where students can know about the information about the events that going to held by the choise.",
      image: "https://via.placeholder.com/300x200",
      link: "https://github.com/gnaneswarkuma/easymoney"
    }
  ];
  const navigate = useNavigate();
  return (
    <section className="projects">
      <div className="container">
        <h2 className="h22">My Projects</h2>
        <div className="cards">
          {projects.map((project, index) => (
            <div className="card" key={index}>
              {/* <img src={project.image} alt={project.title} /> */}
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          ))}
          
        </div>
        <button style={{position:"relative", top:"50vh",left:"50vw"}} onClick={()=>navigate("/")}>Go back to home</button>
      </div>
    </section>
  );
};