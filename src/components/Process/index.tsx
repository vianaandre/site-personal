import React, { useContext } from "react";

import StyledProcess from './styled';
import Title from '../UI/Title';
import ContextPortfolio from "../../context/ContextPortfolio";
import CardProcess from "./CardProcess";

const Process: React.FC = () => {

  const { data } = useContext(ContextPortfolio)

  return (
    <StyledProcess>
      <Title  sectionTitle={data.sections[3].sectionTitle.sectionTitle} description={data.sections[3].sectionTitle.description} effect={false} />
      <div className="cardsProcess">
        { data.sections[3].CardProcess.map(({ id, text, image }) => (
          <div key={id} className="card">
            <CardProcess href={image.url} alt={image.alternativeText} text={text} />
          </div>
         )) }
      </div>
    </StyledProcess>
  )
}

export default Process;
