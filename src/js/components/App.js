/**
 * Created by yashw on 24-02-2017.
 */

import React, {Component} from 'react';

export default class App extends Component{
    constructor(){
        super();
        this.state = {
            labelValue: "before Click!"
        }
    }

    _handleButtonClick(){
        if(this.state.labelValue == "before Click!"){
            this.setState({
                labelValue: "after Click!"
            })
        }
        else{
            this.setState({
                labelValue: "before Click!"
            })
        }

    }

    render(){
        return(
            <div>
                <h3>Text Changer</h3>
                <label>{this.state.labelValue}</label><br/>
                <button onClick={this._handleButtonClick.bind(this)}>Change Label Text</button>
            </div>
        );
    }
}