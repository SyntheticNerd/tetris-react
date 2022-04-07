import styled from "styled-components";


export const StyledTetrisWrapper = styled.div`
  /* background-color: #121212; */
  --gold-gradient: linear-gradient(
    #bf953f -65%,
    #fcf6ba -26.33%,
    #b38728 20.08%,
    #fbf5b7 63.91%,
    #aa771c 100%
  );
  border: 2px solid red;
`;

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 40px;
  margin: 0 auto;
  border: 2px solid green;
  justify-content: center;
  aside {
      display: block;
      display: flex;
      flex-direction: column;
  }
`;
