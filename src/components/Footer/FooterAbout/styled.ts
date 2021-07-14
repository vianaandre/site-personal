import styled from 'styled-components';

const StyledFooterAbout = styled.div`

  width: 580px;

  p {
    font-size: ${props => props.theme.spacing(2.25)};
    color: ${props => props.theme.colors.colorText};
    font-family: ${props => props.theme.fonts.family.primary}, ${props => props.theme.fonts.family.secondary}, ${props => props.theme.fonts.family.tertiary};
    margin-top: ${props => props.theme.spacing(2.5)};
  }
`

export default StyledFooterAbout;
