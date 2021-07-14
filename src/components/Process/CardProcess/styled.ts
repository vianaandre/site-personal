import styled from 'styled-components';

const StyledCardProcess = styled.div`
  background-color: ${props => props.theme.colors.white};
  border-radius: 5px;

  width: 305px;

  padding: ${props => props.theme.spacing(3)} ${props => props.theme.spacing(3.75)};

  border-bottom: solid 5px ${props => props.theme.colors.primary};

  div {
    margin-top: ${props => props.theme.spacing(2.5)};

    p {
      font-size: ${props => props.theme.spacing(2)};
      font-family: ${props => props.theme.fonts.family.primary}, ${props => props.theme.fonts.family.secondary}, ${props => props.theme.fonts.family.tertiary};
    }
  }
`

export default StyledCardProcess;
