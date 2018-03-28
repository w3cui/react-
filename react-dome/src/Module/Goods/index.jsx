import React from 'react';
import { Lifecycle } from 'react-router'
import Header from '../Common/header';
import ReactQMap from 'react-qmap';

import { Button, DatePicker, Layout } from 'uiw';
import Forms from './commont/form';


class Goods extends React.Component {
  // 假设 Home 是一个 route 组件，它可能会使用
  // Lifecycle mixin 去获得一个 routerWillLeave 方法。
  mixins: [Lifecycle]

  constructor(props) {
    super(props);
    this.isSaved = true;
    this.state = {
      isBack: false,
      setValue: new Date()
    }

    // 这个绑定是必要的，使`this`在回调中起作用
    this.getClickUpload = this.getClickUpload.bind(this);

  }
  // 组件即将开始渲染 钩子
  componentDidMount(e) {
    console.log(this);
    // document.getElementsByTagName('head')[0].appendChild((function () {
    //   var scriptBuild = document.createElement('script');
    //   alert(scriptBuild);
    //   scriptBuild.type = "application/javascript";
    //   scriptBuild.charset = 'utf-8';
    //   scriptBuild.src = "http://p1static.dataoke.com/web/js/jquery-1.12.4.min.js";
    //   scriptBuild.addEventListener('load', function (e) {
    //     console.log("1", e);
    //   }, false);
    //   return scriptBuild;
    // })());
  }
  // 消耗组件 钩子
  componentWillUnmount(e) {
    console.log(e);
  }

  // 事件绑定
  getClickUpload() {
    console.log("绑定成功", "font-size:15px;")
    //注意跟新state数据方式
    this.setState(prevState => ({
      isBack: !prevState.isBack
    }))
  }

  render() {

    const { Row, Col } = Layout;
    return (
      <Row gutter="20">
        <Col span="4"><Header></Header></Col>
        <Col span="20">

          <div style={{ background: this.state.isBack ? '#f1f1f1' : '#ff0' }} className="commonMain" onClick={this.getClickUpload}>
            xxx嗨！范德萨范德萨
          {this.isSaved}
            {this.props.id}
          </div>
          {this.props.children}
          <Forms></Forms>
          {/* uiw 时间组件 */}
          <hr />
          <DatePicker
            showToday
            value={this.setValue}
            shortcutinline={true}
            shortcuts={[
              {
                text: '昨天',
                onClick: () => {
                  this.setState({ setValue: new Date(Date.now() - 86400000) })
                }
              }, {
                text: '一周前',
                onClick: () => {
                  this.setState({ setValue: new Date(Date.now() - 86400000 * 7) })
                }
              }, {
                text: '一月前',
                onClick: () => {
                  this.setState({ setValue: new Date(Date.now() - 86400000 * 30) })
                }
              }
            ]}
          />
          <DatePicker showToday={true} />
          <DatePicker showToday={true} value={new Date()} />
          <DatePicker showToday={true} value={new Date()} weekLabel={['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']} />
        </Col>
      </Row>
    );
  }
}



export default Goods;


