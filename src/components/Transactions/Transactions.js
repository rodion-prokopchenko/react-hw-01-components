import propTypes from 'prop-types';
import s from './Transactions.module.css';

const Transaction = ({ type, amount, currency }) => {
  return (
    <>
      <td className={s.transactionHistoryTbodyElements}>{type}</td>
      <td className={s.transactionHistoryTbodyElements}>{amount}</td>
      <td className={s.transactionHistoryTbodyElements}>{currency}</td>
    </>
  );
};

export default Transaction;

Transaction.prototype = {
  type: propTypes.string.isRequired,
  amount: propTypes.number.isRequired,
  currency: propTypes.string.isRequired,
};
