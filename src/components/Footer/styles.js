import styled from 'styled-components';

export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding: 0px 56px;
  color: var(--white);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;

  @media (max-width: 800px) {
    padding: 0px 24px;
  }
`;

export const TextLink = styled.a`
  color: var(--primary);
  text-decoration: none;
`;

export const ImgWrapper = styled.img`
  max-width: 16px;
`;
