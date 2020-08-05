import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ActionInfo from '@material-ui/icons/InfoOutlined';

import getYouTubeId from '../../utils';
import { PrimaryButton, InformationButton } from '../Button';
import {
  Banner, Wrapper, Content, StyledTypography, ButtonWrapper,
} from './styles';

function BannerMain({ video }) {
  const youTubeID = getYouTubeId(video.url);
  const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;
  const history = useHistory();

  const handleOnClickWatchButton = () => history.push(`/assistir/${youTubeID}`);

  return (
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
          >
            Mais informações
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
