import React, { useEffect, useState } from 'react';

import PageDefault from '../../components/PageDefault';
import ErrorDialog from '../../components/Dialogs/ErrorDialog';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Loading from '../../components/Loading';
import categoriesApi from '../../api/categories';

function Home() {
  const [categories, setCategories] = useState([]);
  const [loadVideosFail, setLoadVideosFail] = useState(false);

  const handleOnCloseErrorDialog = () => setLoadVideosFail(false);

  useEffect(() => {
    categoriesApi.getAllWithVideos().then((categoriesWithVideos) => {
      setCategories(categoriesWithVideos);
    }).catch(() => {
      setLoadVideosFail(true);
    });
  }, []);

  return (
    <PageDefault hasButton>
      {!loadVideosFail && categories.length === 0 && <Loading size={80} />}
      {categories.length > 0 && (
        <>
          <BannerMain
            video={categories[0].videos[0]}
          />
          {categories.map((category, index) => (
            <Carousel
              key={category.name}
              ignoreFirstVideo={index === 0}
              category={category}
            />
          ))}
        </>
      )}
      <ErrorDialog
        open={loadVideosFail}
        onClose={handleOnCloseErrorDialog}
      />
    </PageDefault>
  );
}

export default Home;
