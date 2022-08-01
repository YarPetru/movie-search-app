import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { getTrendMovies } from '../../services/api';
import Loader from '../Loader';
import MoviesList from '../MoviesList';
import s from './Home.module.css';

const useFetchMovies = () => {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setStatus('pending');
        const items = await getTrendMovies();
        setItems(items);
        setStatus('resolved');
      } catch (error) {
        setError(error);
        setStatus('rejected');
      }
    };

    fetchMovies();
  }, []);
  return { items, error, status };
};

const Home = () => {
  const { items, error, status } = useFetchMovies();
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
      <h1 className={s.header}>TOP 20 Movies of the day</h1>
      {/* <p>
        Search TOP movies for the{' '}
        <button className="periodButton" type="submit">
          day
        </button>
        <button className="periodButton" type="submit">
          week
        </button>
      </p> */}
      {status === 'resolved' && <MoviesList moviesArray={items} />}
    </>
  );
};

export default Home;
