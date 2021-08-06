import React from 'react';

import StyledCardProject from './styled';
import { CardProps } from '../../../types/types';
import Button from '../../UI/Button';
import theme from '../../../styles/theme';

const CardProject: React.FC<CardProps> = ({ url, alt, description, button, icon }) => {
  return (
    <StyledCardProject >
      <img src={url} alt={alt} />
      <div className="information">
        <h2>{description}</h2>
        <div className="buttons">
          {button.map(({ href, title }, index) => (
            <Button key={index} target={'_blank'} font={theme.spacing(1.75 )} height={theme.spacing(3.75)} href={href} title={title} color={theme.colors.primary} width={theme.spacing(14)} />
          ) )}
        </div>
        <div className="casesImages">
          {icon.map(( { alt, url }, index ) => (
            <img  key={index} src={url} alt={alt} />
          ))}
        </div>
      </div>
    </StyledCardProject >
  )
}

export default CardProject;
