import React from  'react';
import StyledWithout from './styled';

const Without: React.FC<{ currentText: string }> = ({ currentText }) => {
  return (
    <StyledWithout>
      <h2>Sem {currentText}</h2>
    </StyledWithout>
  )
}

export default Without;
