import styled, { css } from 'styled-components';

const invertedButtonStyles = css`
  background-color: white;
  border: 1px solid black;
  color: black;

  &:hover {
    background-color: black;
    border: none;
    color: white;
  }
`;

const buttonStyles = css`
  background-color: black;
  border: none;
  color: white;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
  }
`;

const googleSigninStyles = css`
  background-color: #4285f4;
  color: #fff;

  &:hover {
    background-color: #2a60b6;
    border: none;
    color: white;
  }
`;

const getButtonStyles = props => {
    if (props.isGoogleSignIn) {
      return googleSigninStyles;
    }

    return props.inverted ? invertedButtonStyles : buttonStyles;
}

export const CustomButtonContainer = styled.button`
    min-width: 15rem;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 1vmax;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: inherit;
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;

    transition: all 0.2s;

    &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    }

    ${getButtonStyles}
`;