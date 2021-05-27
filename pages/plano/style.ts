import styled from 'styled-components';
import { SECONDARY_COLOR } from '../../constants/colors';

export const ScrollWrapper = styled.div`
  width: 80%;
  overflow: auto;
  margin: 0 auto;

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
`;

export const ContentWrapper = styled.div`
  flex-direction: row;
  align-self: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0.5rem 0.5rem;
  margin-bottom: 2rem;
`;

export const CardContentWrapper = styled.div`
  flex: 1;
`;

export const AdditionalItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
