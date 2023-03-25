import { Routes, Route } from 'react-router-dom';
import { useState, lazy } from 'react';
import { SharedLayout } from './SharedLayout';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  const [movieId, setMovieId] = useState(null);
  const getMovieId = id => {
    setMovieId(id);
  };
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route
          path="/movies/:movieId"
          element={<MovieDetails getId={getMovieId} />}
        >
          <Route path="cast" element={<Cast id={movieId} />} />
          <Route path="reviews" element={<Reviews id={movieId} />} />
        </Route>
      </Route>
    </Routes>
  );
};
