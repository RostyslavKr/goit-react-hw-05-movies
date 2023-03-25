export const getMoviesForQuery = query => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=fc2d7a6ee96a44a9df3bfa9e129c2a94&language=en-US&query=${query}&page=1&include_adult=false`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('Something went wrong'));
  });
};
