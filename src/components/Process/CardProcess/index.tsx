import React from 'react';

import StyledCardProcess from './styled';

type CardProcess = {
  number: number;
  href: string;
  alt: string;
  text: string;
}

const CardProcess: React.FC<CardProcess> = ({ number, href, alt, text }) => {
  return (
    <StyledCardProcess>
      <div className='title'>
        <h2>{number + 1}ª</h2>
      </div>
      <div className="content">
        <img src={href} alt={alt} />
        <div>
          <p>
            {text}
          </p>
        </div>
      </div>
    </StyledCardProcess>
  )
}

export default CardProcess;
