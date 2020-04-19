import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Navbar from './components/pages/Navbar/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import AddUser from './components/Users/AddUser';
import EditUser from './components/Users/EditUser';
import ViewUser from './components/Users/ViewUser';

function App() {
  return (
    <Router>
      <div className="App container">
      <Navbar/>
      <Switch>
          <Route exact path="/">
           <Home/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
          <Route exact path='/users/add'>
          <AddUser></AddUser>

          </Route>

          <Route exact path='/users/edit/:id'>
         <EditUser></EditUser>

          </Route>
          <Route exact path = '/users/view/:id'>
            <ViewUser></ViewUser>
          </Route>
        </Switch>
      

    </div>
    </Router>
    
  );
}

export default App;
