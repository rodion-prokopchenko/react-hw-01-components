import propTypes from 'prop-types';
import Transaction from '../Transactions/Transactions';
// import s from './TransactionList.module.css';

export default function TransactionList({ transactions }) {
  return (
    <>
      {transactions.map(transactions => (
        <tr key={transactions.id}>
          <Transaction
            type={transactions.type}
            amount={transactions.amount}
            currency={transactions.currency}
          />
        </tr>
      ))}
    </>
  );
}

TransactionList.propTypes = {
  transactions: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
    }),
  ),
};
