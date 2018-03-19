import React from 'react';
import { Lifecycle } from 'react-router'
import ReactQMap from 'react-qmap';

import { Button, DatePicker, Layout } from 'uiw';

/*表单组件*/

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: ""
    }
    this.getChange = this.getChange.bind(this);
    this.pushSubmit = this.pushSubmit.bind(this);
  }

  getChange(event) {
    console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  pushSubmit(event) {
    //阻止提交
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.pushSubmit} >
        <input type="text" name="name" placeholder="账号" onChange={this.getChange} value={this.state.name} />
        <input type="password" name="password" placeholder="密码" onChange={this.getChange} value={this.state.password} />
        <input type="submit" />
        <hr />
        姓名：{this.state.name} <br />
        密码：{this.state.password}
        <hr />
        <ReactQMap
          center={{ latitude: 39.96693, longitude: 116.49369 }}
          initialOptions={{ zoomControl: true, mapTypeControl: true }}
          apiKey="2U5BZ-6VEW3-HQF35-YQ2HK-GCXOF-SIFTZ"
          style={{ height: 300 }}
        />
      </form>
    );
  }

};


export default Forms;


