import styled, { css } from 'styled-components';

interface WrapperProps {
  bgImage: string;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-image: url('/background.svg');
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: bottom;
  background-size: 50rem;

  ${({ bgImage }) =>
    bgImage &&
    css`
      background-image: ${bgImage};
    `}
`;
