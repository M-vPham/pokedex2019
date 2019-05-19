/**You import the containers into this file */
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';
import OpeningPage from './container/OpeningPage';
import filterPage from './container/filterPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <OpeningPage></OpeningPage>
          <FirstComponent displaytext="First Component Data"/>

        </header>
      </div>
    );
  }
}

export default App;
