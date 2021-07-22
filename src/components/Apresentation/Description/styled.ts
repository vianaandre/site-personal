import styled from 'styled-components';

const StyledDescription = styled.div`

  margin-top: ${props => props.theme.spacing(4)};
  text-align: center;

  @media(max-width: 767px) {
    margin-top: ${props => props.theme.spacing(2)}
  }

  h1 {
    font-size: ${props => props.theme.spacing(8)};
    font-weight: bold;
    padding: 0;
    margin: 0;

    color: ${props => props.theme.colors.colorText};

    @media(max-width: 1024px) and (min-width: 768px) {
      font-size: ${props => props.theme.spacing(4.5)};
    };
    @media(max-width: 767px) {
      font-size: ${props => props.theme.spacing(4)}
    }
  }
  h2 {
    font-size: ${props => props.theme.spacing(6)};
    margin-top: ${props => props.theme.spacing(1)};
    margin-bottom: ${props => props.theme.spacing(4)};
    font-weight: 500;

    color: ${props => props.theme.colors.colorText};

    @media(max-width: 1024px) and (min-width: 768px) {
      font-size: ${props => props.theme.spacing(3)};
    };
    @media(max-width: 767px) {
      font-size: ${props => props.theme.spacing(3)}
    }
  }
  .text {

    display: flex;
    justify-content: center;

    p {
      font-size: ${props => props.theme.spacing(2.25)};
      width: ${props => props.theme.spacing(44)};
      color: ${props => props.theme.colors.colorText};
      font-weight: 550;

      @media(max-width: 1024px) and (min-width: 768px) {
        font-size: ${props => props.theme.spacing(2)};
        width: ${props => props.theme.spacing(40)};
      };
      @media(max-width: 767px) {
      font-size: ${props => props.theme.spacing(1.75)};
      line-height: ${props => props.theme.spacing(2)};
      width: 300px;
      font-weight: 550;
    }
    }

    margin-bottom: ${props => props.theme.spacing(5)};
  }

  .containerButton {
    img {
      margin-left: 0.6rem;
    }
  }

  .btn_action {
    height: 80px;
    width: 65%;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 5px;

    &:hover {
      transform: scale(1.03);
    };

    @media(max-width: 1024px) and (min-width: 768px) {
      width: 80%;
    };

    @media(max-width: 767px) {
      width: 100%;
      height: 70px;

      &:hover {
        transform: none;
      }
    };

    div {
      display: flex;
      justify-content: center;
      align-items: center;
         p {
            font-size: ${props => props.theme.spacing(3)};
            text-transform: uppercase;
            font-weight: 600;
            color: ${({ theme }) => theme.colors.white};
            margin-right: 10px;
            font-family: ${({ theme }) => theme.fonts.family.primary}
      }
    }

  }
`;


export default StyledDescription
