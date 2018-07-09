import React, { Component } from 'react';
import Parent from './ParentComponent';

class Child2 extends React.Component {
   render (){
       return (
           <div>
               <h4>OtherChild</h4>
               Value in OtherChild Props: {this.props.passedVal}
           </div>
       )
   }
}

export default Child2;

