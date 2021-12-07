import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import data from '../../Data/data.json';
import user from '../../Data/user.json';
import FriendList from '../FriendList/FriendList';
import friends from '../../Data/friends.json';
import transactions from '../../Data/transactions.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics data={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};

export default App;
