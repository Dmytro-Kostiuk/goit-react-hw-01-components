import React from 'react';
import Profile from './component/profile/Profile';
import Statistics from './component/Statistic/Statistics';
import FriendList from './component/FriendList/FriendList';
import TransactionHistory from './component/TransactionHistory/TransactionHistory';
import transactions from './component/TransactionHistory/transactions.json';
import friends from './component/FriendList/friends.json';
import stats from './component/Statistic/statistical-data.json';
import user from './component/profile/user.json';

const App = () => {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={stats} />

      <Statistics stats={stats} />
      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
