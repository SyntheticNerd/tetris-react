import React, { useState } from "react";
import { StyledStartBtn } from "./styles/StyledStartBtn";

const StartBtn = ({ callback, gameOver, gameStart }) => {
    const [hover, setHover] = useState(false);
  return (
    <StyledStartBtn gameOver={gameOver} hover={hover} onClick={callback} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
      {gameStart? "Reset": gameOver ? hover? "Reset" : "Game Over" : "Start Game"}
    </StyledStartBtn>
  );
};

export default StartBtn;
