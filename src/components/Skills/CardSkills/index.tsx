import React from 'react';

import StyledCardSkills from './styled';

import { CardSkillsProps } from '../../../types/types';

const CardSkills: React.FC<CardSkillsProps> = ({ icon, text, title }) => {
  return (
    <StyledCardSkills>
      <img src={icon.url} alt={icon.alt} />
      <h2>{title}</h2>
      <div className="explicationCase" >
        <p>
          {text}
        </p>
      </div>
    </StyledCardSkills>
  )
}

export default CardSkills;
