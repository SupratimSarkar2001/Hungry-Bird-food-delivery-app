import React from "react";

function BannerName({ name, discount, link }) {
  return (
    <div className="bannerContent">
      <h3>Hello {name}</h3>
      <p>
        Get free discount for every purchase of <span>₹{discount}</span>
      </p>
      <a href={link}>Lear More</a>
    </div>
  );
}

export default BannerName;
