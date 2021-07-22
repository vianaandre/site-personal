import styled from 'styled-components';

const StyledForm = styled.div`
  width: 1280px;
  margin: 0 auto;
  padding: 0;
  position: relative;

  padding-top: ${props => props.theme.spacing(1)};

  @media(max-width: 767px) {
    padding-top: 0;
  }

  @media(max-width: 1279px) and (min-width: 1025px) {
    width: 1024px;
  };

  @media(max-width: 1024px) and (min-width: 768px) {
    width: 768px;
  };

  @media(max-width: 767px) {
    width: 300px;
  }

  .contentContact {

    margin-top: ${props => props.theme.spacing(5)};
    display: flex;
    flex-wrap: wrap;

    @media(max-width: 1279px) and (min-width: 768px) {
      flex-direction: column;
    };

    @media(max-width: 767px) {
      flex-direction: column;
    }

    .informationEmail {

      margin-right: ${props => props.theme.spacing(30)};

      h3 {
        font-size: ${props => props.theme.spacing(3)};
        font-family: ${props => props.theme.fonts.family.primary}, ${props => props.theme.fonts.family.secondary}, ${props => props.theme.fonts.family.tertiary};
        font-weight: 600;
        color: ${props => props.theme.colors.colorText};
        margin-bottom: ${props => props.theme.spacing(1)};

        @media(max-width: 767px) {
          font-size: ${props => props.theme.spacing(2)};
        }
      }

      a {
        font-size: ${props => props.theme.spacing(2.25)};
        font-family: ${props => props.theme.fonts.family.primary}, ${props => props.theme.fonts.family.secondary}, ${props => props.theme.fonts.family.tertiary};
        color: ${props => props.theme.colors.colorText};
        font-weight: 600;

        @media(max-width: 767px) {
          font-size: ${props => props.theme.spacing(2)};
        }
      }

      @media(max-width: 767px) {
        margin-right: 0;
      }
    }
    .divider {
      height: ${props => props.theme.spacing(8)};
      width: 4px;
      background-color: ${props => props.theme.colors.secondary};

      margin-top: ${props => props.theme.spacing(1)};

      @media(max-width: 1279px) and (min-width: 768px) {
        height: 2px;
        width: ${props => props.theme.spacing(20)};
        margin-top: ${props => props.theme.spacing(3)};
      }

      @media(max-width: 767px) {
        height: 2px;
        width: 200px;
        margin-top: ${props => props.theme.spacing(3)};
      }
    }

    .form {
      margin-left: ${props => props.theme.spacing(2)};
      height: 420px;

      @media(max-width: 1279px) and (min-width: 768px) {
        margin-left: 0;
        margin-top: ${props => props.theme.spacing(3)};
      }

      @media(max-width: 767px) {
        margin-left: 0;
      }
    }
  }

`;

export default StyledForm
  ;
