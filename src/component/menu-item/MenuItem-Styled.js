import styled, { css } from "styled-components";
const Large = css`
  height: 380px;
`;
const Normal = css`
  height: 240px;
`;
const getSizeStyled = props => {
  return props.size==='large' ? Large : Normal
};
export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #000;
  height: 90px;
  padding: 0 25px;
  background: rgba(255, 255, 255, 0.8);
  position: absolute;
`;

export const MenuItemContainer = styled.div`
  min-width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 auto;
  border: 1px solid #000;
  margin: 0 7.5px 15px;
  &:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }
  &:hover {
    cursor: pointer;
    ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    ${Content} {
      opacity: 0.9;
    }
  }
  ${getSizeStyled}
`;

export const Title = styled.div`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;
export const Subscribe = styled.div`
  font-weight: lighter;
  font-size: 16px;
`;
