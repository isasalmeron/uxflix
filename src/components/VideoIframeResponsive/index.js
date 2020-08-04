import React from 'react';
import PropTypes from 'prop-types';

import { VideoContainer, ResponsiveIframe } from './styles';

function VideoIframeResponsive({ youtubeID }) {
  return (
    <VideoContainer>
      <ResponsiveIframe
        src={`https://www.youtube.com/embed/${youtubeID}?autoplay=1&mute=0`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </VideoContainer>
  );
}

VideoIframeResponsive.propTypes = {
  youtubeID: PropTypes.string.isRequired,
};

export default VideoIframeResponsive;
