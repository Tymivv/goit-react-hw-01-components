import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.css';
import data from '../../Data/data.json';

const Statistics = ({ data }) => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {data.map(({ id, label, percentage }) => (
          <li key={id} className="item">
            <span className="label">.{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
