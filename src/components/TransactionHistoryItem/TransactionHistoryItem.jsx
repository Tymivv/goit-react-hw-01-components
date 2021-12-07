import styles from './TransactionHistoryItem.module.css';

const TransactionHistoryItem = ({ transactions }) => {
  return transactions.map(({ id, type, amount, currency }) => (
    <tr className={styles.tr} key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  ));
};

export default TransactionHistoryItem;
