import styled from 'styled-components';

export const Logo = styled.img`
  max-width: 90px;
  padding: 16px 0px;

  @media (max-width: 800px) {
    max-width: 90px;
  }
`;

export const AppBarWrapper = styled.nav`
  width: 100%;
  height: 74px;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  padding: 0px 56px;
  background: var(--black);
  border-bottom: 2px solid var(--primary);
  box-shadow: 1px -13px 20px 20px hsla(0, 0%, 100%, .281);

  @media (max-width: 800px) {
    padding: 0px 24px;
  }
`;
