import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div align="center">
          
          <button className="btn btn-default filter-button" data-filter="all">All</button>
          <button className="btn btn-default filter-button" data-filter="People">People</button>
          <button className="btn btn-default filter-button" data-filter="Plants">Plants</button>
          <button className="btn btn-default filter-button" data-filter="Chairs">Chairs</button>
          <button className="btn btn-default filter-button" data-filter="Windows">Windows</button>
        </div>
      </div>
    );
  }
}

export default Navbar;
