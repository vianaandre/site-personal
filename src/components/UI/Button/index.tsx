import React from 'react';

import StyledButton from './styled';
import { LinksProps } from '../../../types/types';

type StyledButtonProps = {
  color: string,
  width: string;
  font: string;
  height: string;
  download: string,
  target: string;
}

type ButtonProps = StyledButtonProps & LinksProps

const Button: React.FC<ButtonProps> = ({ href, target, title, color, width, font, height, download }) => {
  return (
    <StyledButton style={{ background: color }} >
        <div className="linkAction" style={{ width: width, height: height }}>
          <a download={download} style={{ fontSize: font }} href={href} target={target} rel="noreferrer">{title}</a>
        </div>
    </StyledButton>
  )
}

export default Button
