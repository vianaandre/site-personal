import React from 'react';

import StyledCardProcess from './styled';
import { CardProcessProps } from '../../../types/types';
import datoStructureTextHTML from '../../../utils/dato-structured-text-html';

const CardProcess: React.FC<CardProcessProps> = ({ number, href, alt, value }) => {

  const textTransform = datoStructureTextHTML(value)

  return (
    <StyledCardProcess>
      <div className='title'>
        <h2>{number + 1}ª</h2>
      </div>
      <div className="content">
        <img src={href} alt={alt} />
        <div dangerouslySetInnerHTML={{ __html: textTransform }}>
        </div>
      </div>
    </StyledCardProcess>
  )
}

export default CardProcess;
