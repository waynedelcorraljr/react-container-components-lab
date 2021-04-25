// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({ reviews }) => (
    <div className='review-list' >
        { reviews.map(review => 
        <div className='review' key={review.dsiplay_title} >
            <h4>{review.headline}</h4>
            {/* <img src={review.multimedia.src}  alt='Movie Poster' /> */}
            <p>{review.summary_short}</p>
            <a href={review.link.url} >Read the New York Times Review here...</a>
        </div>) 
        }
    </div>
)

export default MovieReviews;