import React from 'react';

import StyledCardProject from './styled';
import { CardProps } from '../../../types/types';
import Button from '../../UI/Button';
import theme from '../../../styles/theme';

const CardProject: React.FC<CardProps> = ({ imageProject, titleProject, buttonActions, cases }) => {
  return (
    <StyledCardProject >
      <img src={imageProject.image.url} alt={imageProject.image.url} />
      <div className="information">
        <h2>{titleProject.sectionTitle}</h2>
        <div className="buttons">
          {buttonActions.map(( { href, target, title, id } ) => (
            <Button  key={id} href={href} target={target} title={title} color={theme.colors.primary} width={theme.spacing(14)} />
          ) )}
        </div>
        <div className="casesImages">
          {cases.map(( { image } ) => (
            <img  key={image.alternativeText} src={image.url} alt={ image.alternativeText} />
          ))}
        </div>
      </div>
    </StyledCardProject >
  )
}

export default CardProject;
