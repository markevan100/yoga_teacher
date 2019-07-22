import React from 'react';
import { Link } from 'react-router-dom';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = props => (
  <ul className={classes.NavigationItems}>
    <NavigationItem><Link to="/" exact>Home</Link></NavigationItem>
    <NavigationItem><Link to="/about">About</Link></NavigationItem>
    <NavigationItem><Link to="/blogs">Blogs</Link></NavigationItem>
  </ul>
);

export default navigationItems;
