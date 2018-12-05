import React, {Component} from 'react';
import './UserOutput.css';

class UserOutput extends Component{

    render(){
        return (
            <div  className='UserOutput'>
                {this.props.paragraphs.map((par, index) => <p key={index}>{par}</p>)}
            </div>
        )
    }
}

export default UserOutput;