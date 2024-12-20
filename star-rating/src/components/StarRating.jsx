import React, { useState } from "react";
import "./StarRating.css";

function StarRating({ totalStars = 5 }) {
    const [rating, setRating] = useState(0); // State to store the current rating
    const [hover, setHover] = useState(0); // State to manage hover effect

    const handleRating = (index) => {
        setRating(index); // Set the selected rating
    };
    return (
        <div className="star-rating">
            {[...Array(totalStars)].map((_, index) => {
                const startIndex = index + 1; // Star indexes star from 1
                return (
                    <span
                        key={startIndex}
                        className={`star ${startIndex <= (hover || rating) ? "filled" : ""
                            }`}
                        onClick={() => handleRating(startIndex)}
                        onMouseEnter={() => setHover(startIndex)}
                        onMouseLeave={() => setHover(0)}
                    >
                        ★
                    </span>
                );
            })}
        </div>
    );
}

export default StarRating;
