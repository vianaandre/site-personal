import React from "react";

import StyledFooterAbout from './styled';
import FooterTitle from '../FooterTitle';

const FooterAbout: React.FC = () => {
  return (
    <StyledFooterAbout>
      <FooterTitle title="Sobre" />
      <p>André Viana, tenho 19 anos, atualmente sou estudante de Engenharia de Software, porém já tenho algumas qualificações na parte desenvolvimento frontend, sou de Missal/Paraná, adoro o mundo da tecnologia e criei esse blog com o intuito de compartilhar o conhecimento que vou adquirindo ao longo do tempo.</p>
    </StyledFooterAbout>
  )
}

export default FooterAbout;
