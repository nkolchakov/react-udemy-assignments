import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'admin123'
  }

  switchUsernameHandler = (event) =>{
    this.setState({
      username: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
          <UserOutput  paragraphs={['p1','p2']}/>
          <UserOutput  paragraphs={[this.state.username, 'par4']}/>

          <UserInput username={this.state.username} switch={this.switchUsernameHandler.bind(this)} />
      </div>
    );
  }
}
export default App;
