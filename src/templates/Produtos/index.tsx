import Head from 'next/head';
import { useContext } from 'react';
import Header from '../../components/Header';
import NavBarBlog from '../../components/NavBarBlog';
import ContextProdutos from '../../context/ContextProdutos';
import StyledProdutos from '../../styles/pages/Produtos';
import CardProdutos from '../../components/CardProdutos';
import Container from '../../styles/container';
import Footer from '../../components/Footer';

const TemplatesProdutos: React.FC = () => {

  const { data } = useContext(ContextProdutos);

  return (
    <StyledProdutos>
      <Head>

        <title>André | Produtos</title>

      </Head>
      <Header />
      <NavBarBlog />
      <Container>
      <ul className="produtos">
        {data.allCardprodutos.map(({ href, title, store, description }, index) => (
          <CardProdutos key={index} href={href} title={title} store={store} value={description.value}/>
        ))}
      </ul>
      </Container>
      <Footer />
    </StyledProdutos>
  )
}

export default TemplatesProdutos;
