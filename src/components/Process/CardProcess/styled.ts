import styled from 'styled-components';

const StyledCardProcess = styled.div`
  .title {
    h2 {
    padding: 0;
    margin: 0;
    text-align: start;
    margin-left: ${props => props.theme.spacing(5)};
    margin-bottom: ${props => props.theme.spacing(-5)};

    font-size: ${props => props.theme.spacing(6)};
    font-weight: 600;
    font-family: ${props => props.theme.fonts.family.primary}, ${props => props.theme.fonts.family.secondary}, ${props => props.theme.fonts.family.tertiary};
    color: ${props => props.theme.colors.primary};
  }

  @media (max-width: 767px) {
    margin-top: ${props => props.theme.spacing(2)};
  }

  }

  .content {

    background-color: ${props => props.theme.colors.white};
    border-radius: 5px;

    width: 305px;

    @media(max-width: 767px) {
    width: 300px;
    }

    padding: ${props => props.theme.spacing(3)} ${props => props.theme.spacing(3.75)};

    @media(max-width: 767px) {
      padding:  ${props => props.theme.spacing(3)} ${props => props.theme.spacing(3.75)};
    }

    border-bottom: solid 5px ${props => props.theme.colors.primary};

    @media(max-width: 1279px) and (min-width: 1025px) {
    margin-bottom: ${props => props.theme.spacing(2.5)};
    };

    @media(max-width: 1024px) and (min-width: 768px) {
      margin-bottom: ${props => props.theme.spacing(2.5)};
    };

    div {
      margin-top: ${props => props.theme.spacing(2.5)};

      p {
        font-size: ${props => props.theme.spacing(2)};
        font-family: ${props => props.theme.fonts.family.primary}, ${props => props.theme.fonts.family.secondary}, ${props => props.theme.fonts.family.tertiary};

        @media(max-width: 767px) {
          font-size: ${props => props.theme.spacing(1.75)}
        }
      }
    }

  }


`

export default StyledCardProcess;
