import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./starRate.css";

export default function StarRate() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className="star-container">
      {[...Array(5)].map((_, index) => {
        const currentRate = index + 1;

        return (
          <label key={currentRate}>
            <input
              type="radio"
              name="rate"
              value={currentRate}
              onClick={() => setRating(currentRate)}
            />

            <FaStar
              className="star"
              size={50}
              color={
                currentRate <= (hover || rating) ? "#ffc107" : "#e4e5e9"
              }
              onMouseEnter={() => setHover(currentRate)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}

      {rating && <p className="rating-text">You rated {rating} stars</p>}
    </div>
  );
}
