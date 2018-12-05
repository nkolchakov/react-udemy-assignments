import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state =({
    input: ''
  })

  inputChangedHandler = (event) =>{
      const inputText = event.target.value;
      this.setState({
        input: inputText
      })
  }

  deleteClickedCharHandler = (index) =>{
      let chars = [...this.state.input];
      if(index < this.state.input.length){
        chars.splice(index,1);
      }

      this.setState({
        input: chars.join('')
      })
  }

  render() {

    const charCompList = this.state.input
                            .split('')
                            .map((ch,i) => {
                              return <CharComponent 
                                        key={i} 
                                        char={ch}
                                        click={this.deleteClickedCharHandler.bind(this,i)} />
                            })

    return (
      <div className="App">
        <input value={this.state.input} onChange={this.inputChangedHandler}/>
        <p>{this.state.input.length}</p>
        <ValidationComponent text={this.state.input}/>
        <hr/>
        {charCompList}
      </div>
    );
  }
}

export default App;
