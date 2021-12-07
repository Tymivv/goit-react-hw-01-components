import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.css';
import transactions from '../../Data/transactions.json';
import TransactionHistoryItem from '../TransactionHistoryItem/TransactionHistoryItem';

const TransactionHistory = ({ transactions }) => {
  return (
    <table class="transaction-history">
      <thead>
        <tr className="transaction-nav">
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        <TransactionHistoryItem transactions={transactions} />
      </tbody>
    </table>
  );
};

export default TransactionHistory;
