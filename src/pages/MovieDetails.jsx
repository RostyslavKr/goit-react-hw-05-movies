import { Outlet, useParams, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { getMovie } from 'service/getMovie';
import {
  WrapperAboutMovie,
  Wrapper,
  WrapperGenres,
  TitleFilm,
  Genre,
  WrapperInformation,
  BackButton,
  LinkBack,
} from './MovieDetalis.styled';
import { ImArrowLeft2 } from 'react-icons/im';
import image from 'image/no_image.jpg';

const MovieDetails = ({ getId }) => {
  const [movieDesc, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  useEffect(() => {
    getMovie(movieId).then(movie => {
      setMovie(movie);
      setGenres(movie.genres);
    });
    getId(movieId);
  }, [getId, movieId]);

  return (
    <div>
      <LinkBack to={backLinkHref}>
        <BackButton type="button">
          <ImArrowLeft2 />
          Go back
        </BackButton>
      </LinkBack>
      <WrapperAboutMovie>
        {movieDesc.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieDesc.poster_path}`}
            alt={movieDesc.title}
            width={220}
            height={350}
          />
        ) : (
          <img src={image} alt={movieDesc.title} width={150} height={250} />
        )}

        <Wrapper>
          <TitleFilm>{movieDesc.title}</TitleFilm>
          <p>User Score: {Math.round((100 / 10) * movieDesc.vote_average)}%</p>
          <h2>Overview</h2>
          <p>{movieDesc.overview}</p>
          <h3>Genres</h3>
          <WrapperGenres>
            {genres.map(({ name, id }) => (
              <Genre key={id}>{name}</Genre>
            ))}
          </WrapperGenres>
        </Wrapper>
      </WrapperAboutMovie>
      <WrapperInformation>
        <h3>Additional information</h3>
        <ul>
          <li>
            <LinkBack to="cast" state={{ from: backLinkHref }}>
              Cast
            </LinkBack>
          </li>
          <li>
            <LinkBack to="reviews" state={{ from: backLinkHref }}>
              Reviews
            </LinkBack>
          </li>
        </ul>
      </WrapperInformation>

      <Outlet />
    </div>
  );
};
MovieDetails.propsTypes = {
  getId: PropTypes.func,
};
export default MovieDetails;
