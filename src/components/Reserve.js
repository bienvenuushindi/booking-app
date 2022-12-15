import React from 'react';

function Reserve() {
  return (
    <div className="cont">
      <div className="dropdown">
        <button type="button" className="dropbtn">select Freelancer</button>
        <div className="dropdown-content">
          <p>freelancer 1</p>
        </div>
      </div>
      <button type="submit" className="sub">select</button>
    </div>
  );
}

export default Reserve;
