import styled from "styled-components";

export const StyledStartBtn = styled.button`
  box-sizing: border-box;
  padding: 8px;
  border: 1px solid;
  border-image: var(--gold-gradient) 1;
  color: ${({ gameOver, hover }) =>
    gameOver && !hover ? "red" : "rgba(255, 255, 255, 0.6)"};
  background: #1e1e1e;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: min(0.8rem, 3.5vw);
  outline: none;
  cursor: pointer;
  /* margin-left: 8px; */
  width: 80%;
  margin: auto;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.8);
  transition: transform 0.3s;
  text-shadow: 0px 4px 2px rgba(0, 0, 0, 1);

  &:hover {
    transform: scale(1.05);
    color: rgba(147, 255, 97, 0.8);
  }
`;
