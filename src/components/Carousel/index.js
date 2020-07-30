import React from 'react';
import PropTypes from 'prop-types';

import { VideoCardGroupContainer, Title, Item } from './styles';
import VideoCard from './VideoCard';
import Slider from './Slider';

function Carousel({ ignoreFirstVideo, category, color }) {
  const categoryTitle = category.titulo;
  const { videos } = category;

  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: color }}>
            {categoryTitle}
          </Title>
        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <Item key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={color}
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
    titulo: PropTypes.string,
    videos: PropTypes.array,
  }).isRequired,
  color: PropTypes.string.isRequired,
};

export default Carousel;
