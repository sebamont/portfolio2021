import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";  
import logo from './logo.svg';
import './App.css';

// Components:
import {Monitor} from './components/monitor/monitor'
import {Joystick} from './components/joystick/joystick'

function App() {
  const [proj, setProj] = useState(0)
  
  const handleNextProj = (e) => {
    e.preventDefault();
    if (proj < 1){ //changing for the # of projects i have defined inside monitor.js
      let nextProj = proj +1;
      setProj(nextProj);
    }
  }
  const handlePrevProj = (e) => {
    e.preventDefault();
    if (proj > 0){
      let prevProj = proj -1;
      setProj(prevProj);
    }
    
  }
  return (
    <Router>
      <Switch>
        <Route exact path="/projects">
          <Monitor currentProj={proj}/>
          <Joystick handlePrevProj={handlePrevProj} handleNextProj={handleNextProj}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
