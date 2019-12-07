import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import FuncComponent from '../components/FuncComponent';
import { responseRequest } from '../store/actions/responseActions';

class App extends Component {
  componentDidMount() {
    const { responseRequest } = this.props;

    // dispatch the action to get the events
    responseRequest();
    console.log( responseRequest());
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FuncComponent />
        </header>
      </div>
    );
  };
} 

const mapDispatchToProps = {
  responseRequest
};

export default connect(null, mapDispatchToProps)(App);
