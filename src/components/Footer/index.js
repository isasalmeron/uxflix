import React from 'react';

import LogoImg from '../../assets/img/LogoImg.png';
import { FooterBase, TextLink, LogoWrapper } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <LogoWrapper className="Logo" src={LogoImg} alt="UXflix logo" />
      </a>
      <p>
        Criado por
        {' '}
        <TextLink href="https://www.linkedin.com/in/isabelasalmeron/">
          Isabela Salmeron
        </TextLink>
        {' '}
        durante a
        {' '}
        <TextLink href="https://www.alura.com.br/">
          Imersão React da Alura
        </TextLink>
      </p>
    </FooterBase>
  );
}

export default Footer;
