import styled, { css } from "styled-components";

const ButtonStyled = css`
  background-color: black;
  color: white;
  border: none;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const InvertedButtonStyed = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;
const GoogleSignStyled = css`
  background: #4285f4;
  color: #fff;

  &:hover {
    background: #357ae8;
    border: none;
  }
`;
const getButtonStyled = (props) => {
  if (props.isGoogleSignIn) {
    return GoogleSignStyled;
  }
  return props.inverted ? InvertedButtonStyed : ButtonStyled;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  margin: 0 5px;
  font-size: 12px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyled}
`;
