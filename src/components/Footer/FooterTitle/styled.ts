import styled from 'styled-components';

const StyledFooterTitle = styled.h1`

  font-size: ${props => props.theme.spacing(4.5)};
  font-weight: bold;
  font-family: ${props => props.theme.fonts.family.primary}, ${props => props.theme.fonts.family.secondary}, ${props => props.theme.fonts.family.tertiary};
  color: ${props => props.theme.colors.colorText};

`

export default StyledFooterTitle;
