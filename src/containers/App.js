import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import ComponentReactHook from '../components/ComponentReactHook';
import ComponentReduxHook from '../components/ComponentReduxHook';
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
          <ComponentReactHook />
        </header>
      </div>
    );
  };
} 

const mapDispatchToProps = {
  responseRequest
};

export default connect(null, mapDispatchToProps)(App);
