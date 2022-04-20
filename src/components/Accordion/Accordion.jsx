import React from 'react';
import PropTypes from 'prop-types';
import './Accordion.css';

function Accordion({ title, active, setActive }) {
  return (
    <div className="accordion">
      <div className="accordionHeading">
        <div className="container">
          <p>{title}</p>
          <span
            onClick={() => setActive(title)}
            onKeyDown={() => setActive(title)}
            role="button"
            tabIndex={0}
          >
            {active === title ? 'X' : '|||'}
          </span>
        </div>
      </div>

      <div className={`${active === title ? 'show' : ''} accordionContent`}>
        <div className="container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            dolore impedit molestias reiciendis sed sit unde, accusantium
            deserunt. Dolore molestias reprehenderit eum ex pariatur a itaque
            deleniti voluptates esse molestiae!
          </p>
        </div>
      </div>
    </div>
  );
}
Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
  setActive: PropTypes.func.isRequired,
};
export default Accordion;
