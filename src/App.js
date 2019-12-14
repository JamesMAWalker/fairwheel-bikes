import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

const WheelsPage = () => (
  <div className="">
    <h1>Wheels Page</h1>
    <p>whatuuuup</p>
  </div>
)

function App() {
  return (
    <Switch >
      <Route  exact path="/" component={ HomePage }/>
      <Route  exact path="/wheels" component={ WheelsPage }/>
    </Switch>
  );
}

export default App;
