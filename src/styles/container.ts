import styled from 'styled-components';


const Container = styled.div`

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

`
export default Container;
