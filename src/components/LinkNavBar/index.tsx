import React from "react";
import { Link } from 'react-scroll';

import { LinksProps } from '../../types/types';

const LinkNavBar: React.FC<LinksProps> = ({ href, title }) => {
  return (
    <Link to={href.substring(1, 10)} smooth={true} duration={1000} offset={30} >
      {title}
    </Link>
  )
}

export default LinkNavBar;
