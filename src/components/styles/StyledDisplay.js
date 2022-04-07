import styled from "styled-components";

export const Score = styled.div`
  /* display: flex; */
  border: 2px solid red;
  flex-wrap: wrap;
`;

export const StyledDisplay = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border-left: 0px;
  /* min-height: 30px; */
  width: max(fit-content, 50%);
  border-radius: 0px 8px 8px 0px;
  color: ${(props) => (props.gameOver ? "red" : "#999")};
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  text-shadow: -2px 6px 0px rgba(0, 0, 0, 1);
`;
