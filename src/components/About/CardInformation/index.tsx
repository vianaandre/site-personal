import React from 'react';

import StyledCardInformation from './styled';

type CardInformationProps = {
  icon: string;
  alt: string;
  text: string;
}

const CardInformation: React.FC<CardInformationProps> = ({ icon, alt, text }) => {
  return (
    <div>
      <StyledCardInformation>
        <img src={icon} alt={alt} />
        <p>{text}</p>
      </StyledCardInformation>
    </div>
  );
};

export default CardInformation;


