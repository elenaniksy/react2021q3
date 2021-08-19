import React from 'react';
import classes from './Header.module.scss';

const Header: React.FC = props => {
  return (
    <div className={classes.header}>
      <nav>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/about'>About</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
