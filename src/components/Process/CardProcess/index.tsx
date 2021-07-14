import React from 'react';

import StyledCardProcess from './styled';

type CardProcess = {
  href: string;
  alt: string;
  text: string;
}

const CardProcess: React.FC<CardProcess> = ({ href, alt, text }) => {
  return (
    <StyledCardProcess>
      <img src={href} alt={alt} />
      <div dangerouslySetInnerHTML={{__html: text}}></div>
    </StyledCardProcess>
  )
}

export default CardProcess;
