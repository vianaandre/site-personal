import React, { useContext } from "react";

import StyledProcess from './styled';
import Title from '../UI/Title';
import ContextPortfolio from "../../context/ContextPortfolio";

const Process: React.FC = () => {

  const { data } = useContext(ContextPortfolio)

  return (
    <StyledProcess>
      <Title  sectionTitle={data.sections[3].sectionTitle.sectionTitle} description={data.sections[3].sectionTitle.description} />
      <div className="cardsProcess">
        <div className="cardOne">
          <h2>{data.sections[3].titleCards[0].sectionTitle}</h2>
        </div>
        <div className="cardTwee">
        <h2>{data.sections[3].titleCards[1].sectionTitle}</h2>
        </div>
      </div>
    </StyledProcess>
  )
}

export default Process;
