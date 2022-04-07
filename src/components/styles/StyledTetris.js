import styled from "styled-components";

export const StyledTetrisWrapper = styled.div`
  --gold-gradient: linear-gradient(
    #bf953f -65%,
    #fcf6ba -26.33%,
    #b38728 20.08%,
    #fbf5b7 63.91%,
    #aa771c 100%
  );
`;

export const StyledTetris = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: min(40px, 2vw);
  margin: auto;
  justify-content: center;
  aside {
    display: block;
    display: grid;
    /* grid-template-columns: 1fr 1fr; */
    grid-template-rows: repeat(4, minmax(30px, auto));
    gap: 4px 0px;
    margin-top: 0px;
    margin-left: 16px;
    /* & > div:nth-child(1) {
      grid-column: 1 / 2;
    }
    & > div:nth-child(2) {
      grid-column: 1 / 2;
    }
    & > div:nth-child(3) {
      grid-column: 1 / 2;
    }
    & > div:nth-child(4) {
      grid-column: 2 / 3;
      grid-row: 1 / 4;
    }
    & > div:nth-child(5) {
      grid-column: 2 / 3;
      margin: auto;
    }
    & > button {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    } */
    @media (max-width: 437px) {
      grid-template-columns: 1.1fr 1fr;
      margin-top: 16px;
      margin-left: 0px;
      & > div:nth-child(2) {
        grid-column: 1 / 2;
      }
      & > div:nth-child(3) {
        grid-column: 1 / 2;
      }
      & > div:nth-child(4) {
        grid-column: 1 / 2;
      }
      & > div:nth-child(5) {
        grid-column: 2 / 3;
        grid-row: 1 / 5;
      }
      & > div:nth-child(6) {
        grid-column: 2 / 3;
        margin: auto;
      }
      & > button {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
      }
    }
  }
`;
