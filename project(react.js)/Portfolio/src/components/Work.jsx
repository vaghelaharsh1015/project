import React from 'react';

const Work = () => {
  const projects = [
    { id: 1, title: "Minimal Blog", desc: "A clean blogging platform." },
    { id: 2, title: "E-Commerce", desc: "Simple storefront interface." },
    { id: 3, title: "Dashboard UI", desc: "Admin panel for a SaaS app." }
  ];

  return (
    <section id="work" className="section-padding">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="work-grid">
          {projects.map((project) => (
            <div key={project.id} className="work-card">
              <div className="work-image">
                Image Placeholder
              </div>
              <div className="work-content">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
