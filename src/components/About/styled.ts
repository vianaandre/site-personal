import styled from 'styled-components';

export const StyledInformation = styled.div`
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

  h3 {
        font-size: ${props => props.theme.spacing(4.5)};
        font-family: ${props => props.theme.fonts.family.primary}, ${props => props.theme.fonts.family.secondary}, ${props => props.theme.fonts.family.tertiary};
        font-weight: 600;

        margin-top: ${props => props.theme.spacing(6)};

        color: ${props => props.theme.colors.colorText};

        @media(max-width: 767px) {
          font-size: ${props => props.theme.spacing(3)};
          margin-top: ${props => props.theme.spacing(3)}
        }
      }

  .contentAbout {
    display: flex;
    align-items: center;

    @media(max-width: 767px) {
      flex-direction: column;
      align-items: flex-start;
    }

    @media(max-width: 1279px) and (min-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    };

    .divider {
      height: 200px;
      width: 20px;
      background-color: ${props => props.theme.colors.secondary};

      @media(max-width: 1279px) and (min-width: 768px) {
        width: 400px;
        height: 2px;

        margin-top: ${props => props.theme.spacing(4)};
      };

      @media(max-width: 767px) {
        width: 200px;
        height:  2px;

        margin-top: ${props => props.theme.spacing(3)};
      }
    }

    .textAbout {
      margin-right: ${props => props.theme.spacing(10)};

      @media(max-width: 767px) {
        margin-right: 0;
      }

      .text {

        margin-top: ${props => props.theme.spacing(4)};

        @media(max-width: 767px) {
          margin-top: ${props => props.theme.spacing(3)};
        }

        p {
          font-size: ${props => props.theme.spacing(2.25)};
          line-height: ${props => props.theme.spacing(4.5)};
          color: ${props => props.theme.colors.colorText};
          font-weight: 400;

          @media(max-width: 767px) {
            font-size: ${props => props.theme.spacing(2)};
            line-height: ${props => props.theme.spacing(4)};
          }
        }
      }

    }

    .information {
      margin-left: ${props => props.theme.spacing(10)};
      margin-top: ${props => props.theme.spacing(4)};

      @media(max-width: 1279px) and (min-width: 768px) {
        margin-left: 0;
      };

      @media(max-width: 767px) {
        margin-left: 0;
        margin-top: ${props => props.theme.spacing(3)};
      }

      ul {
        margin-bottom: ${props => props.theme.spacing(7)};

        @media(max-width: 767px) {
          margin-bottom: ${props => props.theme.spacing(1)};
        }
      }
      button {
          padding: ${props => props.theme.spacing(2.5)} ${props => props.theme.spacing(6)};
          background-color: ${props => props.theme.colors.primary};
          border-radius: 5px;

          &:hover {
            transform: scale(1.03);
            transition: 200ms;
          }

          @media(max-width: 767px) {

            padding: ${props => props.theme.spacing(2.5)} 0;

            &:hover {
              transform: none;
            }
          }

        a {
          p {
          color: ${props => props.theme.colors.white};
          text-transform: uppercase;
          font-weight: 600;
          font-size: ${props => props.theme.spacing(3)};
          font-family: ${props => props.theme.fonts.family.primary}, ${props => props.theme.fonts.family.secondary}, ${props => props.theme.fonts.family.tertiary};

          @media(max-width: 767px) {
            width: 300px;
            font-size: ${props => props.theme.spacing(2)};
          }
        }
      }
    }
  }
  }
`;

export default StyledInformation;
