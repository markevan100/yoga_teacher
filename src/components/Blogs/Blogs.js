import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import classes from './Blog/Blog.module.css'
import image1 from './Blog/Blog1/img2.jpeg'
import image2 from './Blog/Blog2/img6.jpeg'
import TextFileReader from '../TextFileReader/TextFileReader';

class Blogs extends Component {


  render () {
    const myTxt1 = require("./Blog/Blog1/blog1short.txt");
    const myTxt2 = require("./Blog/Blog2/blog2short.txt");

    return (
      <React.Fragment>
        <Link to="/blog1" className={classes.NoDec}>
          <div className={classes.Blog}>
            <h1>On "Strong" Women</h1>
            <div className={classes.Blogs}>
            <img src={image1} alt="Image" />
              <TextFileReader
                txt={myTxt1}
              />
            </div>
          </div>
        </Link>
        <Link to="/blog2" className={classes.NoDec}>
          <div className={classes.Blog}>
            <h1>Millenial Phrases</h1>
            <div className={classes.Blogs}>
            <img src={image2} alt="Image" />
              <TextFileReader
                txt={myTxt2}
              />
            </div>
          </div>
        </Link>
      </React.Fragment>
    )
  }
}

export default Blogs;
