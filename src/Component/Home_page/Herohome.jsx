// import React from 'react';
import "./Style/Herohome.css"
import { FaLongArrowAltRight } from "react-icons/fa";

function Herohome() {
  return (
    <div className='hero-home'>
      <div className="hero-content">
        <div className="text-hero">
          <div className='text-title'>
            <h1>Mekong Water Solutions</h1>
          </div>
          <div className="text-p">
            <p>
            The Australian Government initiative supporting the planning,
            development, and management of water resources and water sector systems
          </p>
          </div>
          <div className="btn-learn-hero">
            <button>Learn More <span className='right-btn-h'><FaLongArrowAltRight /></span></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herohome;
