export const getMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=fc2d7a6ee96a44a9df3bfa9e129c2a94`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('Something went wrong'));
  });
};
