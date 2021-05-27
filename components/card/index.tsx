import React from 'react';
import { Wrapper } from './styled';

const Card: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Card;
