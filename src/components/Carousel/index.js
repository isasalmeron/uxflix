import React from 'react';

import { VideoCardGroupContainer, Title, ExtraLink } from './styles';
import VideoCard from './VideoCard';
import Slider, { SliderItem } from './Slider';

function Carousel({ ignoreFirstVideo, category, color }) {
  const categoryTitle = category.titulo;
  const categoryExtraLink = category.link_extra;
  const videos = category.videos;

  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: color }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink && 
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}  
            </ExtraLink>
          }
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
