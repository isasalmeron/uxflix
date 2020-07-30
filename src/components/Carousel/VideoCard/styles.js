import styled from 'styled-components';

const VideoCardContainer = styled.a`
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  border: 1px solid;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  transition: .4s;
 
  &:hover {
    border: 2px solid;
    width: 498px;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }

  @media (max-width: 800px) {
    width: 260px;
  }
`;

export default VideoCardContainer;
