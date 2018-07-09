import React, {Component} from 'react';
import Parent from './ParentComponent';

class Child1 extends React.Component {
    constructor(props){
        super(props);
        this.state = { name : ""}
    }

    onUpdate = (e) => {
        console.log(e.target.value);
        this.props.onUpdate(e.target.value);
        this.setState({ name: e.target.value });
    }

    render (){
        return(
        <div>
            <p>child 1</p>
                <input type="text" placeholder="enter anything here" onChange={this.onUpdate} value = {this.state.name} />
        </div>)
    };
}

export default Child1;

