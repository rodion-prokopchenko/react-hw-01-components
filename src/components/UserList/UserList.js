import User from '../User/User';
import s from './UserList.module.css';

function UserList({ user }) {
  return (
    <div className={s.profile}>
      <User
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
}

export default UserList;
