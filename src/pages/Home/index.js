import React, { useEffect, useState } from 'react';

import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriesApi from '../../api/categories';

function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    categoriesApi.getAllWithVideos().then((categoriesWithVideos) => {
      setCategories(categoriesWithVideos);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <PageDefault hasButton>
      {categories.length === 0 ? (
        <div>
          Loading...
        </div>
      ) : (
        <>
          <BannerMain
            videoTitle={categories[0].videos[0].title}
            url={categories[0].videos[0].url}
            videoDescription="Conversa com a Tereza Alux, product designer no Mercado Livre e diretora LATAM do Ladies that UX."
          />
          {categories.map((category, index) => (
            <Carousel
              ignoreFirstVideo={index === 0}
              category={category}
            />
          ))}
        </>
      )}
    </PageDefault>
  );
}

export default Home;
