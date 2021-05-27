import React from 'react';
import Image from 'next/image';
import { Text, Wrapper } from './style';

interface SkuProps {
  text: string;
}

const Sku: React.FC<SkuProps> = ({ text }) => {
  return (
    <Wrapper>
      <Image src="/sku.jpg" width={200} height={200} />
      <Text>{text}</Text>
    </Wrapper>
  );
};

export default Sku;
