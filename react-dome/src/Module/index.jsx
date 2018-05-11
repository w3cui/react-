import React from 'react';
import { Router, Route, Link} from 'react-router';
import { Button, Layout, Input} from 'uiw';
import Header from './Common/header';
import {getQueryActivities} from '@/Config/api';

import { digitUppercase } from '@/utils/utils';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.getAttribute = function () { };
    this.logo = "http:\//ww4.sinaimg.cn/thumb180/0069kQGBgy1foaj1sj8grj32c0340e81.jpg";
    this.state = {
      loading: false,
      loading3: false,
      loading4: false,
      loading5: true,
      loading2: false,
      anum:0,
      ase:0
    }
  }
  componentDidMount(){
    getQueryActivities().then(response => { 
      console.log(response);
    });

    this.setState({ ase: digitUppercase(this.state.anum) });
    
  }
  onChange(key, e, value){
    let { anum, ase  } = this.state;
    anum = value;
    ase = digitUppercase(value);
    this.setState({ anum, ase });
  }
  render() {
    const { Row, Col } = Layout;
    return (
      <Row gutter="20" className="app-main" >
        <Col span="4"><Header></Header></Col>
        <Col span="20">
          <p> {this.state.ase} </p>
          <Input
            value={this.state.anum}
            preIcon="user"
            placeholder="请输入用户名"
            type="number"
            onChange={this.onChange.bind(this, 'name')} />

          <Button size="mini" loading={this.state.loading}
            onClick={() => {
              console.log("loading:", this.state.loading)
              this.setState({ loading: true })
            }}>
            点击Loading
            </Button>
          <Button size="small" type="success" loading={this.state.loading2}
            onClick={() => {
              console.log("loading2:", this.state.loading2)
              this.setState({ loading2: true })
            }}>
            点击Loading
            </Button>
          <Button size="small" type="info" loading={this.state.loading5}
            onClick={() => {
              console.log("loading5:", this.state.loading5)
            }}>
            点击Loading
            </Button>
          <Button size="default" type="success" loading={this.state.loading3}
            onClick={() => {
              console.log("loading3:", this.state.loading3)
              this.setState({ loading3: true })
            }}>
            点击Loading
            </Button>
          <Button size="large" type="danger" loading={this.state.loading4}
            onClick={() => {
              console.log("loading4:", this.state.loading4)
              this.setState({ loading4: true })
            }}>
            点击Loading
            </Button>
          <div className="App-header">
            <img src={this.logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
                </p>
        </Col>
      </Row>
    );
  }
}
export default App;