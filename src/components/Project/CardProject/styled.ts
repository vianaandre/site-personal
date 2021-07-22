import styled from 'styled-components';

const StyledCardProject = styled.div`
  display: flex;

  margin-bottom: ${props => props.theme.spacing(3)};

  @media(max-width: 767px) {

    flex-direction: column;

    img {
      width: 300px;
    }
  }

  .information {

    background-color: ${props => props.theme.colors.white};
    width: ${props => props.theme.spacing(42.5)};
    padding: ${props => props.theme.spacing(3)} 0;
    padding-left: ${props => props.theme.spacing(4)};

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media(max-width: 1279px) and (min-width: 1025px) {
      width: 370px;
    };

    @media(max-width: 1024px) and (min-width: 768px) {
      width: 370px;
    };

    h2 {
      font-size: ${props => props.theme.spacing(2)};
      font-family: ${props => props.theme.fonts.family.primary}, ${props => props.theme.fonts.family.secondary}, ${props => props.theme.fonts.family.tertiary};
      font-weight: bold;

      color: ${props => props.theme.colors.colorText};

      &::after {
        content: "";
        display: block;
        width: 40%;
        height: 2px;
        margin: 0 0;
        background-color: ${props => props.theme.colors.primary};
      }
    };

    .buttons {
      display: flex;
    }

    .casesImages {

      margin-top: ${props => props.theme.spacing(4)};

      img {
        margin-right: ${props => props.theme.spacing(2.5)};
        width: 30px;
        height: 30px;
      }

    }

    @media(max-width: 767px) {
      width: 300px;
      display: flex;
      flex-direction: column;
      align-items: center;

      h2 {
        font-size: ${props => props.theme.spacing(2)};
        &::after {
          display: none;
        }
      }

      .buttons {
        margin-top: ${props => props.theme.spacing(4)};
      }
    }
  }
`

export default StyledCardProject;
