import styled from 'styled-components';

const StyledDescription = styled.div`
  h1 {
    font-size: ${props => props.theme.spacing(6)};
    font-weight: bold;
    padding: 0;
    margin: 0;

    color: ${props => props.theme.colors.colorText};

    @media(max-width: 1024px) and (min-width: 768px) {
      font-size: ${props => props.theme.spacing(4.5)};
    };
    @media(max-width: 767px) {
      font-size: ${props => props.theme.spacing(3)}
    }
  }
  h2 {
    font-size: ${props => props.theme.spacing(4.5)};
    margin-bottom: 1.5rem;

    color: ${props => props.theme.colors.colorText};

    @media(max-width: 1024px) and (min-width: 768px) {
      font-size: ${props => props.theme.spacing(3)};
    };
    @media(max-width: 767px) {
      font-size: ${props => props.theme.spacing(2.25)}
    }
  }
  .text {
    p {
      font-size: ${props => props.theme.spacing(2.25)};
      width: ${props => props.theme.spacing(44)};
      color: ${props => props.theme.colors.colorText};
      font-weight: 600;

      @media(max-width: 1024px) and (min-width: 768px) {
        font-size: ${props => props.theme.spacing(2)};
        width: ${props => props.theme.spacing(40)};
      };
      @media(max-width: 767px) {
      font-size: ${props => props.theme.spacing(1.75)};
      line-height: ${props => props.theme.spacing(2)};
      width: 300px;
    }
    }

    margin-bottom: 1.5rem;
  }

  .containerButton {
    img {
      margin-left: 0.6rem;
    }
  }

  .btn_action {
    height: 70px;
    width: 65%;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 5px;

    &:hover {
      transform: scale(1.03);
      transition: 200ms;
    };

    @media(max-width: 1024px) and (min-width: 768px) {
      width: 80%;
    };

    @media(max-width: 767px) {
      width: 100%;

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
