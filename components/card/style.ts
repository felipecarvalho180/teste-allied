import styled from 'styled-components';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../constants/colors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: #fff;
  margin: 1.5rem 1.5rem;
  border-radius: 2rem;
  flex: 1;
  -webkit-box-shadow: 5px 5px 15px 5px #727272;
  box-shadow: 5px 5px 15px 5px #727272;
  text-align: center;

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
    color: ${PRIMARY_COLOR};
  }

  h2 {
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
    color: ${PRIMARY_COLOR};
    margin-bottom: 1.5rem;
  }

  p {
    margin-bottom: 1.8rem;
    color: ${PRIMARY_COLOR};
  }

  a {
    display: inline-block;
    border: none;
    border-radius: 1rem;
    padding: 1rem 2rem;
    margin: 0;
    text-decoration: none;
    background: ${SECONDARY_COLOR};
    color: #ffffff;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.8rem;
    cursor: pointer;
    text-align: center;
    text-transform: uppercase;
    transition: background 250ms ease-in-out, transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;

    :hover {
      background-color: #414180;
    }
  }
`;
