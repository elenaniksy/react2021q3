import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <div className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName={classes.active}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' activeClassName={classes.active}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
