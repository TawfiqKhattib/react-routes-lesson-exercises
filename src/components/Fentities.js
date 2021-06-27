import React, { Component } from "react";
import "../styles/fentity-directory.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Fentity from "./Fentity";
class Fentities extends Component {
  render() {
    const fentitiesCategory = this.props.match.params.fentities;
    const fentities = this.props.state[fentitiesCategory];
    return (
      <div>
        <h1 id="fentities-title">{fentitiesCategory}</h1>
        <div id="fentities-container">
          {fentities.map((f) => {
            return (
              <Link
                to={`/directory/${fentitiesCategory}/${f.name.toLowerCase()}`}
              >
                <div className="mini">
                  <img className="directory-img" src={f.imgUrl} alt="" />
                  <span>{f.name}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Fentities;