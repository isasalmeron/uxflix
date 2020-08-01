import React from 'react';

import Heart from '../../assets/images/Heart.png';
import { FooterBase, TextLink, ImgWrapper } from './styles';

function Footer() {
  return (
    <FooterBase>
      <p>
        Feito com
        {' '}
        <ImgWrapper src={Heart} alt="UXflix logo" />
        {' '}
        por
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
