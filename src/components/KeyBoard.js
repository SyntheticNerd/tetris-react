import React from "react";
import { KeyboardKey, KeyboardWrapper } from "./styles/KeyboardKey";
import { useState, useEffect, useCallback, useRef } from "react";

export default function KeyBoard({ gameStart, move, keyUp }) {
  const [timeoutId, setTimeoutId] = useState(0);
  const [keyCode, setKeyCode] = useState(40);
  const [clicking, setClicking] = useState(false);

  const repeat = useCallback(() => {
    move(keyCode);
    let t = setTimeout(repeat, 200);
    setTimeoutId(t);
  }, [keyCode]);

  function onMouseDown(code) {
    move(code);
    keyUp();
    // setKeyCode(code);
    // setClicking(true);
    // console.log(keyCode);
  }

  function onMouseUp() {
    // console.log("clear");
    // clearTimeout(timeoutId);
    // setTimeoutId(0);
    // setClicking(false);
    // keyUp();
  }

  //   btn.mousedown = function () {
  //     repeat();
  //   };

  //   btn.mouseup = function () {
  //     clearTimeout(t);
  //   };

  //   function holdit(btn, action, start, speedup) {
  //     let t;
  //     let repeat = function () {
  //       action();
  //       t = setTimeout(repeat, start);
  //       start = start / speedup;
  //     };

  //     btn.mousedown = function () {
  //       repeat();
  //     };

  //     btn.mouseup = function () {
  //       clearTimeout(t);
  //     };
  //   }

  useEffect(() => {
    if (gameStart) {
      if (clicking) {
        repeat();
      }
    }
  }, [clicking, gameStart, repeat]);

  return (
    <KeyboardWrapper>
      <KeyboardKey
        onMouseDown={() => onMouseDown(40)}
        onMouseUp={() => onMouseUp()}
      >
        {gameStart ? (
          <img src={process.env.PUBLIC_URL + "/icons/glowUpIcon.png"} alt='' />
        ) : (
          <img src={process.env.PUBLIC_URL + "/icons/UpIcon.png"} alt='' />
        )}
      </KeyboardKey>
      <KeyboardKey
        onMouseDown={() => onMouseDown(37)}
        onMouseUp={() => onMouseUp()}
      >
        {gameStart ? (
          <img
            src={process.env.PUBLIC_URL + "/icons/glowLeftIcon.png"}
            alt=''
          />
        ) : (
          <img src={process.env.PUBLIC_URL + "/icons/LeftIcon.png"} alt='' />
        )}
      </KeyboardKey>
      <KeyboardKey
        onMouseDown={() => onMouseDown(40)}
        onMouseUp={() => onMouseUp()}
      >
        {gameStart ? (
          <img
            src={process.env.PUBLIC_URL + "/icons/glowDownIcon.png"}
            alt=''
          />
        ) : (
          <img src={process.env.PUBLIC_URL + "/icons/DownIcon.png"} alt='' />
        )}
      </KeyboardKey>
      <KeyboardKey
        onMouseDown={() => onMouseDown(39)}
        onMouseUp={() => onMouseUp()}
      >
        {gameStart ? (
          <img
            src={process.env.PUBLIC_URL + "/icons/glowRightIcon.png"}
            alt=''
          />
        ) : (
          <img src={process.env.PUBLIC_URL + "/icons/RightIcon.png"} alt='' />
        )}
      </KeyboardKey>
      <KeyboardKey
        onMouseDown={() => onMouseDown(32)}
        onMouseUp={() => onMouseUp()}
      >
        {gameStart ? (
          <img
            src={process.env.PUBLIC_URL + "/icons/glowSpaceIcon.png"}
            alt=''
          />
        ) : (
          <img src={process.env.PUBLIC_URL + "/icons/SpaceIcon.png"} alt='' />
        )}
      </KeyboardKey>
    </KeyboardWrapper>
  );
}
