import PropTypes from 'prop-types';

export const FriendListItem = ({ friends }) => {
  return friends.map(({ avatar, name, isOnline, id }) => (
    <li className="item" key={id} style={{ listStyleType: 'none' }}>
      <span
        className="status"
        style={{
          display: 'block',
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          backgroundColor: isOnline ? 'green' : 'red',
        }}
      ></span>
      <img className="avatar" src={avatar} alt={name} width="48" />

      <p className="name">{name}</p>
    </li>
  ));
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
