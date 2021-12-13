import FriendsList from './components/FriendsList/FriendsList';
import friends from './friends.json';

export default function AppFriends() {
  return <FriendsList friends={friends} />;
}
