import React from 'react';
import PropTypes from 'prop-types';

import Box from '@material-ui/core/Box';

import AppBar from '../AppBar';
import Footer from '../Footer';

function PageDefault({ children, hasButton }) {
  return (
    <>
      <AppBar hasButton={hasButton} />
      <Box flex={1}>
        {children}
      </Box>
      <Footer />
    </>
  );
}

PageDefault.defaultProps = {
  hasButton: false,
};

PageDefault.propTypes = {
  children: PropTypes.node.isRequired,
  hasButton: PropTypes.bool,
};

export default PageDefault;
