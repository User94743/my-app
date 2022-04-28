import React from "react";
import './App.css';
import {Redirect, Route, Switch} from "react-router-dom";
import WelcomeContainer from "./components/welcome/welcomeContainer";
import ParamsContainer from './components/tableParamaters/parametersContainer';
import MachineContainer from "./components/machine/machineContainer";

const App = (props) => {
  return (
      <Switch>
          <Route exact path='/' render={() => <Redirect to={'/welcome'} />}/>
          <Route path='/machine/:number' component={MachineContainer}  />
          <Route path='/welcome' component={WelcomeContainer} />
          <Route path='/parameters' component={ParamsContainer} />
      </Switch>
  );

}

export default App;
