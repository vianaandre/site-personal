import styled from 'styled-components';

const StyledApresentation = styled.div`

  width: 1280px;
  margin: 0 auto;
  padding: 0;
  position: relative;

  background-color: rgba(34, 55, 255, 0.2);

  border-radius: 5px;

  display: flex;
  justify-content: space-around;

  margin-top: ${props => props.theme.spacing(8)};
  padding: ${props => props.theme.spacing(6)} 0;

  position: relative;
  display: flex;
  justify-content: space-around;

  @media(max-width: 1024px) and (min-width: 768px) {
    padding: ${props => props.theme.spacing(4)} ${props => props.theme.spacing(1.5)} ;

    .img {
      width: 50%;
    }
  }

  @media(max-width: 767px) {
    .img {
      display: none;
    };

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
