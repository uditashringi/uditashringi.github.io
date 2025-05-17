
import React from "react";
// import { useState } from "react";
import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  // const [theme, setTheme] = useState("cupcake");
  const theme = "cupcake";

  // const toggleTheme = (newTheme) => {
  //   setTheme(newTheme);
  // };

  const projects = [
    {
      name: "Tapestry",
      description: "Decorative Textile Art traditionally made by weabing threads on a loom. It consists of two main thread types:" +
              "warp threads( vertical ) that form the base and weft threads( horizontal ) that are woven through the warp to create designs or scenes.",
      link: "/pdfs/tapestry.pdf"
    },
    {
      name: "Tarzan",
      description: "TARZAN is an innovative wearable device that redefines the interaction with AI, offering a discreet yet powerful way to stay connected and in control. * Much like Meta's AI-enabled glasses, the Tarzan can scan the world with its wide-angle camera to process and react to what you see.",
      link: "/pdfs/tarzan.pdf"
    },
    {
      name: "Fashion Porfolio",
      description: " \"OctoBloom\" combines the essence of an octopus (\"Octo\") with the idea of blooming, symbolizing growth, renewal, and regeneration. It reflects the concept of transformation and vibrancy, inspired by the octopus’s ability to adapt and regenerate, paired with the freshness of blooming life.",
      link: "/pdfs/portfolio.pdf"
    },
    {
      name: "Rebranding Marks & Spencer",
      description: "This project rebrands Marks & Spencer to make it more modern and appealing to younger audiences. While the brand is known for quality and trust, it's seen as outdated. Key issues include poor fabric, bad fitting, and weak digital presence. The strategy includes improving product quality by shifting manufacturing to India, launching a new basics collection, updating branding, and boosting social media presence through influencer collaborations and trendy content. The goal is to make M&S stylish, sustainable, and relevant for today’s market.",
      link: "/pdfs/markNSpencer.pdf"
    },
  ];

  return (
    <div className={`app theme-${theme}`}>
      <header className="header">
        <h1>Udita Shringi</h1>
        <p>Sophomore pursuing B.Des in Fashion/Apparel Design</p>
        {/* <button className="theme-button" onClick={() => toggleTheme(theme === "cupcake" ? "dark" : "cupcake")}>Change Theme</button> */}
      </header>

      <section className="profile">
        <img
          src="/images/udita.jpg"
          alt="Profile"
          className="profile-picture"
        />
        <ul className="contact-info">
          <li>
            <a href="https://github.com/uditashringi">
              <i className="fab fa-github"></i> uditashringi
            </a>
          </li>
          <li>
            <a href="mailto:uditashringi.fashion@gmail.com">
              <i className="fas fa-envelope"></i> uditashringi.fashion@gmail.com
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/udita-shringi-24641824a/">
              <i className="fab fa-linkedin"></i> udita-shringi
            </a>
          </li>
        </ul>
        <a href="/pdfs/uditaresume.pdf">
          <button className="download-button">View Resume</button>
        </a>
      </section>

      <section className="projects">
        <h2>Portfolio</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <a href={project.link} key={index} className="project-link">
              <div key={index} className="project-card">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

// function App() {
//   console.log('App is rendering!');
//   return <div>Hello, World!</div>;
// }


export default App;

