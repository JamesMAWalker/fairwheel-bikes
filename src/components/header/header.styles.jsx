import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const OptionContainerStyles = css`
  justify-self: flex-end;
  margin: 0 1rem;
  cursor: pointer;
  font-size: 
`;

export const HeaderContainer = styled.nav`
  padding: 2rem 8rem;
  display: flex;
  align-items: center;
`;

export const LogoContainer = styled(Link)`
  margin-right: auto;
`;

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OptionLink = styled(Link)`
    ${OptionContainerStyles};
`;

export const OptionDiv = styled.div`
    ${OptionContainerStyles};
`;


 
