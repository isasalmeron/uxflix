import React from 'react';

import AppBar from '../AppBar';
import Footer from '../Footer';

function PageDefault({ children }) {
  return (
    <>
      <AppBar />
        {children}
      <Footer />
    </>
  );
}

export default PageDefault;