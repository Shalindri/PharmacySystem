import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const FormatedTextField = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled
}) => {
  return (
    <div className="form-group">
      {info && <small className="form-text text-muted">{info}</small>}
      <input
        type={type}
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />

      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

FormatedTextField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string
};

FormatedTextField.defaultProps = {
  type: "text"
};

export default FormatedTextField;
