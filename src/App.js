import React, {useState} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";  

import {AnimatePresence} from 'framer-motion';

import './App.css';

//Overall components
import {useLocalStorage} from './functions/useLocalStorage';
import {NavBar} from './components/navBar/navbar';


//Landing page components:
import {Main} from './components/pages/landing/landing';

// Project section Components:
import {Monitor} from './components/pages/projects/monitor/monitor'
import {Joystick} from './components/pages/projects/joystick/joystick'

// contact section components:
import {Contact} from './components/pages/contact/contact';

// 404 not found page component:
import {NotFound} from './components/pages/notFound/notFound';

function App() {
  const [proj, setProj] = useState(0)
  const [english, setEnglish] = useLocalStorage("english", true);

  const handleChangeLanguage = (e) => {
    e.preventDefault();
    setEnglish(!english);
  }
  
  const handleNextProj = (e) => {
    e.preventDefault();
    if (proj < 4){ //changing for the # of projects i have defined inside monitor.js
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
    <div>
      <NavBar handleChangeLanguage={handleChangeLanguage} english={english}/>
      <AnimatePresence exitBeforeEnter>
        
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
              <Main english={english}/>
          </Route>
          <Route exact path="/projects">
              <Monitor currentProj={proj} english={english}/>
              <Joystick handlePrevProj={handlePrevProj} handleNextProj={handleNextProj} currentProj={proj}/>
          </Route>
          <Route exact path="/contact">
              <Contact english={english}/>
          </Route>
          <Route path="*">
              <NotFound english={english}/>
          </Route>
        </Switch>
        
      </AnimatePresence>
      </div>
  );
}

export default App;
