import React from "react";
import { KeyboardKey, KeyboardWrapper } from "./styles/KeyboardKey";
import { useState, useEffect, useCallback, useRef } from "react";

export default function KeyBoard({ gameStart, move, keyUp, setDropTime }) {
  const [timeoutId, setTimeoutId] = useState(0);
  const [keyCode, setKeyCode] = useState(40);
  const [clicking, setClicking] = useState(false);
  const [holding, setHolding] = useState(false);
  const [moveNum, setMoveNum] = useState(0);
  const [touching, setTouching] = useState(false);
  // const [horiz, setHoriz] = useState(0);

  // const repeat = useCallback(() => {
  //   move(keyCode);
  //   let t = setTimeout(repeat, 200);
  //   setTimeoutId(t);
  // }, [keyCode]);

  function onMouseDown(code) {
    if (!touching) {
      setKeyCode(code);
      setClicking(true);
      move(code);
    }
  }

  function onMouseUp() {
    setClicking(false);
    setHolding(false);
    setTouching(false);
    keyUp();
    clearTimeout(timeoutId);
    setTimeoutId(0);
  }

  useEffect(() => {
    console.log(gameStart);
    if (gameStart) {
      clearTimeout(timeoutId);
      setTimeoutId(0);
      if (clicking) {
        if (keyCode === 40) {
          let t = setTimeout(() => {
            console.log("holding");
            setDropTime(30);
          }, 500);
          setTimeoutId(t);
        } else if (keyCode === 39 || keyCode === 37) {
          if (!holding) {
            let t = setTimeout(() => {
              setHolding(true);
            }, 500);
            setTimeoutId(t);
          } else if (holding) {
            move(keyCode);
            let t = setTimeout(() => {
              console.log("holding");
              setMoveNum(moveNum + 1);
            }, 100);
            setTimeoutId(t);
          } else {
            console.log("doing nothing?");
            return;
          }
        }
      }
    }
  }, [clicking, moveNum, holding, gameStart]);

  return (
    <KeyboardWrapper>
      <KeyboardKey
        onTouchStart={() => {
          setTouching(true);
          onMouseDown(40);
        }}
        onMouseDown={() => !touching && onMouseDown(40)}
        onMouseUp={() => onMouseUp()}
        onMouseLeave={() => onMouseUp()}
        onMouseOut={() => onMouseUp()}
        onTouchEnd={() => onMouseUp()}
        onTouchCancel={() => onMouseUp()}
      >
        {gameStart ? (
          <img src={process.env.PUBLIC_URL + "/icons/glowUpIcon.png"} alt='' />
        ) : (
          <img src={process.env.PUBLIC_URL + "/icons/UpIcon.png"} alt='' />
        )}
      </KeyboardKey>
      <KeyboardKey
        onTouchStart={() => {
          setTouching(true);
          onMouseDown(37);
        }}
        onMouseDown={() => !touching && onMouseDown(37)}
        onMouseUp={() => onMouseUp()}
        onMouseLeave={() => onMouseUp()}
        onMouseOut={() => onMouseUp()}
        onTouchEnd={() => onMouseUp()}
        onTouchCancel={() => onMouseUp()}
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
        onTouchStart={() => {
          setTouching(true);
          onMouseDown(40);
        }}
        onMouseDown={() => !touching && onMouseDown(40)}
        onMouseUp={() => onMouseUp()}
        onMouseLeave={() => onMouseUp()}
        onMouseOut={() => onMouseUp()}
        onTouchEnd={() => onMouseUp()}
        onTouchCancel={() => onMouseUp()}
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
        onTouchStart={() => {
          setTouching(true);
          onMouseDown(39);
        }}
        onMouseDown={() => !touching && onMouseDown(39)}
        onMouseUp={() => onMouseUp()}
        onMouseLeave={() => onMouseUp()}
        onMouseOut={() => onMouseUp()}
        onTouchEnd={() => onMouseUp()}
        onTouchCancel={() => onMouseUp()}
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
        onTouchStart={() => {
          setTouching(true);
          onMouseDown(32);
        }}
        onMouseDown={() => onMouseDown(32)}
        onMouseUp={() => onMouseUp()}
        onMouseLeave={() => onMouseUp()}
        onMouseOut={() => onMouseUp()}
        onTouchEnd={() => onMouseUp()}
        onTouchCancel={() => onMouseUp()}
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
