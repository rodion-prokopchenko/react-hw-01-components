import propTypes from 'prop-types';

export default function StatisticsSection({ children }) {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      {children}
    </section>
  );
}

StatisticsSection.propTypes = {
  children: propTypes.node.isRequired,
};
