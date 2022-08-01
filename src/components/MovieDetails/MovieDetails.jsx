import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMovieDetails } from 'services/api';
import AdditionalInfo from './AdditionalInfo';
import Loader from '../Loader';
import s from './MovieDetails.module.css';

const useMovieDetails = () => {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setStatus('pending');
        const movie = await getMovieDetails(movieId);
        setMovie(movie);
        setStatus('resolved');
      } catch (error) {
        setError(error);
        setStatus('rejected');
      }
    };

    fetchMovieDetails();
  }, [movieId]);
  return { status, error, movie };
};

const MovieDetails = () => {
  const { status, error, movie } = useMovieDetails();
  const { movieId } = useParams();

  return (
    <>
      {status === 'pending' && <Loader />}
      {status === 'rejected' && (
        <p>{`There are no movies with id ${movieId}. Error: ${error}`}</p>
      )}
      {status === 'resolved' && (
        <>
          <div className={s.movieInfoContainer}>
            <Link to="/" className={s.buttonLink}>
              <span className={s.buttonLabel}>Go Back</span>
            </Link>
            <img
              className={s.poster}
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
                  : 'https://usfa.gov.ua/upload/media/2021/02/12/6026697741202-602643405e0e780013efe006.jpg'
              }
              alt="poster"
              width="300px"
            />

            <dl className={s.termsList}>
              <h2 className={s.title}>{movie.title}</h2>
              <dt className={s.term}>Year:</dt>
              <dd className={s.definition}>
                {movie.release_date.split('-')[0]}
              </dd>
              <dt className={s.term}>Overview:</dt>
              <dd className={s.definition}>{movie.overview}</dd>
              <dt className={s.term}>Genres:</dt>
              <dd className={s.definition}>
                {movie.genres.map(genre => genre.name).join(', ')}
              </dd>
              <dt className={s.term}>User score:</dt>
              <dd className={s.definition}>{movie.vote_average}</dd>
            </dl>
          </div>

          <AdditionalInfo />
        </>
      )}
    </>
  );
};

export default MovieDetails;
