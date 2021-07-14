import React from "react";

import StyledFooterSocial from './styled';
import FooterTitle from '../FooterTitle'
import SocialGithub from '../../../assets/socialGithub.svg';
import SocialInstagram from '../../../assets/socialInstagram.svg';
import SocialTwitter from '../../../assets/socialTwitter.svg';
import SocialLinkedin from '../../../assets/socialLinkedin.svg';
import SocialWhatts from '../../../assets/socialWhatts.svg';


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
              <SocialGithub />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/andre_gust_viana" target="_blank" rel="noreferrer">
              <SocialInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/andr%C3%A9-viana-133353190/" target="_blank" rel="noreferrer">
              <SocialLinkedin />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/andregustviana" target="_blank" rel="noreferrer">
              <SocialTwitter />
            </a>
          </li>
          <li>
            <a href="https://api.whatsapp.com/send?phone=5545988040665&text=Ol%C3%A1%20Andr%C3%A9%2C%20Gostaria%20de%20saber%20mais%20sobre%20Voc%C3%AA%3F%20" target="_blank" rel="noreferrer">
              <SocialWhatts />
            </a>
          </li>
        </ul>
      </div>
    </StyledFooterSocial>
  )
}

export default FooterSocial;
