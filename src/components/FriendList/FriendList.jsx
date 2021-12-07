import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.css';
import friends from '../../Data/friends.json';
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul class="friend-list">
      <FriendListItem friends={friends} />
    </ul>
  );
};

export default FriendList;
