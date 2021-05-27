import styled from 'styled-components';
import { PRIMARY_COLOR } from '../constants/colors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const Header = styled.div`
  width: 80%;
  margin: 20px;
  align-self: center;
  text-align: center;

  h1 {
    text-transform: uppercase;
    font-weight: bold;
    color: ${PRIMARY_COLOR};
  }
`;

export const ContentWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-self: center;
`;
