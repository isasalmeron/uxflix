import React from 'react';
import styled from 'styled-components';

import LogoImg from '../../assets/img/LogoImg.png';
import { FooterBase } from './styles';

const LogoWrapper = styled.img`
  max-width: 90px;
  padding: 16px 0px;
  margin-right: 24px;

  @media (max-width: 800px) {
    max-width: 90px;
  }
`;

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <LogoWrapper className="Logo" src={LogoImg} alt="UXflix logo" />
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
