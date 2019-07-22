import React from 'react';
import classes from './Home.module.css';

const home = props => (
  <div className={classes.Home}>
    <img src="../../Assets/Images/yoga.jpeg" alt="" />
    <p className={classes.Name}>Johanna Modak</p>
    <p className={classes.Descriptor}>Yoga Teacher | Gut Biome Guide | Social Guru <small> (AKA Blogger) </small></p>
  </div>
);

export default home;
