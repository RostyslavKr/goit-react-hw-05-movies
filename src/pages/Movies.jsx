import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getMoviesForQuery } from 'service/getMoviesForQuery';

const Movies = () => {
  const [value, setValue] = useState('');
  const [listMovies, setListMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query');
  useEffect(() => {
    if (query === null) {
      return;
    }
    getMoviesForQuery(query).then(movies => setListMovies(movies.results));
  }, [query]);
  const handleChange = e => {
    setValue(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();

    if (value.trim() === '') {
      toast.warn('Enter something');
      return;
    }
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {listMovies.map(({ id, title, name }) => (
          <Link key={id} to={`${id}`} state={{ from: location }}>
            <li key={id}>{title || name}</li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Movies;
