import styled from 'styled-components';

const StyledCardProject = styled.div`
  display: flex;

  margin-bottom: ${props => props.theme.spacing(3)};

  .information {

    background-color: ${props => props.theme.colors.white};
    width: ${props => props.theme.spacing(42.5)};
    padding: ${props => props.theme.spacing(3)} 0;
    padding-left: ${props => props.theme.spacing(4)};

    display: flex;
    flex-direction: column;
    justify-content: space-between;

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

      img {
        margin-right: ${props => props.theme.spacing(2.5)};
      }

    }
  }
`

export default StyledCardProject;
