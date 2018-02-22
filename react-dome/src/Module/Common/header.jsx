import React from 'react';
import {Link } from 'react-router';
import "./style/header.less";
import NavLink from "./NavLink";

class Header extends React.Component {
  constructor(props){
    super(props);
    this.item = [];
  }
  render() {
    return (
        <header className="app-header">
          <nav>
            <NavLink to="/" >首页</NavLink>
            <NavLink to="/goods" >商品</NavLink>
            <NavLink to="/goods/5" >商品5</NavLink>
          </nav>
        </header>
    );
  }
} 

export default Header;