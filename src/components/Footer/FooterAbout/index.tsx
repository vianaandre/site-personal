import React from "react";

import StyledFooterAbout from './styled';
import FooterTitle from '../FooterTitle';

const FooterAbout: React.FC = () => {
  return (
    <StyledFooterAbout>
      <FooterTitle title="Sobre" />
      <p>André Viana, tenho 18 anos, atualmente sou estudante de Engenharia de Software, porém já tenho algumas qualificações na parte desenvolvimento frontend, sou de Missal/Paraná, adoro o mundo da tecnologia e da economia e criei esse blog com o intuito de compartilhar o conhecimento que vou adquirindo.</p>
    </StyledFooterAbout>
  )
}

export default FooterAbout;
