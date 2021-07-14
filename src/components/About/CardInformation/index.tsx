import React from 'react';

import StyledCardInformation from './styled';
import { ImageProps } from '../../../types/types';

type InformationPersonalProps = { informationPersonal: string }

type CardInformationProps = ImageProps & InformationPersonalProps;

const CardInformation: React.FC<CardInformationProps> = ({ url, alternativeText, informationPersonal }) => {
  return (
    <div>
      <StyledCardInformation>
        <img src={url} alt={alternativeText} />
        <p>{informationPersonal}</p>
      </StyledCardInformation>
    </div>
  );
};

export default CardInformation;


