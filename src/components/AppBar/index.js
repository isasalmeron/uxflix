import React from 'react';

import LogoImg from '../../assets/img/LogoImg.png';
import Button from '../Button';
import { Logo, AppBarWrapper } from './styles';

function AppBar() {
  return (
    <AppBarWrapper>
      <a href="/">
        <Logo href="/" src={LogoImg} alt="UXflix logo"/>
      </a>
      <Button as="a" href="/">
        Novo vídeo
      </Button>
    </AppBarWrapper>
  );
}

export default AppBar;
