
import React from 'react';

import Link from 'next/link'
import StyledDescription from './styled';
import ButtonDown from '../../../assets/ButtonDown.svg';

type DesciptionProps = {
  name: string,
  profession: string,
  text: string,
  href: string,
  target: string,
  title: string,
}



const Desciption: React.FC<DesciptionProps> = ({ name, profession, text, href, target, title}) => {

  return (
      <StyledDescription>
        <h1>{name}</h1>
        <h2>{profession}</h2>
        <div className='text' dangerouslySetInnerHTML={{ __html: text }} />
        <Link href={href} >
          <a target={target}>
            <button className="btn_action">
              <div>
                <p>{title}</p>
                <ButtonDown />
              </div>
            </button>
          </a>
        </Link>
      </StyledDescription>
  );
};

export default Desciption;
