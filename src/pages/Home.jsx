import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getMovies } from 'service/getMovies';

const Home = () => {
  const [listMovies, setListMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getMovies().then(movies => {
      setListMovies(movies.results);
    });
  }, [listMovies]);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {listMovies.map(({ id, title, name }) => (
          <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
            <li key={id}>{title || name}</li>
          </Link>
        ))}
      </ul>
    </>
  );
};
export default Home;
