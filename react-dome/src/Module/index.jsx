import React from 'react';
import { Router, Route, Link } from 'react-router';

import Header from './Common/header';


class App extends React.Component {
  constructor(props){
    super(props);
    this.getAttribute = function(){};
    this.logo = "http:\//ww4.sinaimg.cn/thumb180/0069kQGBgy1foaj1sj8grj32c0340e81.jpg";
  };
  render() {
    return (
      <div>
       <Header></Header>
        <div className="App-header">
          <img src={this.logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.props.children}
      </div>
    );
  }
} 
export default App;