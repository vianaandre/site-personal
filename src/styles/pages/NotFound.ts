import styled from 'styled-components';

const StyledNotFound = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 600px;

  .title {
    h1 {
      font-size: 120px;
      font-weight: bold;
      margin: 0;

      border-bottom: 4px solid;
      background-image: linear-gradient(180deg, rgba(34, 55, 255, 0) -87.75%, #2237FF 100%);
      /* agora colocamos o fundo gradiente dentro do texto com essa propriedade */
      background-clip: text;
      -webkit-background-clip: text;
      /* a cor do texto deve estar como transparent */
      color: transparent;
      color: linear-gradient(180deg, rgba(34, 55, 255, 0) -47.65%, #2237FF 100%);
      line-height: 100px;

      @media(max-width: 767px) {
        font-size: 90px;
      }

    }
  }

  h2 {
    margin-top: ${props => props.theme.spacing(4)};

    font-size: ${props => props.theme.spacing(4.5)};
    font-weight: 600;
    color: ${props => props.theme.colors.colorText};

    @media(max-width: 767px) {
      font-size: ${props => props.theme.spacing(3)};
      text-align: center;
    }
  }

  .initial {
    display: flex;
    align-items: center;

    margin-top: ${props => props.theme.spacing(4)};

    p {
      margin-left: ${props => props.theme.spacing(1)};
      color: ${props => props.theme.colors.primary};
      font-size: ${props => props.theme.spacing(2.25)};
    }
  }

  span {
    margin-top: ${props => props.theme.spacing(4)};
    margin-bottom: ${props => props.theme.spacing(4)};
    font-size: ${props => props.theme.spacing(2.25)};
    color: ${props => props.theme.colors.colorText};
  }

  .linksArtenativos {

    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.spacing(3)};

    a {
      display: flex;
      align-items: center;

      @media(max-width: 767px) {
        img {
          width: 70px;
          height: 50px;
          z-index: 10000;
        }
      }

      div {
        width: 560px;
        height: 60px;
        display: flex;
        align-items: center;
        background-color: ${props => props.theme.colors.white};
        padding-left: ${props => props.theme.spacing(2.5)};

        @media(max-width: 767px) {
          width: 200px;
          height: 43px;
          margin-left: -4px;
        }

        p {
          font-size: ${props => props.theme.spacing(3)};
          font-weight: 600;
          color: ${props => props.theme.colors.colorText}
        }
      }
    }
  }

`

export default StyledNotFound
