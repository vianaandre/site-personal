import styled from 'styled-components';

export const StyledInformation = styled.div`
  width: 1280px;
  margin: 0 auto;
  padding: 0;
  position: relative;

  h2 {
        font-size: ${props => props.theme.spacing(4.5)};
        font-family: ${props => props.theme.fonts.family.primary}, ${props => props.theme.fonts.family.secondary}, ${props => props.theme.fonts.family.tertiary};
        font-weight: 600;

        margin-top: ${props => props.theme.spacing(6)};

        color: ${props => props.theme.colors.colorText};
      }

  .contentAbout {
    display: flex;
    align-items: center;

    .divider {
      height: 200px;
      width: 20px;
      background-color: ${props => props.theme.colors.secondary};
    }

    .textAbout {
      margin-right: ${props => props.theme.spacing(10)};

      .text {
        margin-top: ${props => props.theme.spacing(4)};
        p {
          font-size: ${props => props.theme.spacing(2.25)};
          line-height: ${props => props.theme.spacing(4.5)};
          color: ${props => props.theme.colors.colorText};
          font-weight: 400;
        }
      }

    }

    .information {
      margin-left: ${props => props.theme.spacing(10)};
      margin-top: ${props => props.theme.spacing(4)};

      ul {
        margin-bottom: ${props => props.theme.spacing(7)};
      }
      button {
          padding: ${props => props.theme.spacing(2.5)} ${props => props.theme.spacing(6)};
          background-color: ${props => props.theme.colors.primary};
          border-radius: 5px;

          &:hover {
            transform: scale(1.03);
            transition: 200ms;
          }

        a {
          p {
          color: ${props => props.theme.colors.white};
          text-transform: uppercase;
          font-weight: 600;
          font-size: ${props => props.theme.spacing(3)};
          font-family: ${props => props.theme.fonts.family.primary}, ${props => props.theme.fonts.family.secondary}, ${props => props.theme.fonts.family.tertiary};
        }
      }
    }
  }
  }
`;

export default StyledInformation;
