import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListItem.css';
import friends from '../../Data/friends.json';

const FriendListItem = ({ friends }) => {
  return friends.map(({ avatar, name, isOnline, id }) => (
    <li key={id} className="id">
      {isOnline === true ? (
        <span className="status"></span>
      ) : (
        <span className="not-status"></span>
      )}
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  ));
};

export default FriendListItem;
