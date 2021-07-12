import React from "react";

import { LinksProps } from '../../types/types';

const Link: React.FC<LinksProps> = ({ href, target, title }) => {
  return (
    <a href={href} target={'_' + target}>{title}</a>
  )
}

export default Link
