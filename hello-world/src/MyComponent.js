import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class MyComponent extends Component {
  render() {
      const{title,name,onClick}=this.props;
    return (
      <div className="component">
      <h1> This is a component</h1>
      <h2> Title: {title}</h2>
      <h2> Name: {name}</h2>
      <div onClick={onClick}>Click here</div>
      </div>
    );
  }
}

export default MyComponent;
