import React from 'react';

import StyledCardSkills from './styled';

import { ImageProps } from '../../../types/types';

type TextProps = {
  name: string,
  caseDescription: string,
}

type CardSkillsProps = TextProps & ImageProps;

const CardSkills: React.FC<CardSkillsProps> = ({ url, alternativeText, name, caseDescription }) => {
  return (
    <StyledCardSkills>
      <img src={url} alt={alternativeText} />
      <h2>{name}</h2>
      <div className="explicationCase" dangerouslySetInnerHTML={{__html: caseDescription}}></div>
    </StyledCardSkills>
  )
}

export default CardSkills;
