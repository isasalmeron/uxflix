import styled from "styled-components";

const Button = styled.button`
  color: var(--white);
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
  transition: opacity .3s;

  &:hover,
  &:focus {
    opacity: .5;
  }

  @media (max-width: 800px) {
    text-align: center;
    padding: 8px;
  }
`;

export default Button;
