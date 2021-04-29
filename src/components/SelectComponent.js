import React, { Component } from "react";
import { Card } from "react-bootstrap";
import PersonListComponent from "./PersonListComponent";
import "./SelectComponent.css";

class SelectComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="center">
          <h1>Choose your favorite!</h1>
          <PersonListComponent></PersonListComponent>
        </div>
      </div>
    );
  }
}
export default SelectComponent;
