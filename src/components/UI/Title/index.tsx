import React from 'react';

import StyledTitle from './styled';
import { TitleProps } from '../../../types/types'

const Title: React.FC<TitleProps> = ({ sectionTitle, description }) => {
  return (
    <div>
      <StyledTitle>
        <div></div>
        <h1>{sectionTitle}</h1>
        <p>{description}</p>
      </StyledTitle>
    </div>
  );
};

export default Title;
