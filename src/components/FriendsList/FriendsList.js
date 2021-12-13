import propTypes from 'prop-types';
import Friends from '../Friends/Friends';
import s from './FriendsList.module.css';

export default function FriendsList({ friends }) {
  return (
    <>
      <ul className={s.friendList}>
        {friends.map(friends => (
          <li className={s.item} key={friends.id}>
            <Friends
              avatar={friends.avatar}
              name={friends.name}
              isOnline={friends.isOnline}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

FriendsList.propTypes = {
  friend: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
    }),
  ),
};
