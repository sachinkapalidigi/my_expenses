import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      example: 'my new example',
    };
  }

  render() {
    const { example } = this.state;
    return (
      <div>
        Expense tracker/ manager
        <h1>this is a react app {example}</h1>
      </div>
    );
  }
}

export default App;
