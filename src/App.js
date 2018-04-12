import React, { Component } from 'react';
import './App.css';
// Import our newly created classes
import HomeComponent from './HomeComponent';
import ResultComponent from './ResultComponent';

class App extends Component {
  constructor() {
    super();

    this.state = {
      screen: 1,
      submittedValue: ''
    }
  }

  setScreen = (index, value) => {
    this.setState({
      submittedValue: value,
      screen: index
    });
  }

  render() {
    // screen 1 = HomeComponent, screen 2 = ResultComponent
    switch(this.state.screen) {
      case 1:
        return <HomeComponent setScreenFunc={this.setScreen} />;
      case 2:
        return <ResultComponent submittedValue={this.state.submittedValue} />;
    }
  }
}

export default App;
