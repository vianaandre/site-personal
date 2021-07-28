import React, { useContext } from "react";

import StyledProcess from './styled';
import Title from '../UI/Title';
import ContextPortfolio from "../../context/ContextPortfolio";
import CardProcess from "./CardProcess";

const Process: React.FC = () => {

  const { data } = useContext(ContextPortfolio)

  const allCardprocessesContent = data.allCardprocesses

  return (
    <StyledProcess id={'process'}>
      <Title  sectionTitle={'Processo de criação'} description={''} effect={false} />
      <div className="cardsProcess">
        { allCardprocessesContent.allCardprocesses.map(({ text, image }, index) => (
          <div key={index} className="card">
            <CardProcess number={index} href={image.url} alt={image.alt} value={text.value} />
          </div>
         )) }
      </div>
    </StyledProcess>
  )
}

export default Process;
