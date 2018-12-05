import React from 'react';

// create as a function component
const userInput = (props) =>{

    // inline react styling
    const style = {
        textAlign: 'center',
        padding:'5px',
        boxShadow: '3px 2px #eee',
        fontSize: 'inherit',
        marginTop: '15px'
    };

    return(
        <div className='UserInput'>
            <input
                style={style}
                type='text' 
                value={props.username} 
                onChange={props.switch}/>
        </div>
    )
}

export default userInput;