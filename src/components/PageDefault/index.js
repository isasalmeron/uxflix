import React from 'react';

import AppBar from '../AppBar';
import Footer from '../Footer';

function PageDefault({ children, hasButton }) {
  return (
    <>
      <AppBar hasButton={hasButton} />
        {children}
      <Footer />
    </>
  );
}

export default PageDefault;