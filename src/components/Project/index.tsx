import React, { useContext } from 'react';

import ContextPortfolio from '../../context/ContextPortfolio';
import StyledProject from './styled';
import Title from '../UI/Title';
import CardProject from './CardProject';

const Project: React.FC = () => {

  const { data } = useContext(ContextPortfolio)

  const cardData = data.sections[2].CardProject

  return (
    <StyledProject>
      <Title sectionTitle={data.sections[2].Title.sectionTitle} description={data.sections[2].Title.description} effect={true} />
      <div className={'cardProject'}>
        {cardData.map(({ imageProject, titleProject, buttonActions, cases, id }) => (
          <div key={id} className={'card'}>
            <CardProject  imageProject={imageProject} titleProject={titleProject} buttonActions={buttonActions} cases={cases}/>
          </div>
        ))}
      </div>
    </StyledProject>
  )
}

export default Project;
