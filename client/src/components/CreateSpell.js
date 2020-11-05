import React, { Component } from "react";
// eslint-disable-next-line
import { Route, Link } from "react-router-dom";
import axios from "axios";

class CreateSpell extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      element: "",
      manaCost: 0,
    };
  }

  onChangeSpellName = (e) => {
    this.setState({ name: e.target.value });
  };

  onChangeSpellElement = (e) => {
    this.setState({ element: e.target.value });
  };

  onChangeSpellManaCost = (e) => {
    this.setState({ manaCost: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    var tempSpell = {
      name: this.state.name,
      element: this.state.element,
      manaCost: this.state.manaCost,
    };

    console.log(tempSpell); //eventually we submit from here.
    axios.post('/spells/add', tempSpell)
      .then(res => console.log(res.data));

    window.location = "/";
  };

  render() {
    return (
      <>
        <h3>Create Spell</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Spell Name: </label>
            <input required onChange={this.onChangeSpellName} type="name" placeholder="Magic Missile"></input>
          </div>
          <div className="form-group">
            <label>Element: </label>
            <select required onChange={this.onChangeSpellElement} type="select">
              <option></option>
              <option>Fire</option>
              <option>Ice</option>
              <option>Lightning</option>
              <option>Confusion</option>
              <option>Transformation</option>
              <option>Disease</option>
            </select>
          </div>
          <div className="form-group">
            <label>Mana Cost: </label>
            <input required onChange={this.onChangeSpellManaCost} type="number" step="10" min="10" max="100" placeholder=""></input>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default CreateSpell;
