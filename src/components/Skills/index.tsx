import React, { useContext } from "react";
import ContextPortfolio from "../../context/ContextPortfolio";

import Title from '../UI/Title';
import StyledSkills from './styled';
import CardSkills from './CardSkills';

const Skills: React.FC = () => {

  const { data } = useContext(ContextPortfolio)

  const allCardskillsContent = data.allCardskills

  return (
    <StyledSkills id={'skills'}>
      <Title  sectionTitle={'Habilidades'} description={'ferramentes que já tenho alguma experiência'} effect={true} />
      <div className="cardsSkills">
        {allCardskillsContent.allCardskills.map(({ icon, title, text }, index) => (
          <CardSkills  key={index} icon={icon} title={title} text={text} />
         ))}
      </div>
    </StyledSkills>
  )
}

export default Skills;
