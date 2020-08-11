import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ActionInfo from '@material-ui/icons/InfoOutlined';

import getYouTubeId from '../../utils';
import VideoInformationDialog from '../Dialogs/VideoInformationDialog';
import { PrimaryButton, InformationButton } from '../Buttons';
import {
  Banner, Wrapper, Content, StyledTypography, ButtonWrapper,
} from './styles';

function BannerMain({ video }) {
  const [openDialog, setOpenDialog] = useState(false);

  const history = useHistory();
  const youTubeID = getYouTubeId(video.url);
  const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;
  const image = `https://img.youtube.com/vi/${youTubeID}/hqdefault.jpg`;

  const handleOnClickWatchButton = () => history.push(`/assistir/${youTubeID}`);
  const handleOnClickMoreInfoButton = () => setOpenDialog(true);
  const handleOnCloseDialog = () => setOpenDialog(false);

  return (
    <>
      <Banner backgroundImage={bgUrl}>
        <Content>
          <Wrapper>
            <StyledTypography
              fontSize="48px"
              mobilefontsize="32px"
            >
              {video.title}
            </StyledTypography>
            <InformationButton
              startIcon={<ActionInfo />}
              onClick={handleOnClickMoreInfoButton}
            >
              Informações
            </InformationButton>
            <ButtonWrapper>
              <PrimaryButton
                onClick={handleOnClickWatchButton}
                startIcon={<PlayArrowIcon />}
              >
                Assistir
              </PrimaryButton>
            </ButtonWrapper>
          </Wrapper>
        </Content>
      </Banner>
      <VideoInformationDialog
        open={openDialog}
        onClose={handleOnCloseDialog}
        backgroundImage={image}
        videoTitle={video.title}
        videoDescription={video.description}
        onClickButton={handleOnClickWatchButton}
      />
    </>
  );
}

BannerMain.propTypes = {
  video: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default BannerMain;
