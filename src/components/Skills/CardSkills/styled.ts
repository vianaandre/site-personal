import styled from 'styled-components';

const StyledCardSkills = styled.div`
  text-align: center;
  width: ${props => props.theme.spacing(20)};

  @media(max-width: 767px) {
    margin-top: ${props => props.theme.spacing(4)};
  }

  h2 {
    font-family: ${props => props.theme.fonts.family.primary}, ${props => props.theme.fonts.family.secondary}, ${props => props.theme.fonts.family.tertiary};
    font-size: ${props => props.theme.spacing(3)};
    font-weight: 600;
    margin-top: ${props => props.theme.spacing(2)};
    margin-bottom: ${props => props.theme.spacing(1)};

    color: ${props => props.theme.colors.colorText};
    text-transform: uppercase;
  }

  .explicationCase{
    p {
    font-size: ${props => props.theme.spacing(2)};
    font-family: ${props => props.theme.fonts.family.primary}, ${props => props.theme.fonts.family.secondary}, ${props => props.theme.fonts.family.tertiary}
    ;
    color: ${props => props.theme.colors.colorText};
    }
  }
`

export default StyledCardSkills;
