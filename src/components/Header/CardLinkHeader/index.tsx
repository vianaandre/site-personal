import React from "react";

type CardLinkProps = {
  href: string,
  name: string,
}

const CardLink: React.FC<CardLinkProps> = ({ href, name }) => {
  return (
    <a href={href} target='_self'>{name}</a>
  )
}

export default CardLink
