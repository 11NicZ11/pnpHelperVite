import React from "react";
import PropTypes from "prop-types";
import "./charSheet.css";

function Stats(props) {
  return (
    <div className="statuswerte">
      <div className="statbox">
        <h3>STR</h3>
        <p>Score: {props.strS}</p>
        <p>Mod: {props.strM}</p>
      </div>
      <div className="statbox">
        <h3>DEX</h3>
        <p>Score: {props.dexS}</p>
        <p>Mod: {props.dexM}</p>
      </div>
      <div className="statbox">
        <h3>CON</h3>
        <p>Score: {props.conS}</p>
        <p>Mod: {props.conM}</p>
      </div>
      <div className="statbox">
        <h3>INT</h3>
        <p>Score: {props.intS}</p>
        <p>Mod: {props.intM}</p>
      </div>
      <div className="statbox">
        <h3>WIS</h3>
        <p>Score: {props.wisS}</p>
        <p>Mod: {props.wisM}</p>
      </div>
      <div className="statbox">
        <h3>CHA</h3>
        <p>Score: {props.charS}</p>
        <p>Mod: {props.charM}</p>
      </div>
    </div>
  );
}

Stats.PropTypes = {
  Score: PropTypes.number,
  Mod: PropTypes.number,
};

export default Stats;
