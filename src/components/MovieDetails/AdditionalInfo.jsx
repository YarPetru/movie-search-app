import { Link, useParams } from 'react-router-dom';
import s from './MovieDetails.module.css';

const AdditionalInfo = () => {
  const { movieId } = useParams();

  return (
    <>
      <h2 className={s.header}>Additional Info</h2>
      <ul>
        <li>
          <Link to={`/movies/${movieId}/cast`} className={s.link}>
            Cast
          </Link>
        </li>
        <li>
          <Link to={`/movies/${movieId}/reviews`} className={s.link}>
            Reviews
          </Link>
        </li>
      </ul>
    </>
  );
};

export default AdditionalInfo;
