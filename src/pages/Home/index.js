import React from 'react';

import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import dadosIniciais from '../../data/dados_iniciais.json';

function Home() {
  return (
    <PageDefault hasButton>
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="Conversa com a Tereza Alux, product designer no Mercado Livre e diretora LATAM do Ladies that UX."
      />
      <Carousel
        ignoreFirstVideo
        color="#E56060"
        category={dadosIniciais.categorias[0]}
      />
      <Carousel
        color="#E5D500"
        category={dadosIniciais.categorias[1]}
      />
      <Carousel
        color="#7C2EE5"
        category={dadosIniciais.categorias[2]}
      />
      <Carousel
        color="#33C0FF"
        category={dadosIniciais.categorias[3]}
      />
      <Carousel
        color="#FF3DC1"
        category={dadosIniciais.categorias[4]}
      />
    </PageDefault>
  );
}

export default Home;
