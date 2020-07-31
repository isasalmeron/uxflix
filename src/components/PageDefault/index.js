import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AppBar from '../AppBar';
import Footer from '../Footer';

const Wrapper = styled.div`
  flex: 1;
`;

function PageDefault({ children, hasButton }) {
  return (
    <>
      <AppBar hasButton={hasButton} />
      <Wrapper>
        {children}
      </Wrapper>
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
