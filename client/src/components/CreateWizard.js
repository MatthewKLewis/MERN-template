import React, { Component } from "react";
// eslint-disable-next-line
import { Route, Link } from "react-router-dom";
import axios from "axios";

class CreateWizard extends Component {
  constructor() {
    super();
    this.state = {
      name: "default",
      color: "default",
      wand: "default"
    };
  }

  onChangeWizardName = (e) => {
    this.setState({ name: e.target.value });
  };

  onChangeColorName = (e) => {
    this.setState({ color: e.target.value });
  };

  onChangeWandType = (e) => {
    this.setState({ wand: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    var tempWizard = {
      name: this.state.name,
      color: this.state.color,
      wand: this.state.wand,
    };

    console.log(tempWizard);
    axios.post('http://localhost:5000/wizards/add', tempWizard)
      .then(res => console.log(res.data));

    //window.location = '/';
  };

  render() {
    return (
      <div className=''>
        <h3>Create Wizard</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Wizard's Name: </label>
            <input required onChange={this.onChangeWizardName} type="name" placeholder="Merlin"></input>
          </div>
          <div className="form-group">
            <label>Color: </label>
            <select required onChange={this.onChangeColorName} type="select">
              <option></option>
              <option>Red</option>
              <option>Green</option>
              <option>Blue</option>
              <option>Orange</option>
              <option>Purple</option>
              <option>Yellow</option>
              <option>Black</option>
              <option>Grey</option>
              <option>White</option>
              <option>Chartreuse</option>
            </select>
          </div>
          <div className="form-group">
            <label>Wand Type: </label>
            <select required onChange={this.onChangeWandType} type="select">
              <option></option>
              <option>Oak</option>
              <option>Ebony</option>
              <option>Sandstone</option>
              <option>Brass</option>
              <option>Willow</option>
              <option>Ash</option>
              <option>Tanis Root</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default CreateWizard;
