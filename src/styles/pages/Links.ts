import styled from 'styled-components'

export const LinksStyled = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;

  header {
      display: flex;
      flex-direction: column;
      align-items: center;

      padding-top: ${props => props.theme.spacing(6)};

      h2 {
        font: 600 ${props => props.theme.spacing(3)} ${props => props.theme.fonts.family.primary};
        text-align: center;

        color: ${props => props.theme.colors.colorText};
        margin-top: ${props => props.theme.spacing(2)};

        @media(max-width: 767px) {
          font-size:  ${props => props.theme.spacing(2)};
        }
      }
    };

    .cardsLinks {
      display: flex;
      flex-direction: column;
      margin-top: ${props => props.theme.spacing(5)};

      .link {
        margin-bottom: ${props => props.theme.spacing(3)};
        width: 650px;

        @media(max-width: 767px) {
          width: 250px;
        }

        a {
          display: flex;
          align-items: center;
          text-decoration: none;

          img {
            @media(max-width: 767px) {
              width: 70px;
              height: 50px;
            }
          }

          div {
            padding: ${props => props.theme.spacing(1.5)} ${props => props.theme.spacing(2.5)};
            width: 100%;
            height: 100%;

            @media(max-width: 767px) {
              padding: ${props => props.theme.spacing(1)} ${props => props.theme.spacing(1.5)} ;
            };

            background-color: ${props => props.theme.colors.white};

            h2 {
              font-size:${props => props.theme.spacing(3)};
              font-weight: 550;
              color: ${props => props.theme.colors.colorText};
              font-family: ${props => props.theme.fonts.family.primary};

              @media(max-width: 767px) {
                font-size: ${props => props.theme.spacing(2.25)};
                font-weight: 500;
              }
            }
          }
        }
      }
    }

`
