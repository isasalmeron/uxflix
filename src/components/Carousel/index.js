import React from 'react';

import { VideoCardGroupContainer, Title } from './styles';
import VideoCard from './VideoCard';
import Slider, { SliderItem } from './Slider';

function Carousel({ ignoreFirstVideo, category, color }) {
  const categoryTitle = category.titulo;
  const videos = category.videos;

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
            <SliderItem key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={color}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carousel;
