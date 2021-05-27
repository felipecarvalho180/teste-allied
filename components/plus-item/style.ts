import styled from 'styled-components';
import { SECONDARY_COLOR } from '../../constants/colors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;

  svg {
    margin: 0 1.5rem;
    color: ${SECONDARY_COLOR};
  }
`;
