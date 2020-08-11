import React from 'react';
import PropTypes from 'prop-types';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function NextArrow({ className, style, onClick }) {
  return (
    <ArrowForwardIosIcon
      className={className}
      style={{
        ...style,
        color: 'rgba(255, 255, 255, 0.7)',
        width: '50px',
      }}
      onClick={onClick}
    />
  );
}

NextArrow.defaultProps = {
  className: 'next-arrow',
  style: {},
  onClick: () => {},
};

NextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export default NextArrow;
