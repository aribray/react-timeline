import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';

import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent';

class App extends Component {
  render() {
    // console.log(timelineData.events);
    // Customize the code below
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">I Do Not Like This Sam I Am</h1>
        </header>
        <main className="App-main">
          <Timeline 
            events={timelineData.events}/>
        </main>
      </div>
    );
  }
}

export default App;
