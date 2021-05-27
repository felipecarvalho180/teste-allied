import styled from 'styled-components';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../constants/colors';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.div`
  background-color: #fff;
  font-weight: bold;
  border: 1px solid ${SECONDARY_COLOR};
  border-radius: 0.6rem;
  padding: 0.3rem;
  text-align: center;
  color: ${PRIMARY_COLOR};
  position: absolute;
`;
