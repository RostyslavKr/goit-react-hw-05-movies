import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getMovieReviews } from 'service/getMovieReviews';

const Reviews = ({ id }) => {
  const [movieReviews, setMovieReviews] = useState([]);
  const [isResponse, setIsResponse] = useState(true);
  useEffect(() => {
    if (isResponse) {
      getMovieReviews(id).then(reviews => {
        setMovieReviews(...reviews.results);
        setIsResponse(false);
      });
    }
  }, [isResponse, id]);

  return (
    <div>
      {movieReviews ? (
        <>
          <h3>Author: {movieReviews.author}</h3>
          <p>{movieReviews.content}</p>
        </>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </div>
  );
};
Reviews.propsTypes = {
  id: PropTypes.number,
};

export default Reviews;
