import React from 'react';
import styles from "./profile.module.css";
import PropTypes from 'prop-types';


const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description} >
        <img src={avatar} alt={name} className={styles.avatar} />
        <h2 className={styles.name} >{name}</h2>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.stats}>
        <li className={styles.items}>
          <span className={styles.label}>Followers:</span>   
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li className={styles.items}>
          <span className={styles.label}>Views:</span>
          
          <span className={styles.quantity}>{stats.views}</span>
        </li>
        <li className={styles.items}>
          <span className={styles.label}>Likes:</span>
          <span className={styles.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object,

}

export default Profile;
