import { FcSearch } from 'react-icons/fc';
import PropTypes from 'prop-types';
import s from './SearchForm.module.css';

const SearchForm = ({ handleSubmit, handleInputChange, query }) => {
  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <button type="submit" className={s.button}>
          <span className={s.buttonLabel}>Search</span>
          <FcSearch />
        </button>

        <input
          className={s.input}
          type="text"
          autoComplete="off"
          value={query}
          autoFocus
          placeholder="Search movies"
          onChange={handleInputChange}
        />
      </form>
    </>
  );
};

SearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  query: PropTypes.string,
};

export default SearchForm;
