import React from 'react';
import { Lifecycle } from 'react-router'
import Header from '../Common/header';
import ReactQMap from 'react-qmap';

/*表单组件*/

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      name:"",
      password:""
    }
    this.getChange = this.getChange.bind(this);
    this.pushSubmit = this.pushSubmit.bind(this);

  }


  getChange(event){    
    console.log(event.target.name);
    this.setState({
      [event.target.name]:event.target.value
    });
  }

  pushSubmit(event){
    //阻止提交
    console.log(this.state);
    event.preventDefault();
  }

  render(){
    return (
      <form onSubmit={ this.pushSubmit } >
        <input type="text" name="name" placeholder="账号" onChange = { this.getChange } value = {this.state.name} />
        <input type="password"  name="password" placeholder="密码" onChange = { this.getChange } value = {this.state.password} />
        <input type="submit" />
        <hr />
        姓名：{this.state.name} <br/>
        密码：{this.state.password}
        <hr/>
        <ReactQMap 
          center={{latitude: 39.96693, longitude: 116.49369}} 
          initialOptions={{zoomControl: true, mapTypeControl: true}} 
          apiKey="2U5BZ-6VEW3-HQF35-YQ2HK-GCXOF-SIFTZ"
          style={{height: 300}} 
        />
      </form>
      );
  }

};

class Goods extends React.Component {
  // 假设 Home 是一个 route 组件，它可能会使用
  // Lifecycle mixin 去获得一个 routerWillLeave 方法。
  mixins: [ Lifecycle ]

  constructor(props){
    super(props);
    this.isSaved = true;
    this.state = {
      isBack : false
    }

    // 这个绑定是必要的，使`this`在回调中起作用
    this.getClickUpload = this.getClickUpload.bind(this);

  }
  // 组件即将开始渲染 钩子
  componentDidMount(e) {
    console.log(e);
  }
  // 消耗组件 钩子
  componentWillUnmount(e) {
    console.log(e);
  }

  // 事件绑定
  getClickUpload(){
    console.log("绑定成功","font-size:15px;")
    //注意跟新state数据方式
    this.setState(prevState => ({
      isBack: !prevState.isBack
    }))
  }
  render() {
    return (
      <div>
        <Header></Header>
        <div style={{background: this.state.isBack ? '#f1f1f1' : '#ff0'  }}  className="commonMain" onClick={ this.getClickUpload }>
          xxx嗨！范德萨范德萨
          {this.isSaved}
          {this.props.id}
        </div>
        {this.props.children}
        <Forms></Forms>
      </div>
    );
  }
} 



export default Goods;


