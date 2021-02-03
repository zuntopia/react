// import logo from './logo.svg';

import React, { Component } from 'react';

import './App.css';
import ScrollBox from './ScrollBox'

// function App() {
//   return (
//     <div>
//       <ScrollBox ref={(ref) => this.scrollBox=ref }/>
//       <button onClick={() => this.ScrollBox.scrollToBottom()} > to Bottom </button>
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => this.scrollBox=ref }/>
        <button onClick={() => this.scrollBox.scrollToBottom()} > to Bottom </button>
      </div>
    );
  }
}

export default App;
