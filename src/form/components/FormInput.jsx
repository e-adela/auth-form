import React from "react";
import PropTypes from "prop-types";
import { useField } from "formik";

import {
  FormControl,
  FormError,
  StyledInput,
  StyledInputContainer,
} from "../styles/FormInput-styles";

const FormInput = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <FormControl className={meta.touched && meta.error}>
      <StyledInputContainer>
        <StyledInput {...field} {...props} />
      </StyledInputContainer>
      {meta.touched && meta.error ? <FormError>{meta.error}</FormError> : null}
    </FormControl>
  );
};

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.oneOf(["text", "email", "password", "number"]),
  required: PropTypes.bool,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
};

export default FormInput;
