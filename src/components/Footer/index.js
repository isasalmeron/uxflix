import React from 'react';

import { Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { Wrapper, TextLink } from './styles';

function Footer() {
  return (
    <Wrapper
      bgcolor="black"
      color="white"
      px={3}
      py={2}
    >
      <Typography>
        Feito com
        {' '}
        <FavoriteIcon color="secondary" fontSize="small" />
        {' '}
        amor por
        {' '}
        <TextLink
          href="https://www.linkedin.com/in/isabelasalmeron/"
          target="_blank"
          rel="noreferrer"
        >
          Isabela Salmeron
        </TextLink>
        {' '}
        durante a
        {' '}
        <TextLink
          href="https://www.alura.com.br/"
          target="_blank"
          rel="noreferrer"
        >
          Imersão React da Alura
        </TextLink>
      </Typography>
    </Wrapper>
  );
}

export default Footer;
