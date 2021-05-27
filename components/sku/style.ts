import styled from 'styled-components';
import { PRIMARY_COLOR } from '../../constants/colors';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 5px;
  text-align: center;
  color: ${PRIMARY_COLOR};
  position: absolute;
`;
