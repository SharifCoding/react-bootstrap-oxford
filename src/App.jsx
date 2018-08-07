import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import News from './components/News';
import About from './components/About';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path="/news" component={News} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
