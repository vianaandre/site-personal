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

    img {
      margin-top: ${props => props.theme.spacing(6)}
    }

    @media (max-width: 767px) {
      width: 300px;
      margin-top: ${props => props.theme.spacing(3)};
      padding-top: ${props => props.theme.spacing(3)};
      padding-right: ${props => props.theme.spacing(2)};
      padding-left: ${props => props.theme.spacing(3)};
    }

    p {
      font-size: ${props => props.theme.spacing(4)};
      font-family: ${props => props.theme.fonts.family.primary}, ${props => props.theme.fonts.family.secondary}, ${props => props.theme.fonts.family.tertiary};
      font-weight: 600;

      @media (max-width: 767px) {
        font-size: ${props => props.theme.spacing(3)};
      }
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

      @media (max-width: 767px) {
        margin-top: ${props => props.theme.spacing(3)};
      }
  }
`

export default StyledResponse;
