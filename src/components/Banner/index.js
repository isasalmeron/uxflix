import React from 'react';
import PropTypes from 'prop-types';

import { BannerContainer, ContentAreaContainer } from './styles';

function Banner({ image, title, description }) {
  return (
    <BannerContainer backgroundImage={image}>
      <ContentAreaContainer>
        <ContentAreaContainer.Item>
          <ContentAreaContainer.Title>
            {title}
          </ContentAreaContainer.Title>
          <ContentAreaContainer.Description>
            {description}
          </ContentAreaContainer.Description>
        </ContentAreaContainer.Item>
      </ContentAreaContainer>
    </BannerContainer>
  );
}

Banner.defaultProps = {
  title: '',
  description: '',
};

Banner.propTypes = {
  image: PropTypes.node.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Banner;
