import { Link } from 'react-router-dom';
import s from './MoviesList.module.css';

const MoviesList = ({ moviesArray }) => {
  return (
    <div className={s.gridContainer}>
      <ul className={s.moviesList}>
        {moviesArray.map(item => (
          <li key={item.id} className={s.movieItem}>
            <Link className={s.link} to={`/movies/${item.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
                alt={item.title}
                className={s.itemPoster}
              />
              <div className={s.itemBack}>
                <h2 className={s.movieTitle}>{item.title}</h2>
                <h3 className={s.movieRate}>
                  {item.vote_average.toFixed(1)}/10
                </h3>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
