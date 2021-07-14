import styled from 'styled-components';

const StyledResponse = styled.div`
  .responseSend {
    padding: ${props => props.theme.spacing(6)};
    width: 50vw;
    min-width: 300px;
    max-width: 800px;
    height: 420px;
    border-radius: 5px;

    margin-top: ${props => props.theme.spacing(1)};

    p {
      font-size: ${props => props.theme.spacing(4)};
      font-family: ${props => props.theme.fonts.family.primary}, ${props => props.theme.fonts.family.secondary}, ${props => props.theme.fonts.family.tertiary};
      font-weight: 600;
    }

    svg {
      margin-top: ${props => props.theme.spacing(5)}
    }
  }

  .circularProgress {
      background-color: ${props => props.theme.colors.white};
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50vw;
      min-width: 300px;
      max-width: 800px;
      height: 420px;
      border-radius: 5px;
  }
`

export default StyledResponse;
