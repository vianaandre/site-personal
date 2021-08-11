import styled from 'styled-components';

const StyledApresentation = styled.div`

  width: 1280px;
  margin: 0 auto;
  padding: 0;
  position: relative;

  @media(max-width: 1279px) and (min-width: 1025px) {
    width: 1024px;
  };

  @media(max-width: 1024px) and (min-width: 768px) {
    width: 768px;
  };

  @media(max-width: 767px) {
    width: 300px;
  }


  border-radius: 5px;

  padding: ${props => props.theme.spacing(5)} 0;

  display: flex;
  justify-content: space-around;
  align-items: center;

  .block {
    height: ${props => props.theme.spacing(20)};
    width: 5px;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 10px;

    @media(max-width: 767px) {
      display: none;
    }
  }


  img {
    width: 200px;
    height: 200px;
  }

  @media(max-width: 1024px) and (min-width: 768px) {
    .block {
      height: ${props => props.theme.spacing(15)};
    }
    }

  @media(max-width: 767px) {
    .img {
      display: none;
    }

    background-color: transparent;
    padding: 0 0;
    margin-top: 1rem;
  }

  .desciption {
    align-self: flex-end;
    margin-bottom: 3.125rem;
    }
`;

export default StyledApresentation
