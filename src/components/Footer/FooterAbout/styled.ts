import styled from 'styled-components';

const StyledFooterAbout = styled.div`

  width: 580px;

  @media(max-width: 1279px) and (min-width: 768px)  {
    width: 100%;

    margin-bottom: ${props => props.theme.spacing(4)};
  }

  p {
    font-size: ${props => props.theme.spacing(2.25)};
    color: ${props => props.theme.colors.colorText};
    font-family: ${props => props.theme.fonts.family.primary}, ${props => props.theme.fonts.family.secondary}, ${props => props.theme.fonts.family.tertiary};
    margin-top: ${props => props.theme.spacing(2.5)};
  }

  @media(max-width: 767px) {

    margin-bottom: ${props => props.theme.spacing(3)};

    p {
      font-size: ${props => props.theme.spacing(2)};
      margin-top: ${props => props.theme.spacing(2)};
    }
  }
`

export default StyledFooterAbout;
