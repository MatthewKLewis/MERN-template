import React, { Component } from "react";
// eslint-disable-next-line
import { Route, Link } from "react-router-dom";
import axios from "axios";

//Import Components
import SpellCard from "./SpellCard";

class SpellsList extends Component {
  constructor() {
    super();
    this.state = {
      spellList: [],
      listLoaded: false,
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/spells")
      .then((res) => this.setState({ spellList: res.data, listLoaded: true }));
  }

  render() {
    if (this.state.listLoaded) {
      let componentList = this.state.spellList.map((item) => {
        return (
          <SpellCard
            key={item._id}
            id = {item._id}
            name={item.name}
            element={item.element}
            manaCost={item.manaCost}
          />
        );
      });

      return (
        <div className="SpellsList">
          <div className="container">{componentList}</div>
        </div>
      );
    } else {
      return <p>Loading...</p>;
    }
  }
}

export default SpellsList;
