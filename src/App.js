import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

const App = () => {
  return (
     <Router>
      <Navbar/>
      <Switch>

         {/* HomePage*/}
        <Route exact path='/'>
          <HomePage />
        </Route> 
        
      </Switch>
    </Router>
  );
}

export default App;
