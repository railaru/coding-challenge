import React, { Component } from 'react';
import './Header.css';
import icon from './icon.svg';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <img src={icon} className="Header-Logo" alt="logo" />
      </div>
    );
  }
}

export default Header;
