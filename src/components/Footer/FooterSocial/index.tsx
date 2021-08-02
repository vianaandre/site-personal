import React from "react";

import StyledFooterSocial from './styled';
import FooterTitle from '../FooterTitle'

const FooterSocial: React.FC = () => {
  return (
    <StyledFooterSocial>
      <FooterTitle title="Social" />
      <a href="mailto:andredapperviana@gmail.com" className="linkEmail">
        <p>
          andredapperviana@gmail.com
        </p>
      </a>
      <div className='socialMedia'>
        <ul>
          <li>
            <a href="https://github.com/vianaandre" target="_blank" rel="noreferrer">
              <img src={'/assets/socialGithub.svg'} alt="Ícone do Github" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/andre_gust_viana" target="_blank" rel="noreferrer">
              <img src={'/assets/socialInstagram.svg'} alt="Ícone do Instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/andr%C3%A9-viana-133353190/" target="_blank" rel="noreferrer">
              <img src={'/assets/socialLinkedin.svg'} alt="Ícone do Linkedin" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/andregustviana" target="_blank" rel="noreferrer">
              <img src={'/assets/socialTwitter.svg'} alt="Ícone do Twitter" />
            </a>
          </li>
          <li>
            <a href="https://api.whatsapp.com/send?phone=5545988040665&text=Ol%C3%A1%20Andr%C3%A9%2C%20Gostaria%20de%20saber%20mais%20sobre%20Voc%C3%AA%3F%20" target="_blank" rel="noreferrer">
              <img src={'/assets/socialWhatts.svg'} alt="Ícone do Whattshap" />
            </a>
          </li>
        </ul>
      </div>
    </StyledFooterSocial>
  )
}

export default FooterSocial;
