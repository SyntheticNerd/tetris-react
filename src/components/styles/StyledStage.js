import styled from "styled-components";

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(${props => props.height}, min(20px, 4.2vh));
  grid-template-columns: repeat(${props=>props.width}, min(20px, 4.2vh));
  /* height: 800px; */
  /* width: 400px; */
  grid-gap: 1px;
  border: 2px solid #1e1e1e;
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.8);
  /* width: 60vw; */
  /* max-width: 25vw; */
  background: #111;
`;
// calc(min(60vw, 50vh) / ${(props) => props.width}
