import axios from 'axios';

const APIKey = '9cba2b56fa6de0f8781209edaebd8957';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

//https://api.themoviedb.org/3/trending/movie/day?api_key=9cba2b56fa6de0f8781209edaebd8957
export const getTrendMovies = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${APIKey}`);
  return response.data.results;
};

//https://api.themoviedb.org/3/search/movie?api_key=9cba2b56fa6de0f8781209edaebd8957&query=batman
export const getMovieByQuery = async query => {
  const response = await axios.get(
    `/search/movie?api_key=${APIKey}&query=${query}`
  );
  return response.data.results;
};

// https://api.themoviedb.org/3/movie/54657?api_key=9cba2b56fa6de0f8781209edaebd8957
export const getMovieDetails = async movieid => {
  const response = await axios.get(`/movie/${movieid}?api_key=${APIKey}`);
  return response.data;
};

// https://api.themoviedb.org/3/movie/453395/credits?api_key=9cba2b56fa6de0f8781209edaebd8957
export const getMovieCredits = async movieid => {
  const response = await axios.get(
    `/movie/${movieid}/credits?api_key=${APIKey}`
  );
  return response.data.cast;
};

// https://api.themoviedb.org/3/movie/453395/reviews?api_key=9cba2b56fa6de0f8781209edaebd8957
export const getMovieReviews = async movieid => {
  const response = await axios.get(
    `/movie/${movieid}/reviews?api_key=${APIKey}`
  );
  return response.data.results;
};
