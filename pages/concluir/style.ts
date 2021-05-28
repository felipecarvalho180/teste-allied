import styled from 'styled-components';
import { SECONDARY_COLOR } from '../../constants/colors';

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 20px;
  padding: 20px;
  width: 50%;
  overflow-y: auto;
  align-self: center;
  -webkit-box-shadow: 5px 5px 15px 5px #727272;
  box-shadow: 5px 5px 15px 5px #727272;

  ::-webkit-scrollbar {
    width: 1rem;
  }
  ::-webkit-scrollbar-thumb {
    background: ${SECONDARY_COLOR};
    border-left: 0.3rem solid #f7f8fa;
    border-right: 0.3rem solid #f7f8fa;
    border-radius: 0.5rem;
  }
  -webkit-scrollbar-track {
    background: #f7f8fa;
  }

  button {
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
