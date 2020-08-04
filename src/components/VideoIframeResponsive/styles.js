import styled from 'styled-components';

import Box from '@material-ui/core/Box';

export const VideoContainer = styled(Box)`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: fill-available;
  display: flow-root;
`;

export const ResponsiveIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;
