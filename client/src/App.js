import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// eslint-disable-next-line
import { Route, Link } from "react-router-dom";
import "./App.css";

//Import Components
import Header from './components/Header';
import SpellsList from './components/SpellsList';
import CreateSpell from './components/CreateSpell';
import UpdateSpell from './components/UpdateSpell';
import CreateWizard from './components/CreateWizard';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
    <>
    <Header />
    <div className="container">
        <Route exact path='/' component={SpellsList}/>
        <Route path='/createSpell' component={CreateSpell}/>
        <Route path='/update/:id' component={UpdateSpell}/>
        <Route path='/createWizard' component={CreateWizard}/>
    </div>
    </>
    )
  }
}

export default App;
