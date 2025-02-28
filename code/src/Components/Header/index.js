import React from 'react';
import styles from './HeaderStyling.module.css';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.headerTitle}>New albums & singles</h1>
      <hr />
    </div>
  );
};

export default Header;
