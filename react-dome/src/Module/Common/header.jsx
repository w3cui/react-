import React from 'react';
import { Link } from 'react-router';

import "./style/header.less";
import NavLink from "./NavLink";
import { Menu, Icon } from 'uiw';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.item = [];
    this.state= {
      windowHeight: window.innerHeight
    }
  }
  onSelect() {

  }
  onClose(index) {
    console.log("index::", index)
  }
  onOpen(index) {
    console.log("index::", index)
  }
  render() {
    return (
      <Menu

        defaultActive="1"

        defaultOpened={['2']}

        style={{ width: "100%", height: this.state.windowHeight + "px", overflow: "hidden", overflowY: "auto" }}

        onClose={this.onClose.bind(this)}
        onSelect={this.onSelect.bind(this)}>

        <Menu.Item index="1"><Icon type="date" /><NavLink to="/" >首页</NavLink></Menu.Item>

        <Menu.SubMenu index="2" title={<span><Icon type="menu" /><span>商品</span></span>}>
          <Menu.Item index="2-1"><NavLink to="/goods" >进口食品</NavLink></Menu.Item>
          <Menu.Item index="2-2">食品饮料</Menu.Item>
          <Menu.Item index="2-3">美容洗护</Menu.Item>
        </Menu.SubMenu>

        <Menu.Item disabled index="3"><Icon type="windows" />淘抢购</Menu.Item>

        <Menu.Item index="4"><Icon type="star-on" />电器城</Menu.Item>

        <Menu.SubMenu index="5" title={<span><Icon type="verification" /><span>折叠菜单</span></span>}>
          <Menu.Item index="5-1">生活电器</Menu.Item>
          <Menu.Item index="5-2">厨房电器</Menu.Item>
          <Menu.Item index="5-3">健康电器</Menu.Item>
          <Menu.Item index="5-4">手机配件</Menu.Item>
        </Menu.SubMenu>

        <Menu.SubMenu index="6" title={<span><Icon type="verification" /><span>折叠菜单</span></span>}>
          <Menu.Item index="6-1">生活电器</Menu.Item>
          <Menu.Item index="6-2">厨房电器</Menu.Item>
          <Menu.Item index="6-3">健康电器</Menu.Item>
          <Menu.Item index="6-4">手机配件</Menu.Item>
        </Menu.SubMenu>

        <Menu.SubMenu index="7" title={<span><Icon type="verification" /><span>折叠菜单</span></span>}>
          <Menu.Item index="7-1">生活电器</Menu.Item>
          <Menu.Item index="7-2">厨房电器</Menu.Item>
          <Menu.Item index="7-3">健康电器</Menu.Item>
          <Menu.Item index="7-4">手机配件</Menu.Item>
        </Menu.SubMenu>

        <Menu.SubMenu index="8" title={<span><Icon type="verification" /><span>折叠菜单</span></span>}>
          <Menu.Item index="8-1">生活电器</Menu.Item>
          <Menu.Item index="8-2">厨房电器</Menu.Item>
          <Menu.Item index="8-3">健康电器</Menu.Item>
          <Menu.Item index="8-4">手机配件</Menu.Item>
        </Menu.SubMenu>
        
      </Menu>
    );
  }
}

export default Header;