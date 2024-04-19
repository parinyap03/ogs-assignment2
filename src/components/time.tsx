import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Word = {
  text: string;
  onClick: () => void;
  isLock?: boolean;
};

const Time = ({ text, onClick, isLock = false }: Word) => {
  const [lockStates, setLockStates] = useState<boolean>(false);
  const timer = useRef<NodeJS.Timeout>();
  useEffect(() => {
    if (isLock) {
      timer.current = setTimeout(() => {
        console.log("timeout", text);
        onClick();
      }, 5000);
    }
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleLock = () => {
    setLockStates(!lockStates);
    if (!lockStates) {
      clearTimeout(timer.current);
    } else {
      timer.current = setTimeout(() => {
        onClick();
      }, 5000);
    }
  };

  return (
  
      <div
        id={isLock ? "engvocab" : ""}
        className={
          isLock? `flex border-solid border-2  rounded-lg p-1 mt-3 w-48 m-2`
            : ""
        }
      >
        <button
          id={!isLock ? "allvocab" : ""}
          className={
            !isLock
              ? " border-solid border-2  rounded-lg p-1 mt-3 w-48 m-2"
              : "w-full"
          }
          style={lockStates ? { cursor: "not-allowed" } : {}}
          onClick={() => {
            if (!lockStates) {
              onClick();
            }
          }}
        >
          <p className="m-auto w-20">{text}</p>
        </button>
        {isLock && (
          <button className="w-6" onClick={handleLock}>
            {lockStates ? <ImageLock /> : <ImageUnlock />}
          </button>
        )}
      </div>
  );
};

function ImageLock() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
      />
    </svg>
  );
}

function ImageUnlock() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
      />
    </svg>
  );
}

export default Time;
