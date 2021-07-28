import styled from 'styled-components';


const StyledProdutos = styled.div`
  .produtos {
    margin-top: ${props => props.theme.spacing(8)};

    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    @media (max-width: 767px) {
      margin-top: ${props => props.theme.spacing(6)};
    }
  }
`

export default StyledProdutos;
