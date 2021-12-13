import propTypes from 'prop-types';
import s from './Statisctics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <>
      <span className="label">{title}</span>
      <span className="percentage">{stats}</span>
    </>
  );
};

Statistics.propTypes = {
  title: propTypes.string.isRequired,
  stats: propTypes.number.isRequired,
};

export default Statistics;
