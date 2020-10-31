import React, { Component } from "react";
// eslint-disable-next-line
import { Route, Link } from "react-router-dom";

const axios = require("axios");

class UpdateSpell extends Component {
  constructor() {
    super();
    this.state = {
        id: 0,
        name: '',
        element: '',
        manaCost: 0,
        spellLoaded: false
      }
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
    console.log("updating!");

    //axios
    axios
      .post(
        "http://localhost:5000/spells/update/" + this.props.match.params.id, {name: this.state.name, element: this.state.element, manaCost: this.state.manaCost}
      )
      .then((res) => console.log(res));

    window.location = "/";
  };

  componentDidMount() {
    console.log(this.props.match.params.id);
    this.setState({ id: this.props.match.params.id });

    axios
      .get("http://localhost:5000/spells/" + this.props.match.params.id)
      .then((res) => this.setState({ name: res.data.name, element: res.data.element, manaCost: res.data.manaCost, spellLoaded: true }));
  }

  render() {
    let spellElement = (
      <React.Fragment>
        <h3>Update Spell</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Spell Name: </label>
            <input
              required
              onChange={this.onChangeSpellName}
              type="name"
              placeholder={this.state.name}
            ></input>
          </div>
          <div className="form-group">
            <label>Element: </label>
            <select
              required
              onChange={this.onChangeSpellElement}
              type="select"
              placeholder={this.state.element}
            >
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
            <input
              required
              onChange={this.onChangeSpellManaCost}
              type="number"
              step="10"
              min="10"
              max="100"
              placeholder={this.state.manaCost}
            ></input>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </React.Fragment>
    );

    if (this.state.spellLoaded) {
      return (
        <div className="UpdateSpell">
          <p>{spellElement}</p>
        </div>
      );
    } else return <p>Loading...</p>;
  }
}

export default UpdateSpell;
