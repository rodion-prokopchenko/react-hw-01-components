import TransactionTable from './components/TransactionTable/TransactionTable';
import TransactionList from './components/TransactionsList/TransactionsList';
import transaction from './transaction.json';

export default function AppTransactions() {
  return (
    <TransactionTable>
      <TransactionList transactions={transaction} />
    </TransactionTable>
  );
}
