import React from 'react';
import './styles.css';

import Logo from '../../images/logo.svg';

function HeaderMain(){
  return (
    <header id="header_principal">
      <div class="content">
        <div class="logo">
          <img src={Logo} alt="logo"/>
        </div>
        <div class="meuperfil">
          Meu Perfil
        </div>
      </div>
    </header>
  );
}

export default HeaderMain;