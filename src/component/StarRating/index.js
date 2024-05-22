import React from "react";
import { FaStar } from "react-icons/fa";
import { RxDragHandleVertical } from "react-icons/rx";

const StarRating = ({ noOfStars = 5 }) => {
  const handleClick = (getCurrentIndex) => {
    console.log(getCurrentIndex);
  };

  const handleMouseEnter = (idx) => {
    console.log(idx);
  };
  const handleMouseLeave = (idx) => {
    console.log(idx);
  };
  return (
    <div>
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            size={100}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
