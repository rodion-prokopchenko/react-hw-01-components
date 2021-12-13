import propTypes from 'prop-types';

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
