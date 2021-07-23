import styled from 'styled-components';


const StyledProdutos = styled.div`
  .produtos {
    margin-top: ${props => props.theme.spacing(8)};

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`

export default StyledProdutos;
