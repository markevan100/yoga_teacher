import React, { Component } from 'react'
import TextFileReader from '../../../TextFileReader/TextFileReader';
import classes from '../Blog.module.css';
import image1 from './img1.jpeg'
import image2 from './img2.jpeg'
import image3 from './img3.jpeg'

class Blog extends Component {

  render() {
    const myTxt1 = require("./blog1one.txt");
    const myTxt2 = require("./blog1two.txt");
    const myTxt3 = require("./blog1three.txt");
    const myTxt4 = require("./blog1four.txt");

    return (
      <div className={classes.Blog}>
        <h1>On "Strong" Women</h1>
        <TextFileReader
          txt={myTxt1}
        />
        <img src={image1} alt="Image" />
        <TextFileReader
          txt={myTxt2}
        />
        <img src={image2} alt="Image" />
        <TextFileReader
          txt={myTxt3}
        />
        <img src={image3} alt="Image" />
        <TextFileReader
          txt={myTxt4}
        />
      </div>
    )
  }
}



export default Blog;
