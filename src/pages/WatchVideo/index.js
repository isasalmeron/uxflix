import React from 'react';
import { useParams } from 'react-router-dom';

import PageDefault from '../../components/PageDefault';
import VideoIframeResponsive from '../../components/VideoIframeResponsive';

function WatchVideo() {
  const { videoId } = useParams();

  return (
    <PageDefault>
      <VideoIframeResponsive youtubeID={videoId} />
    </PageDefault>
  );
}

export default WatchVideo;
