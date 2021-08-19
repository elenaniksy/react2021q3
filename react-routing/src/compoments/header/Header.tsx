import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <div className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
