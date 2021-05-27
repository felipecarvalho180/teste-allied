import React from 'react';
import { Wrapper } from './style';
import { FaPlusCircle } from 'react-icons/fa';

const PlusItem: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <FaPlusCircle />
      {children}
    </Wrapper>
  );
};

export default PlusItem;
