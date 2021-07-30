import React from "react";

import Head from 'next/head'
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
import ButtonFloat from "../../components/ButtonFloat";
import Copyrigth from "../../components/Copyrigth";

const TemplatePortfolio: React.FC = () => {
  return (
      <PortfolioStyled>
        <Head>

          <title>André | Portfólio</title>

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
        <Copyrigth />
        <ButtonFloat />
      </PortfolioStyled>
  )
}

export default TemplatePortfolio
