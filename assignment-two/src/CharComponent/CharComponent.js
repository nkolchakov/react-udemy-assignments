import React, { Component } from 'react'; 
import './CharComponent.css'

class CharComponent extends Component{

    render(){
        return (
            <div className="CharComponent"
                 onClick={this.props.click}
            >
                <p>{this.props.char}</p>
            </div>
        )
    }
}

export default CharComponent;