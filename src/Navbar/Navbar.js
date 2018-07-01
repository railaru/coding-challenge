import React, { Component } from 'react';
import './Navbar.css';

export class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="Navbar-Tags"align="center">
          <button className="btn btn-default filter-button" data-filter="all">All</button>
          <button className="btn btn-default filter-button" data-filter="office">office</button>
          <button className="btn btn-default filter-button" data-filter="plant">plant</button>
          <button className="btn btn-default filter-button" data-filter="job">job</button>                
          <button className="btn btn-default filter-button" data-filter="conversation">conversation</button>   
          <button className="btn btn-default filter-button" data-filter="conference">conference</button>
          <button className="btn btn-default filter-button" data-filter="device">device</button>                
          <button className="btn btn-default filter-button" data-filter="property">property</button>   
       
        </div>
      </div>
    );
  }
}
