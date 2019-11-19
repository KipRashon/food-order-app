import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Orders from './components/Orders';
import History from './components/History.js';
import CartDetails from './components/CartDetails';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
 return(
    <React.Fragment>
      
      <Switch>
    
      <Route exact path="/" component={Orders}/>
      <Route  path='/cartdetails' component={CartDetails}/>
      <Route  path="/history" component={History}/>
      </Switch>
    
    </React.Fragment>
  );
}

export default App;
