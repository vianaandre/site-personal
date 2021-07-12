import React from 'react';

import StyledButton from './styled';
import { LinksProps } from '../../../types/types';

type StyledButtonProps = {
  color: string,
  width: string;
}

type ButtonProps = StyledButtonProps & LinksProps

const Button: React.FC<ButtonProps> = ({ href, target, title, color, width }) => {
  return (
    <StyledButton style={{ background: color }} >
        <div className="linkAction" style={{ width: width }}>
          <a  href={href} target={'_' + target} rel="noreferrer">{title}</a>
        </div>
    </StyledButton>
  )
}

export default Button
