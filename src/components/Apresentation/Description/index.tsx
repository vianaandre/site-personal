import React from 'react';
import { Link } from 'react-scroll';

import StyledDescription from './styled';
import ButtonDown from '../../../assets/ButtonDown.svg';


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
                <ButtonDown />
              </div>
            </button>
        </Link>
      </StyledDescription>
  );
};

export default Desciption;
