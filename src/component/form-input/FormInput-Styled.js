import styled, { css } from "styled-components";

const shrinkLabel = css`
  top: -14px;
  font-size: 12px;
  color: black;
`;
const formInputLabel = css`
  color: gray;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
`;
const getLabelStyled = (otherProps) => {
  return otherProps.value.length ? shrinkLabel : null;
};
export const Group = styled.div`
  position: relative;
  margin: 45px 0;
`;
export const Label = styled.label`
  ${formInputLabel}
  ${getLabelStyled}
`;
export const FormInputContainer = styled.input`
  background: none;
  background-color: white;
  color: $sub-color;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid gray;
  margin: 25px 0;

  &:focus {
    outline: none;
  }
  &:focus ~  ${Label}{
    top: -14px;
    font-size: 12px;
    color: black;
  }
`;

