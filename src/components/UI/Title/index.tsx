import React from 'react';

import StyledTitle from './styled';

type TitleProps = {
  sectionTitle: string,
  description?: string,
  effect: boolean,
}

const Title: React.FC<TitleProps> = ({ sectionTitle, description, effect }) => {
  return (
    <div>
      <StyledTitle>
        { effect ? <div></div> : '' }
        <h2>{sectionTitle}</h2>
        <p>{description}</p>
      </StyledTitle>
    </div>
  );
};

export default Title;
