import React from 'react';

import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";  

import {AnimatePresence} from 'framer-motion';

import './App.css';

//Overall components
import {NavBar} from './components/navBar/navbar';

//Contexts
import {GlobalContextProvider} from './context/GlobalContext';
import {ProjectContextProvider} from './context/ProjectsContext';

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
  const location = useLocation();
  return (
    <GlobalContextProvider>
      <NavBar/>
      <AnimatePresence exitBeforeEnter>
        
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
              <Main/>
          </Route>
          <Route exact path="/projects">
            <ProjectContextProvider>
              <Monitor/>
              <Joystick/>
            </ProjectContextProvider>
          </Route>
          <Route exact path="/contact">
              <Contact />
          </Route>
          <Route path="*">
              <NotFound/>
          </Route>
        </Switch>
        
      </AnimatePresence>
    </GlobalContextProvider>
  );
}

export default App;
