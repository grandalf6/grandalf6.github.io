import React from "react";

const SingleProject = ({ data: { description, file, link, name, repo } }) => (
  <div className="single-project card">
    <a href={link} rel="noopener noreferrer" target="_blank">
      <img src={file} className="card-img-top img-fluid" alt={name} />
    </a>
    <div className="card-body">
      <h4 className="card-title">{name}</h4>
      <p className="card-text">{description}</p>
      <div className="project-links-grid">
        <a
          href={link}
          rel="noopener noreferrer"
          target="_blank"
          className="project-link card-link"
        >
          See it
        </a>
        <a
          href={repo}
          rel="noopener noreferrer"
          target="_blank"
          className="project-link card-link"
        >
          Repo
        </a>
      </div>
    </div>
  </div>
);

export default SingleProject;
