import styled from "styled-components";

export const SecondaryButton = styled.button`
  color: var(--white);
  background-color: var(--black);
  border: 1px solid var(--primary);
  box-sizing: border-box;
  cursor: pointer;
  padding: 8px 24px;
  margin-top: 16px;
  margin-bottom: 16px;
  font-style: normal;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  width: fit-content;
  transition: opacity .3s;

  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export const PrimaryButton = styled(SecondaryButton)`
  background-color: var(--primary);

  @media (min-width: 800px) {
    font-size: 24px;
    padding: 16px 32px;
  }
`;
