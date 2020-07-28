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

  @media (max-width: 800px) {
    padding: 0px 24px;
  }
`;
