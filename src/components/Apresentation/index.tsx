import React, { useContext } from 'react';

import StyledApresentation from './styled';
import  Desciption from './Description'
import ContextPortfolio from '../../context/ContextPortfolio';

export const Apresentation: React.FC = () => {

  const { data } = useContext(ContextPortfolio)

  const descriptionData = {
    name: data.sections[1].name,
    profession: data.sections[1].profession,
    text: data.sections[1].text,
    href: data.sections[1].actionButton.href,
    target: data.sections[1].actionButton.target,
    title: data.sections[1].actionButton.title,
  }

  return (
        <StyledApresentation>
          <Desciption  {...descriptionData} />
          <img src={data.sections[1].Illustration.url} className="img"  alt={data.sections[1].Illustration.alternativeText} />
        </StyledApresentation>
  );
};

export default Apresentation;
