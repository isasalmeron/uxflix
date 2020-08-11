import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ActionInfo from '@material-ui/icons/InfoOutlined';
import Box from '@material-ui/core/Box';

import getYouTubeId from '../../../utils';
import VideoInformationDialog from '../../Dialogs/VideoInformationDialog';
import { VideoCardWrapper, MoreInfoButton, WatchButton } from './styles';

function VideoCard({
  videoTitle, videoURL, videoDescription, categoryColor,
}) {
  const [openDialog, setOpenDialog] = useState(false);
  const history = useHistory();
  const youTubeID = getYouTubeId(videoURL);
  const image = `https://img.youtube.com/vi/${youTubeID}/hqdefault.jpg`;

  const handleOnClickWatchButton = () => history.push(`/assistir/${youTubeID}`);
  const handleOnClickMoreInfoButton = () => setOpenDialog(true);
  const handleOnCloseDialog = () => setOpenDialog(false);

  return (
    <>
      <VideoCardWrapper
        url={image}
        style={{ borderColor: categoryColor }}
      >
        <MoreInfoButton
          startIcon={<ActionInfo />}
          onClick={handleOnClickMoreInfoButton}
        >
          Informações
        </MoreInfoButton>
        <Box ml={2}>
          <WatchButton
            onClick={handleOnClickWatchButton}
            startIcon={<PlayArrowIcon />}
          >
            Assistir
          </WatchButton>
        </Box>
      </VideoCardWrapper>
      <VideoInformationDialog
        open={openDialog}
        onClose={handleOnCloseDialog}
        backgroundImage={image}
        videoTitle={videoTitle}
        videoDescription={videoDescription}
        onClickButton={handleOnClickWatchButton}
      />
    </>
  );
}

VideoCard.propTypes = {
  videoTitle: PropTypes.string.isRequired,
  videoURL: PropTypes.string.isRequired,
  videoDescription: PropTypes.string.isRequired,
  categoryColor: PropTypes.string.isRequired,
};

export default VideoCard;
