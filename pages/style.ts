import styled from 'styled-components';
import { SECONDARY_COLOR } from '../constants/colors';

export const ContentWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-self: center;

  ::-webkit-scrollbar {
    height: 0.8rem;
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

  @media (max-width: 640px) {
    width: 100%;
    flex-direction: column;
    overflow: auto;
  }

  @media (min-width: 641px) and (max-width: 1020px) {
    overflow-x: auto;
    width: 90%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.5rem 0.5rem;
  }
`;

export const CardContentWrapper =styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
