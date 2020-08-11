import React from 'react';
import PropTypes from 'prop-types';

import VideoCard from './VideoCard';
import Slider from './Slider';
import { VideoCardGroupContainer, Title } from './styles';

function Carousel({ ignoreFirstVideo, category }) {
  return (
    <VideoCardGroupContainer>
      <Title bgcolor={category.color}>
        {category.name}
      </Title>
      <Slider>
        {category.videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <VideoCard
              key={video.title}
              videoTitle={video.title}
              videoURL={video.url}
              videoDescription={video.description}
              categoryColor={category.color}
            />
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

Carousel.defaultProps = {
  ignoreFirstVideo: false,
};

Carousel.propTypes = {
  ignoreFirstVideo: PropTypes.bool,
  category: PropTypes.shape({
    name: PropTypes.string,
    videos: PropTypes.arrayOf(PropTypes.object),
    color: PropTypes.string,
  }).isRequired,
};

export default Carousel;
