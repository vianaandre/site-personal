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

  .divider {

    width: 100%;
    display: flex;
    justify-content: center;
    gap: 15px;

    margin: 46px auto;
    margin-bottom: ${props => props.theme.spacing(6)};

    @media(max-width: 767px) {
      gap: 10px;
    }

    div {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: ${props => props.theme.colors.secondary};
    }
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
            font-weight: bold;
            letter-spacing: 1px;
            color: ${({ theme }) => theme.colors.white};
            margin-right: 10px;
            font-family: ${({ theme }) => theme.fonts.family.primary}
      }

      img {
        width: 20px;
        height: 11px;
      }
    }

  }
`;


export default StyledDescription
