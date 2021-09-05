import './App.css';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';

import user from './data/user.json';
import statistical from './data/statistical.json';

export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statistical} />
    </div>
  );
}
