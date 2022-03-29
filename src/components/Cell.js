import React from "react";
import { StyledCell } from "./styles/StyledCell";
import { TETROMINOS } from "../tetrominos";

const Cell = ({ type }) => {
  return <StyledCell type={type} color={TETROMINOS[type].color} />;
};

export default React.memo(Cell);
//React Memo will make it so only the cells that change with the tetro change instead of the whole stage.
