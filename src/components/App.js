import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/App.css';
import RecipeContainer from '../containers/RecipeContainer';
import FormContainer from '../containers/FormContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FormContainer/>
        <RecipeContainer/>
      </div>
    );
  }
}

App = connect()(App)

export default App;
