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
        <a href={'https://mailchi.mp/faf8f5fa87d1/andreviana'} target={'_blank'} rel="noreferrer">
          <button>
            Assinar
          </button>
        </a>
      </div>

    </StyledNewsletter>
  )
}

export default Newsletter;
