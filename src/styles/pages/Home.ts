import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  h1 {
    font: 600 36px Roboto;
    color: ${props => props.theme.dark.colors.primary};
    margin-top: 40px;
    margin-bottom: 40px;
  }
  p {
    color: ${props => props.theme.dark.colors.colorTtext};
    font-family: Roboto;
  }
`
