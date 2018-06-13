import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const FormatedList = ({ name, value, info, onChange, options }) => {
  const selectOptions = options.map(option => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));
  return (
    <div className="form-group">
      {info && <small className="form-text text-muted">{info}</small>}
      <select
        className={classnames("form-control form-control-lg")}
        name={name}
        value={value}
        onChange={onChange}
      >
        {selectOptions}
      </select>
    </div>
  );
};

FormatedList.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
};

export default FormatedList;
