import React from 'react';
import { Link } from 'react-scroll';

import StyledNavBar from './styled';
import LinkNavBar from '../LinkNavBar'
import { links, linksIcon} from './data';

const NavBar: React.FC = () => {

  return (
      <StyledNavBar>
         <div className="links">
         { links.map(({ href, title}, index) => (
           <button key={index}>
             <LinkNavBar to={href} href={href} title={title}  />
           </button>
         ))}
         </div>
         <div className='linkIcon'>
           { linksIcon.map(({ href, icon, alt }, index) => (
             <div className='link' key={index}>
               <Link to={href.substring(1, 10)} smooth={true} duration={1200}>
                 <img src={icon} alt={alt} />
               </Link >
             </div>
           )) }
         </div>
      </StyledNavBar>
  )
}

export default NavBar
