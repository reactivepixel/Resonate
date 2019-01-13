import React, { Component } from 'react'
import NavBar from './components/NavBar'
import EventList from './components/EventList'

// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <EventList />
      </div>
    );
  }
}

export default App;
