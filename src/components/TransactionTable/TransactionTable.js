import propTypes from 'prop-types';

export default function TransactionTable({ children }) {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}

TransactionTable.propTypes = {
  children: propTypes.node.isRequired,
};
