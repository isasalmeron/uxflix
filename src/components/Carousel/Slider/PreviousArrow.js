import React from 'react';
import PropTypes from 'prop-types';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function PreviousArrow({ className, style, onClick }) {
  return (
    <ArrowBackIosIcon
      className={className}
      style={{
        ...style,
        color: 'rgba(255, 255, 255, 0.7)',
        width: '70px',
        paddingLeft: '20px',
      }}
      onClick={onClick}
    />
  );
}

PreviousArrow.defaultProps = {
  className: 'next-arrow',
  style: {},
  onClick: () => {},
};

PreviousArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export default PreviousArrow;
