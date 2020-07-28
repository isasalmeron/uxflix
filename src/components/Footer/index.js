import React from 'react';
import styled from 'styled-components';

import Logo from '../../assets/img/Logo.png';
import { FooterBase } from './styles';

const LogoWrapper = styled.img`
  margin-right: 24px;
`;

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <LogoWrapper className="Logo" src={Logo} alt="UXflix logo" />
      </a>
      <p>
        Criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
