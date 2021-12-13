import propTypes from 'prop-types';
import s from './StatiscticsSection.module.css';

export default function StatisticsSection({ children }) {
  return (
    <section className={s.statistics}>
      <h2 className="title">Upload stats</h2>
      {children}
    </section>
  );
}

StatisticsSection.propTypes = {
  children: propTypes.node.isRequired,
};
