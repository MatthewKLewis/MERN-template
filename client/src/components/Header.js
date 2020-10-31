import React, { Component } from "react";
// eslint-disable-next-line
import { Route, Link } from "react-router-dom";

class Header extends Component {
    constructor() {
      super();
      this.state = {};
    }
  
    render() {
      return (
      <div className=''>
        <div className="navbar navbar-dark bg-dark navbar-expand-lg">
            <h1 className="navbar-brand">G R I M O I R E</h1>
            <Link className="nav-link" to='/' > Spells </Link>
            <Link className="nav-link"to='/createSpell' > Create Spell </Link>
            <Link className="nav-link"to='/createWizard' > Create Wizard </Link>
        </div>
      </div>
      )
    }
  }

export default Header