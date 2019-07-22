import React, { Component } from 'react'
import TextFileReader from '../../../TextFileReader/TextFileReader';
import classes from '../Blog.module.css';
import image5 from './img5.jpeg'
import image6 from './img6.jpeg'

class Blog extends Component {

  render() {
    const myTxt1 = require("./blog2one.txt");

    return (
      <div className={classes.Blog}>
        <h1>Phrases to Know for those trying to love or work with Millenials</h1>
        <TextFileReader
          txt={myTxt1}
        />
        <div className={classes.Images}>
          <img src={image5} alt="Image" />
          <img src={image6} alt="Image" />
        </div>
      </div>
    )
  }
}



export default Blog;
