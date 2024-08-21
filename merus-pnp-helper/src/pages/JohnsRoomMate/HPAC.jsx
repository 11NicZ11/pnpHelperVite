import PropTypes from "prop-types";
import "./charSheet.css";
function HPAC(props) {
  return (
    <div className="hp-ac-pr">
      <p>
        HP: {props.HP} AC: {props.AC} PR: {props.PR}{" "}
      </p>
    </div>
  );
}
HPAC.PropTypes = {
  HP: PropTypes.number,
  AC: PropTypes.number,
};
export default HPAC;
