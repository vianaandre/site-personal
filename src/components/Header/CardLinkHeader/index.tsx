import React from "react";

type CardLinkProps = {
  href: string,
  name: string,
  target: string
}

const CardLink: React.FC<CardLinkProps> = ({ href, target, name }) => {
  return (
    <a href={href} target={'_' + target}>{name}</a>
  )
}

export default CardLink
