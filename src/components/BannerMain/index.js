import React from 'react';
import PropTypes from 'prop-types';

import getYouTubeId from '../../utils';
import {
  Banner, Wrapper, Content, StyledTypography,
} from './styles';

function BannerMain({ videoTitle, videoDescription, url }) {
  const youTubeID = getYouTubeId(url);
  const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;

  return (
    <Banner backgroundImage={bgUrl}>
      <Content>
        <Wrapper>
          <StyledTypography
            fontSize="48px"
            mobileFontSize="32px"
          >
            {videoTitle}
          </StyledTypography>
          <StyledTypography
            fontSize="24px"
            mobileFontSize="16px"
            isDescription
          >
            {videoDescription}
          </StyledTypography>
        </Wrapper>
      </Content>
    </Banner>
  );
}

BannerMain.defaultProps = {
  videoTitle: '',
  videoDescription: '',
};

BannerMain.propTypes = {
  videoTitle: PropTypes.string,
  videoDescription: PropTypes.string,
  url: PropTypes.string.isRequired,
};

export default BannerMain;
