import styled from "styled-components";

export const StyledStartBtn = styled.button`
  box-sizing: border-box;
  padding: 8px;
  border: 1px solid;
  border-image:  var(--gold-gradient) 1;
  color: rgba(255, 255, 255, 0.6);
  background: #1e1e1e;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  outline: none;
  cursor: pointer;
  margin-left: 8px;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.8);
  transition: transform 0.3s;
  &:hover{
    transform: scale(1.05);
    color: rgba(147, 255, 97, 0.8);
;
  }
`;
