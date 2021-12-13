import propTypes from 'prop-types';
import s from './Friends.module.css';

const Friends = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span className={isOnline ? s.online : s.offline}>{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </>
  );
};

Friends.propTypes = {
  isOnline: propTypes.bool.isRequired,
  name: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
};

export default Friends;
