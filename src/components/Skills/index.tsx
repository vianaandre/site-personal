import React, { useContext } from "react";
import ContextPortfolio from "../../context/ContextPortfolio";

import Title from '../UI/Title';
import StyledSkills from './styled';
import CardSkills from './CardSkills';

const Skills: React.FC = () => {

  const { data } = useContext(ContextPortfolio)

  const { sectionTitle, cardSkills } = data.sections[5]

  return (
    <StyledSkills>
      <Title  sectionTitle={sectionTitle.sectionTitle} description={sectionTitle.description} effect={true} />
      <div className="cardsSkills">
        {cardSkills.map(({ _id, imageCase, nameCase, caseDescription }) => (
          <CardSkills  key={_id} url={imageCase.url} alternativeText={imageCase.alternativeText}  name={nameCase}  caseDescription={caseDescription} />
         ))}
      </div>
    </StyledSkills>
  )
}

export default Skills;
