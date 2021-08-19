import React from 'react';
import classes from './Header.module.scss';

const Header: React.FC = props => {
  return (
    <div className={classes.header}>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
