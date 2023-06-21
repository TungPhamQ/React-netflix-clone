const API_KEY = "bd14f6629570545a94620262968828d5";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/movie?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discovery/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discovery/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `discovery/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discovery/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discovery/documentation?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
