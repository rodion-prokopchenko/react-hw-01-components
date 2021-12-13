import propTypes from 'prop-types';

const Transaction = ({ type, amount, currency }) => {
  return (
    <>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
};

export default Transaction;

Transaction.prototype = {
  type: propTypes.string.isRequired,
  amount: propTypes.number.isRequired,
  currency: propTypes.string.isRequired,
};
