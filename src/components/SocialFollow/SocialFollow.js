import React from "react";
import { Link } from 'react-router-dom';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import './SocialFollow.css';

export default function SocialFollow() {
  return (
    <div>
      <Link to="/contact">
        <FontAwesomeIcon icon={faEnvelope} className="email social"/>
      </Link>
      <a href="https://twitter.com/ArianaGrande?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
      href="https://www.instagram.com/jfmodak/"
      className="instagram social"
      >
      <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/johanna-modak/" className="linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
    </div>
  );
}
