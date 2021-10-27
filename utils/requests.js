const API_KEY = process.env.API_KEY;

const requests = [
  {
    type: "fetchTrending",
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en=US`,
  },
  {
    type: "fetchTopRated",
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en=US`,
  },
  {
    type: "fetchActionMovies",
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  {
    type: "fetchComedyMovies",
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  {
    type: "fetchHorrorMovies",
    title: "Horror",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  {
    type: "fetchRomanceMovies",
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  {
    type: "fetchMystery",
    title: "Mystery",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  },
  {
    type: "fetchScifi",
    title: "Western",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  },
  {
    type: "fetchAnimation",
    title: "Animation",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },
  {
    type: "fetchTV",
    title: "TV Movie",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  },
];

export default requests;
