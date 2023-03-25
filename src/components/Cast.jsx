import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { getMovieCredits } from 'service/getMovieCredits';
import image from 'image/no_image.jpg';

const Cast = ({ id }) => {
  const [movieCredits, setMovieCredits] = useState([]);
  const [isResponse, setIsResponse] = useState(true);
  useEffect(() => {
    if (isResponse) {
      getMovieCredits(id).then(credits => {
        setMovieCredits(credits.cast);
        setIsResponse(false);
      });
    }
  }, [isResponse, id]);

  return (
    <div>
      <ul>
        {movieCredits.map(({ character, name, profile_path }) => (
          <li key={nanoid()}>
            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt={name}
                width={150}
                height={200}
              />
            ) : (
              <img src={image} alt={name} width={150} height={200} />
            )}

            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
Cast.propsTypes = {
  id: PropTypes.number,
};
export default Cast;
