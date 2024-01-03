// Rating.js
import React, { useState } from 'react';
import './Review.css';
export const Review = () => {
    const [rating, setRating] = useState(0);

    const handleRatingChange = (newRating) => {
    setRating(newRating);
    };

    return (
    <center><div className="joo">
        <br></br>
        <h1>Rating and Review</h1><br></br><br></br>
        <h2>Rate this item:</h2>
        {[1, 2, 3, 4, 5].map((star) => (
        <span
            key={star}
            onClick={() => handleRatingChange(star)}
            style={{
            cursor: 'pointer',
            color: star <= rating ? 'gold' : 'gray',
            fontSize: '24px',
            }}
        >
            ★
        </span>
        ))}
        <p>Selected Rating: {rating}</p>
        <br></br>
        <br></br>
        <br></br>
        <h1>Tell us your review about our page</h1>
        <br></br>
        <form>
        <table>
            <tr>
            <textarea placeholder='share your review' rows={5} cols={30}></textarea><br></br><br></br>
            </tr>
        </table>
        </form>
    </div></center>
    );
};