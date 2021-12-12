import StatisticsSection from './components/StatisticsSection/StatisticsSection';
import StatisticsList from './components/StatisticsList/StatisticsList';
import statistics from './statistics.json';

export default function AppStatistics() {
  return (
    <StatisticsSection>
      <StatisticsList statistics={statistics} />
    </StatisticsSection>
  );
}
