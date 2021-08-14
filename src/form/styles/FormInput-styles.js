import styled from "styled-components";

import theme from "./Theme";

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledInputContainer = styled.div`
  width: 100%;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  -webkit-box-sizing: border-box; // Safari/Chrome, other WebKit
  -moz-box-sizing: border-box; // Firefox, other Gecko
  box-sizing: border-box; // Opera/IE 8+
  margin: 8px 0;
  background-color: ${theme.color.grey};
  border: 1px solid ${theme.color.grey};
  border-radius: 4px;
  outline: none;
  font-size: "1rem";
  transition: ${theme.transition.base({ el: "border" })};
  &:invalid {
    border-color: red;
    background: #ffd1d1;
  }
  &:focus {
    border: 2px solid ${theme.color.primary};
    transition: ${theme.transition.base({ el: "border" })};
  }
`;

export const FormError = styled.div`
  color: red;
  font-size: 0.775rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 550;
`;
