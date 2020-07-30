import React from 'react';

import { BannerContainer, ContentAreaContainer } from './styles';

export default function Banner({ image, title, description }) {
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
