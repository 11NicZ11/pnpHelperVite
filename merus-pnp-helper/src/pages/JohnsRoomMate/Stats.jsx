import React from "react";
import PropTypes from "prop-types";
import "./charSheet.css";

function Stats(props) {
  return (
    <div>
      <div className="statbox">
        <h3>STR</h3>
        <p>
          Score: {props.strS} Mod: {props.strM} Save: {props.strSave}
        </p>
      </div>
      <div className="statbox">
        <h3>DEX</h3>
        <p>
          Score: {props.dexS} Mod: {props.dexM} Save: {props.dexSave}
        </p>
      </div>
      <div className="statbox">
        <h3>CON</h3>
        <p>
          Score: {props.conS} Mod: {props.conM} Save: {props.conSave}
        </p>
      </div>
      <div className="statbox">
        <h3>INT</h3>
        <p>
          Score: {props.intS} Mod: {props.intM} Save: {props.intSave}
        </p>
      </div>
      <div className="statbox">
        <h3>WIS</h3>
        <p>
          Score: {props.wisS} Mod: {props.wisM} Save: {props.wisSave}
        </p>
      </div>
      <div className="statbox">
        <h3>CHA</h3>
        <p>
          Score: {props.charS} Mod: {props.charM} Save: {props.charSave}
        </p>
      </div>
    </div>
  );
}

Stats.PropTypes = {
  strS: PropTypes.number,
  dexS: PropTypes.number,
  conS: PropTypes.number,
  intS: PropTypes.number,
  wisS: PropTypes.number,
  charS: PropTypes.number,
  strM: PropTypes.number,
  dexM: PropTypes.number,
  conM: PropTypes.number,
  intM: PropTypes.number,
  wisM: PropTypes.number,
  charM: PropTypes.number,
  strSave: PropTypes.number,
  dexSave: PropTypes.number,
  conSave: PropTypes.number,
  intSave: PropTypes.number,
  wisSave: PropTypes.number,
  charSave: PropTypes.number,
};

export default Stats;
