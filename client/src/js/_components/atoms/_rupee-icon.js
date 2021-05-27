import React from "react";
import RupeeImage from "images/rupee-icon.png";

const RupeeIcon = ({ size }) => {
  return (
    <div>
      <img
        src={RupeeImage}
        style={
          size === "small"
            ? { height: "16px", width: "8px", filter: "brightness(1.2)" }
            : {}
        }
      />
    </div>
  );
};

export default RupeeIcon;
