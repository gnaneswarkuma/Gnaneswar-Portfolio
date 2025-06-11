import React from "react";
import "./About.css";
import { useNavigate } from "react-router-dom";
export const About=()=>{
  const navigate = useNavigate();
  return (
    <section className="about">
      <div className="container">
        <h2 className="h22">About Me</h2>
        <div className="content">
         <div className="text">
            <p>
              Hi, I'm <strong>Pithani Gnaneswar Kumar</strong>, an aspiring software developer from <strong>Visakhapatnam, India</strong>. 
              Currently pursuing my <strong>B.Tech in Computer Science Engineering</strong> at Vignan's Institute of Information Technology, 
              I am passionate about coding, problem-solving, and creating immersive web experiences.
            </p>
            <p>
              My journey started at <strong>Chaitanya English Medium School</strong>, followed by intermediate studies at <strong>Vidya Vikas Junior College (MPC)</strong>. 
              Over the years, I honed my skills in frontend and backend technologies, working with <strong>React, R3F, Three.js, Node.js, Express, and MongoDB</strong>.
            </p>
            <p>
              Some of my achievements include being a <strong>3-star coder on CodeChef</strong>, participating in various hackathons, and 
              securing <strong>first place in CodeQuest Feb 2025</strong>, organized by AlgoZenith-VIIT. I am a <strong>consistent, passionate, and hard-working</strong> developer 
              who loves challenges—whether it’s coding, playing chess, or gaming.<button onClick={()=>navigate("/")}>Go back to home</button>
            </p>
            
          </div>
          
        </div>
      </div>
    </section>
  );
};


