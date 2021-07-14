import React, { useContext } from "react";

import Head from 'next/head'
import ContextPortfolio from "../../context/ContextPortfolio";
import Header from '../../components/Header'
import PortfolioStyled from "../../styles/pages/Portfolio";
import NavBar from '../../components/NavBar';
import Apresentation from '../../components/Apresentation';
import Project from '../../components/Project';
import Process from '../../components/Process';
import About from '../../components/About';
import Skills from '../../components/Skills';
import Form from '../../components/Form';
import Footer from '../../components/Footer';

const TemplatePortfolio: React.FC = () => {

  const { data } = useContext(ContextPortfolio)

  console.log(data)

  return (
      <PortfolioStyled>
        <Head>

          <title>{data.title}</title>

        </Head>
        <Header />
        <NavBar />
        <Apresentation />
        <Project />
        <Process />
        <About />
        <Skills />
        <Form />
        <Footer />
      </PortfolioStyled>
  )
}

export default TemplatePortfolio
