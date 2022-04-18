/* eslint-disable max-len */
import React from 'react';
import './Accordion.css';

// eslint-disable-next-line react/prop-types
function Accordion({ title, active, setActive }) {
  return (
    <div className="accordion">
      <div className="accordionHeading">
        <div className="container">
          <p>{title}</p>
          <span onClick={() => setActive(title)}>
            {active === title ? 'X' : '|||'}
          </span>
        </div>
      </div>

      <div className={`${active === title ? 'show' : ''} accordionContent`}>
        <div className="container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolore impedit molestias
            reiciendis sed sit unde, accusantium deserunt.
            Dolore molestias reprehenderit eum ex pariatur a itaque deleniti voluptates esse molestiae!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
