import propTypes from 'prop-types';

const User = ({ username, tag, location, avatar, stats }) => {
  return (
    <>
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>
      <ul className="stats">
        <li>
          <span className="label">Followers:</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views:</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes:</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </>
  );
};

User.propTypes = {
  username: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  stats: propTypes.object.isRequired,
};

export default User;
