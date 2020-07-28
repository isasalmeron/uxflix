import React from 'react';

import Logo from '../../assets/img/Logo.png';
import './AppBar.css';
import Button from '../Button';

function AppBar() {
  return (
    <nav className="AppBar">
      <a href="/">
        <img className="Logo" src={Logo} alt="UXflix logo"/>
      </a>
      <Button as="a" className="ButtonLink" href="/">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default AppBar;
