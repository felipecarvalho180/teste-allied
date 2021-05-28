import React from 'react';
import { Wrapper } from './style';

interface LayoutProps {
  bgImage?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, bgImage }) => {
  return <Wrapper bgImage={bgImage}>{children}</Wrapper>;
};

export default Layout;
