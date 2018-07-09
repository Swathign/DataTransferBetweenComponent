import React, { Component } from 'react';
import '../App.css';
import Child1 from "./ChildComponent";
import Child2 from './ChildComponet2';

class Parent extends React.Component {
  constructor(props){
    super(props);
    this.state = {name : "", age : 23}
  }

  onUpdate = (val) => {
    this.setState ( {
      name : val
    });
  };

  render () {
    return(
      <div>
        <p>Hello I am a Parent</p>
        {/* <br/> */}
        <p>my name is {this.state.name}</p>

        <Child1 onUpdate={this.onUpdate}>Child Component 1</Child1>
        <Child2  passedVal = {this.state.name}> </Child2>
      </div>
    );
  }

}
export default Parent;
