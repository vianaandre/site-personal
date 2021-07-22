import React from 'react';

import StyledApresentation from './styled';
import  Desciption from './Description'

export const Apresentation: React.FC = () => {

  const descriptionData = {
    name: 'André Gustavo Viana',
    profession: 'Desenvolvedor Frontend',
    text: '“Um site é a melhor forma de estabelecer um bom relacionamento com o consumidor, pois lá é contido tudo o DNA da sua empresa”',
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
