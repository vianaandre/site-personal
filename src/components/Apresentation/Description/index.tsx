import React from 'react';
import { Link } from 'react-scroll';

import StyledDescription from './styled';


type DesciptionProps = {
  name: string,
  profession: string,
  text: string,
}

const Desciption: React.FC<DesciptionProps> = ({ name, profession, text }) => {

  return (
      <StyledDescription>
        <h1>{name}</h1>
        <h2>{profession}</h2>
        <div className='text'>
          <p>
            <i>
              {text}
            </i>
          </p>
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
