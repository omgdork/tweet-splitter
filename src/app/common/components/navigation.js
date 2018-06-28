import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const Navigation = () => (
  <nav>
    <div className="container">
      <ul>
        {routes.map(({ name, path, exact }, i) => (
          <li key={`nav-${i}`}>
            <NavLink to={path} exact={exact}>{name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default Navigation;
