import React, { Component } from 'react';

import '../styles/base.scss';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p className="footer-text">
          <a className="anchor"
             href="https://yagrawal.dev"
             target="_blank"
             rel="noopener noreferrer">
            © 2020, Yash Agrawal
          </a>
        </p>
      </div>
    );
  }
}

export default Footer;
