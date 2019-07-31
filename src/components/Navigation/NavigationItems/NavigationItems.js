import React from 'react';
import { Link } from 'react-router-dom';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import SocialFollow from '../../SocialFollow/SocialFollow';

const navigationItems = props => (
  <React.Fragment>
    <div className={classes.DropdownHold}>
      <div className={classes.dropdown}>
        <button className={classes.dropbtn}>Cool content from Joh...</button>
        <div className={classes.dropdownContent}>
          <a href="#">Recipes</a>
          <a href="#">Yoga</a>
          <a href="#">One Liners</a>
        </div>
      </div>
    </div>
    <ul className={classes.NavigationItems}>
      <NavigationItem><Link to="/" exact>Home</Link></NavigationItem>
      <NavigationItem><Link to="/about">About</Link></NavigationItem>
      <NavigationItem><Link to="/blogs">Blogs</Link></NavigationItem>
    </ul>
    <div className={classes.SocialHold}>
      <SocialFollow/>
    </div>
  </React.Fragment>
);

export default navigationItems;
