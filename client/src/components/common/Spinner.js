import NumericInput from "react-numeric-input";
import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const SpinnerEdited = ({
  name,
  value,
  error,
  info,
  type,
  onChange,
  disabled
}) => {
  return (
    <div className="form-group">
      {info && <small className="form-text text-muted">{info}</small>}

      <NumericInput min={0} max={100} value={50} />

      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default SpinnerEdited;
