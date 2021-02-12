import React, {useState} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";  

import {AnimatePresence} from 'framer-motion';

import './App.css';

//Landing page components:
import {Main} from './components/pages/landing/landing';

// Project section Components:
import {Monitor} from './components/pages/projects/monitor/monitor'
import {Joystick} from './components/pages/projects/joystick/joystick'

// contact section components:
import {Contact} from './components/pages/contact/contact';

function App() {
  const [proj, setProj] = useState(0)
  
  const handleNextProj = (e) => {
    e.preventDefault();
    if (proj < 3){ //changing for the # of projects i have defined inside monitor.js
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

  const location = useLocation();
  return (
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
              <Main />
          </Route>
          <Route exact path="/projects">
              <Monitor currentProj={proj}/>
              <Joystick handlePrevProj={handlePrevProj} handleNextProj={handleNextProj}/>
          </Route>
          <Route exact path="/contact">
              <Contact />
          </Route>
        </Switch>
      </AnimatePresence>
  );
}

export default App;
