import React, { Component } from "react";
// eslint-disable-next-line
import { Route, Link } from "react-router-dom";

const axios = require('axios');

export default class SpellCard extends Component {

  deleteClick = () => {
     axios.delete('http://localhost:5000/spells/delete/' + this.props.id.toString())
      .then(res => console.log(res.data));

    window.location = '/'
  }

  render() {
    return (
      <div className="card">
        <p>{this.props.name}</p>
        <p>{this.props.element}</p>
        <p>{this.props.manaCost}</p>
        <Link className="btn-primary text-center" to={'/update/' + this.props.id}>Update Spell</Link>
        <button onClick={this.deleteClick} className="btn-primary">Delete</button>
      </div>
    );
  }
}
