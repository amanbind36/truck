import React, { useState } from "react";
import './Buy.css';

import pic1 from './pic/pic1.jpg';
import pic2 from './pic/pic2.jpg';
import pic3 from './pic/pic3.jpg';



function Page1({ onToggle }) {
  return (
    <>
    <div className="btnDiv">
            <button className="buyBtn" onClick={onToggle}>Buying with IAA</button>
            <button className="sellBtn" onClick={onToggle}>Selling with IAA</button>


      <div>
      <h2 className="heading">Selling Features</h2>

<p className="discribee">Track bidding activity . Monitor vehicle status Fuel up on data and sell with actionable insight. IAA gives you tyhe tool and technology for effective vechicle management and selling</p>

            <div className="cardsContainerss">
                <div className="itemCard">
                    <img src={pic1} alt="" id="imgg" />
                    <p>IAA Loan Payoff</p>
                </div>

                <div className="itemCard">
                    <img src={pic2} alt="" id="imgg"  />
                    <p>Inspection Services</p>
                </div>

                <div className="itemCard">
                    <img src={pic3} alt="" id="imgg"  />
                    <p>CSA Today</p>
                </div>
            </div>
      </div>
    </div>
    </>
  );
}

function Page2({ onToggle }) {
  return (
    <>
     <div className="btnDiv">
            <button className="buyBtn" onClick={onToggle}>Buying with IAA</button>
            <button className="sellBtn" onClick={onToggle}>Selling with IAA</button>


      <div>
      <h2 className="heading">Buying Features</h2>

<p className="discribee">Track bidding activity . Monitor vehicle status Fuel up on data and sell with actionable insight. IAA gives you tyhe tool and technology for effective vechicle management and selling</p>

            <div className="cardsContainerss">
                <div className="itemCard">
                    <img src={pic1} alt="" id="imgg"  />
                    <p>IAA Loan Payoff</p>
                </div>

                <div className="itemCard">
                    <img src={pic3} alt="" id="imgg" />
                    <p>Inspection Services</p>
                </div>

                <div className="itemCard">
                    <img src={pic2} alt="" id="imgg"  />
                    <p>CSA Today</p>
                </div>
            </div>

      </div>
    </div>
    </>
   
  );
}

function Buy() {
  const [showPage1, setShowPage1] = useState(true);

  const handleToggle = () => {
    setShowPage1(!showPage1);
  };

  return (
    <div className="mainPageContainer">
      {showPage1 ? (
        <Page1 onToggle={handleToggle} />
      ) : (
        <Page2 onToggle={handleToggle} />
      )}
    </div>
  );
}

export default Buy;
