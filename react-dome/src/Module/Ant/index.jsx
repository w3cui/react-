import React from 'react';
import { Lifecycle } from 'react-router'
import Header from '../Common/header';
import ReactQMap from 'react-qmap';

// import { Layout } from 'uiw';

import { Layout, Menu, Icon, Button } from 'antd';




class Goods extends React.Component {
  // 假设 Home 是一个 route 组件，它可能会使用
  // Lifecycle mixin 去获得一个 routerWillLeave 方法。
  mixins: [Lifecycle]

  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    }
    this.toggleCollapsed = this.toggleCollapsed.bind(this);
  }

  toggleCollapsed() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  // 组件即将开始渲染 钩子
  componentDidMount(e) {
    console.log(e);
  }
  // 消耗组件 钩子
  componentWillUnmount(e) {
    console.log(e);
  }

  render() {
    const { Footer, Sider, Content } = Layout;
    const AnHeader = Layout.Header;
    const SubMenu = Menu.SubMenu;

    return (
      <Layout>
        <Sider>
          <Header></Header> 
        </Sider>
        <Layout>
          <AnHeader>
            <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
            <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
            </Button>
          </AnHeader>
          <Content>
            
              
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    );
  }
}



export default Goods;


