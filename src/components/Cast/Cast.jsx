import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Loader from 'components/Loader';
import { getMovieCredits } from '../../services/api';
import s from './Cast.module.css';

const GetMovieCast = () => {
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setStatus('pending');
        const cast = await getMovieCredits(movieId);
        setCast(cast);
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
        setStatus('resolved');
        // const { height: cardHeight } = document
        //   .querySelector('ul')
        //   .getBoundingClientRect();

        // window.scrollBy({
        //   top: cardHeight,
        //   behavior: 'smooth',
        // });
      } catch (error) {
        setError(error);
        setStatus('rejected');
      }
    };
    fetchCast();
  }, [movieId]);
  return { cast, error, status };
};

const Cast = () => {
  const { cast, error, status } = GetMovieCast();
  return (
    <>
      {status === 'pending' && <Loader />}
      {status === 'rejected' &&
        toast(
          `Oops. Something went wrong. Please try again. ${error.message}`,
          {
            icon: '😓',
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          }
        )}
      {status === 'resolved' && (
        <ul className={s.castList}>
          {cast.map(el => (
            <li key={el.credit_id} className={s.actorItem}>
              <div className={s.actorCard}>
                <img
                  className={s.photo}
                  src={
                    el.profile_path
                      ? `https://image.tmdb.org/t/p/w200/${el.profile_path}`
                      : 'http://www.axisplumbing.com.au/wp-content/uploads/2018/11/Avatar-200x300.jpg'
                  }
                  alt={el.name}
                />
                <h3 className={s.name}>{el.name}</h3>
                <p className={s.character}>Character: {el.character}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
