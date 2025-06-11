import React from "react";
import "./Contact.css";
import { useNavigate } from "react-router-dom";

export const Contact = () => {
  const navigate = useNavigate();

  return (
    <section className="contact">
      <div className="overlay">
        <div className="container">
          <h2 className="h22">Contact Me</h2>
          <div className="content">
            <div className="text">
              <p>
                I'm always excited to connect! Whether you have a project idea, need collaboration, or just want to chat about tech, feel free to reach out.
              </p>

              <div className="contact-details">
                <p><strong>Email:</strong> gnaneswarkumar.pithain@gmail.com</p>
                <p><strong>Location:</strong> Visakhapatnam, Andhra Pradesh, India</p>
                <p><strong>GitHub:</strong> <a href="https://github.com/gnaneswarkuma" target="_blank">github.com/https://gnaneswarkumar</a></p>
                <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/gnaneswar-kumar-pithani-8a8652296" target="_blank">linkedin.com/in/gnaneswar-kumar-pithani-8a8652296</a></p>
              </div>

              <div className="buttons">
                <button onClick={() => navigate("/")}>Go Back to Home</button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};