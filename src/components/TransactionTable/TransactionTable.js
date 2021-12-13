import propTypes from 'prop-types';
import s from './TransactionTable.module.css';

export default function TransactionTable({ children }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th className={s.transactionHistoryTheadElements}>Type</th>
          <th className={s.transactionHistoryTheadElements}>Amount</th>
          <th className={s.transactionHistoryTheadElements}>Currency</th>
        </tr>
      </thead>
      <tbody className={s.transactionHistory}>{children}</tbody>
    </table>
  );
}

TransactionTable.propTypes = {
  children: propTypes.node.isRequired,
};
