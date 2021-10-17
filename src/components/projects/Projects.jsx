import React from "react";
import Count from "./count/Count";
import "./Projects.scss";

const Projects = () => {
  return (
    <div className="Projects">
      {/* <Count /> */}
      <div className="post">
        <div className="post-content">
          <strong>1. Project</strong>
          <div>API</div>
        </div>
        <div className="btn">
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};
export default Projects;
