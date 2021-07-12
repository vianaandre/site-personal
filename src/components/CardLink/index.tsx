import React from 'react';

import CardLinkProps from '../../types/CardLinksProps'

const CardLink: React.FC<CardLinkProps> = ({ img, alt, href, target, description }) => {
  return (
    <div className={'link'}>
      <a href={href} target={'_' + target}>
        <img src={img} alt={alt} />
        <div>
          <h2>{description}</h2>
        </div>
      </a>
    </div>
  )
}

export default CardLink
