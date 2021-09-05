import style from './FriendList.module.css'
import PropTypes from 'prop-types';

export default function FriendList({friends}){
    return (
      <ul className={style.friendList}>
        {friends.map(friend => (
          <li className={style.item} key={friend.id}>
            <span className={style.status} style={{ backgroundColor: friend.isOnline ? 'green' : 'red' }}>{friend.isOnline}</span>
            <img
              className={style.avatar}
              src={friend.avatar}
              alt=" "
              width="48"
            />
            <p className={style.name}>{friend.name}</p>
          </li>
         ))}
      </ul>
    );
};

FriendList.propTypes = {
        friends: PropTypes.shape({
          id: PropTypes.number.isRequired,
        }),
      };


