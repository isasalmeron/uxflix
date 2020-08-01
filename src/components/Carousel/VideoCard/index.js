import React from 'react';
import PropTypes from 'prop-types';

import getYouTubeId from '../../../utils';
import VideoCardContainer from './styles';

function VideoCard({ videoTitle, videoURL, categoryColor }) {
  const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;

  return (
    <VideoCardContainer
      url={image}
      href={videoURL}
      target="_blank"
      style={{ borderColor: categoryColor }}
      title={videoTitle}
    />
  );
}

VideoCard.defaultProps = {
  videoTitle: '',
  categoryColor: 'red',
};

VideoCard.propTypes = {
  videoTitle: PropTypes.string,
  videoURL: PropTypes.string.isRequired,
  categoryColor: PropTypes.string,
};

export default VideoCard;
