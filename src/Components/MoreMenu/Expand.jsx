import React, { useState } from 'react';
import './Expand.css';

function Expand() {
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);


  const handleViewMoreClick1 = () => {
    setExpanded1(!expanded1);
  };
  const handleViewMoreClick2 = () => {
    setExpanded2(!expanded2);
  };
  const handleViewMoreClick3 = () => {
    setExpanded3(!expanded3);
  };

  return (
    <>
    <div className="container">
      <div className={`content ${expanded1 ? 'expanded' : ''}`} id='div11'>
      <p>Truck</p>
        {expanded1 && (
          <p>
gjhjfjgfjhgfjhgfgj
          </p>
        )}
      </div>
      <button className="view-more" onClick={handleViewMoreClick1} id='btnn'>
      &#9660;
      </button>
    </div>

    <div className="container">
      <div className={`content ${expanded2 ? 'expanded' : ''}`} id='div11'>
      <p>Semi-Trailer</p>
        {expanded2 && (
          <p>
hgdchfdjf          </p>
        )}
      </div>
      <button className="view-more" onClick={handleViewMoreClick2} id='btnn'>
      &#9660;      
      </button>
    </div>

    <div className="container">
      <div className={`content ${expanded3 ? 'expanded' : ''}`} >
        <p id='div11'>Trailer</p>
        {expanded3 && (
          <p>
            hdghdhfsdghfsgdjsfhd
          </p>
        )}
      </div>
      <button className="view-more" onClick={handleViewMoreClick3} id='btnn'>&#9660;
      </button>
    </div>
    
    
    
    
    
    </>
    
  );
}

export default Expand;
