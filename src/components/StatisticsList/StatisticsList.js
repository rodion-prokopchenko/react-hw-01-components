import propTypes from 'prop-types';
import Statistics from '../Statistics/Statistics';

export default function StatisticsList({ statistics }) {
  return (
    <>
      <ul className="stat-list">
        {statistics.map(statistics => (
          <li className="item" key={statistics.id}>
            <Statistics
              title={statistics.label}
              stats={statistics.percentage}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

StatisticsList.propTypes = {
  statistics: propTypes.arrayOf(
    propTypes.shape({ id: propTypes.string.isRequired }),
  ),
};
