import styled from 'styled-components';

const StyledForm = styled.div`
  width: 1280px;
  margin: 0 auto;
  padding: 0;
  position: relative;

  .contentContact {

    margin-top: ${props => props.theme.spacing(5)};
    display: flex;

    .informationEmail {

      margin-right: ${props => props.theme.spacing(30)};

      h3 {
        font-size: ${props => props.theme.spacing(3)};
        font-family: ${props => props.theme.fonts.family.primary}, ${props => props.theme.fonts.family.secondary}, ${props => props.theme.fonts.family.tertiary};
        font-weight: 600;
        color: ${props => props.theme.colors.colorText};
        margin-bottom: ${props => props.theme.spacing(1)};
      }

      a {
        font-size: ${props => props.theme.spacing(2.25)};
        font-family: ${props => props.theme.fonts.family.primary}, ${props => props.theme.fonts.family.secondary}, ${props => props.theme.fonts.family.tertiary};
        color: ${props => props.theme.colors.colorText};
        font-weight: 600;
      }
    }
    .divider {
      height: ${props => props.theme.spacing(8)};
      width: 4px;
      background-color: ${props => props.theme.colors.secondary};

      margin-top: ${props => props.theme.spacing(1)};
    }

    .form {
      margin-left: ${props => props.theme.spacing(2)};
      height: 420px;
    }
  }

`;

export default StyledForm
  ;
