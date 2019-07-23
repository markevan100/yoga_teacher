import React from 'react';
import classes from './About.module.css';
import image1 from './img7.jpg';

const about = props => (
  <React.Fragment>
    <div className={classes.About}>
      Hi, I'm Johanna. I am a yoga teacher (200hr Yoga Alliance Certified), gut
      science enthusiast, health investigator, sucker for health food marketing,
      and sometimes writer. I like to spend my time considering ways to make sure
      I have access to chocolate, how soon I can get to yoga class, stoopid
      societal patterns, and one-liners for my non-existent Twitter.
    </div>
    <img src={image1} alt="Image" className={classes.Images}/>

  </React.Fragment>
);

export default about;
