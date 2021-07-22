import React, { useContext } from 'react';

import ContextPortfolio from '../../context/ContextPortfolio';
import StyledProject from './styled';
import Title from '../UI/Title';
import CardProject from './CardProject';

const Project: React.FC = () => {

  const { data } = useContext(ContextPortfolio)

  const allCardprojectsContent = data.allCardprojects


  return (
    <StyledProject id={'project'}>
      <Title sectionTitle='Projetos' description={'meus projetos criados com o foco de trazer um pouco das minhas experiências'} effect={true} />
      <div className={'cardProject'}>
        {allCardprojectsContent.allCardprojects.map(({ image, description, button, icon }, index) => (
          <div key={index} className={'card'}>
            <CardProject url={image.url} alt={image.atl}  description={description} button={button} icon={ icon }/>
          </div>
        ))}
      </div>
    </StyledProject>
  )
}

export default Project;
