import User from '../User/User';

function UserList({ user }) {
  return (
    <div className="profile">
      <User
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      )
    </div>
  );
}

export default UserList;
