// import PaintingList from './components/PaintingList';
// import Section from './components/Section';
// import paintings from './paintings.json';

import UserList from './components/UserList/UserList';
import user from './components/User.json';

export default function App() {
  return (
    <div>
      <UserList user={user} />
    </div>
  );
}
