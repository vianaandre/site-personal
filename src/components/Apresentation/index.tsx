import React from 'react';

import StyledApresentation from './styled';
import  Desciption from './Description'

export const Apresentation: React.FC = () => {

  const descriptionData = {
    name: 'André Gustavo Viana',
    profession: 'Desenvolvedor Frontend',
  }

  return (
        <StyledApresentation>
          <div className="block"></div>
          <Desciption  {...descriptionData} />
          <div className="block"></div>
        </StyledApresentation>
  );
};

export default Apresentation;
