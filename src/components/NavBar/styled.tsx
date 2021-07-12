import styled from 'styled-components';

const StyledNavBar = styled.nav`
  width: 1280px;
  margin: 0 auto;
  padding: 0;
  position: relative;

  margin-top: ${props => props.theme.spacing(8)};

  display: flex;
  justify-content: center;

  .links {

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 5px;

    background-color: ${props => props.theme.colors.white};
    position: relative;
    height: ${props => props.theme.spacing(8)};
    overflow: hidden;

    button {
      height: ${props => props.theme.spacing(8)};
      background-color: ${props => props.theme.colors.white};

      a {
        padding: ${props => props.theme.spacing(2)} ${props => props.theme.spacing(5)};
        font-family: ${props => props.theme.fonts.family.primary}, ${props => props.theme.fonts.family.secondary}, ${props => props.theme.fonts.family.tertiary};
        font-size: ${props => props.theme.spacing(3)};
        font-weight: 500;
        color: ${props => props.theme.colors.colorText};

        &:hover {
          background-color: blue;
          color: ${props => props.theme.colors.white};
        };

        &:focus {
          background-color: blue;
          color: ${props => props.theme.colors.white};
        }
      }
    };
  }
`

export default StyledNavBar
