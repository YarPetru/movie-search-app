import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

import { getMovieReviews } from '../../services/api';

import Loader from 'components/Loader';
import s from './Reviews.module.css';

const GetReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setStatus('pending');
        const reviews = await getMovieReviews(movieId);
        console.log(reviews);
        setReviews(reviews);
        const { height: cardHeight } = document
          .querySelector('ul')
          .getBoundingClientRect();

        window.scrollBy({
          top: cardHeight * 10,
          behavior: 'smooth',
        });
        setStatus('resolved');
      } catch (error) {
        setError(error);
        setStatus('rejected');
      }
    };
    fetchReviews();
  }, [movieId]);
  return { reviews, error, status };
};

const Reviews = () => {
  const { reviews, error, status } = GetReviews();
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
      {status === 'resolved' && reviews.length !== 0 ? (
        <ul className={s.reviewsList}>
          {reviews.map(review => (
            <li key={review.id} className={s.reviewItem}>
              <p className={s.reviewText}>"{review.content}"</p>
              <h3 className={s.reviewAuthor}>Author: {review.author}</h3>
            </li>
          ))}
        </ul>
      ) : (
        <p>There are no reviews yet</p>
      )}
    </>
  );
};

export default Reviews;
