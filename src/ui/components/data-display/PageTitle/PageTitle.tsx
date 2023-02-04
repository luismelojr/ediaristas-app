import React from 'react';
import {
  PageSubtitleStyled,
  PageTitleContainer,
  PageTitleStyled,
} from './PageTitle.styles';

export interface PageTitleProps {
  title: string;
  subtitle?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle }) => {
  return (
    <PageTitleContainer>
      <PageTitleStyled>{title}</PageTitleStyled>
      {subtitle && <PageSubtitleStyled>{subtitle}</PageSubtitleStyled>}
    </PageTitleContainer>
  );
};

export default PageTitle;
