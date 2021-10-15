import React from 'react'
import './Icons.scss';

const Icons = () => {
    return (
        <div className="social-icons">
      <ul>
        <li>
          <a
            href="mailto:eliza.arzanukaeva@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-envelope" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a
            href="https://stackoverflow.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-stack-overflow" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/elis-11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
      </div>
    )
}

export default Icons
