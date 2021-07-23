import React from "react";

import StyledNewsletter from "./styled";

const Newsletter: React.FC = () => {
  return (
    <StyledNewsletter>
      <div className="apresentation">
        <h2>ASSINE MINHA NEWSLETTER</h2>
      </div>
      <div className="calling">
        <p>
        Assine e recebe minhas postagens com antecedência. Cancele a assinatura a qualquer momento
        </p>
      </div>
      <form className="form">
        <label htmlFor="" />
        <input type="text" placeholder="Digite seu melhor Email"/>
        <button>ENVIAR</button>
      </form>
    </StyledNewsletter>
  )
}

export default Newsletter;
