export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=TMDB_KEY=614efca8f3de66e661e09e73a688bdc3&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };