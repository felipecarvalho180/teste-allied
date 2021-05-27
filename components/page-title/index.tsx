import React from 'react';
import { Title } from './style';

interface PageTitleProps {
  text: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ text }) => {
  return <Title>{text}</Title>;
};

export default PageTitle;
