import React from 'react';
import MainLayout from '../../layouts/main-layout';
import { NavLink } from 'react-router-dom';

const NotFound = () => (
  <MainLayout>
    <h1>Page not found</h1>
    <NavLink to="/">Go back to the home page</NavLink>
  </MainLayout>
);

export default NotFound;
