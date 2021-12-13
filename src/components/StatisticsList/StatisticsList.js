import propTypes from 'prop-types';
import Statistics from '../Statistics/Statistics';
import s from './StatiscticsList.module.css';

export default function StatisticsList({ statistics }) {
  return (
    <>
      <ul className={s.statList}>
        {statistics.map(statistics => (
          <li className={s.item} key={statistics.id}>
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
