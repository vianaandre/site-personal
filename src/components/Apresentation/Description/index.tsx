import React from 'react';
import { Link } from 'react-scroll';

import StyledDescription from './styled';


type DesciptionProps = {
  name: string,
  profession: string,
}

const Desciption: React.FC<DesciptionProps> = ({ name, profession }) => {

  return (
      <StyledDescription>
        <h1>{name}</h1>
        <h2>{profession}</h2>
        <div className={'divider'}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <Link to={'Contact'} smooth={true} duration={1000}>
            <button className="btn_action">
              <div>
                <p>Contato</p>
                <img src={'/assets/buttonDown.svg'} alt="Botão de ir para Baixo" />
              </div>
            </button>
        </Link>
      </StyledDescription>
  );
};

export default Desciption;
