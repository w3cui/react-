import React from 'react';
import Header from '../Common/header';

class Goods extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <Header></Header>
        <div className="commonMain">
          xxx嗨！
        </div>
        {this.props.children}
      </div>
    );
  }
} 
export default Goods;