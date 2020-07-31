import React from 'react';
import PropTypes from 'prop-types';

import { VideoCardGroupContainer, Title, Item } from './styles';
import VideoCard from './VideoCard';
import Slider from './Slider';

function Carousel({ ignoreFirstVideo, category }) {
  return (
    <VideoCardGroupContainer>
      {category.name && (
        <>
          <Title style={{ backgroundColor: category.color }}>
            {category.name}
          </Title>
        </>
      )}
      <Slider>
        {category.videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <Item key={video.title}>
              <VideoCard
                videoTitle={video.title}
                videoURL={video.url}
                categoryColor={category.color}
              />
            </Item>
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
    videos: PropTypes.array,
    color: PropTypes.string,
  }).isRequired,
};

export default Carousel;
