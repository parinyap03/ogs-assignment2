import Data from "@data/word.json";
import React, { useState, useEffect, useRef } from 'react';

interface word {
    lang: string;
    word: string;
} 
const Checklist = () => {
  const [allWords, setAllWords] = useState<string[]>([]);
  const [thaiWords, setThaiWords] = useState<string[]>([]);
  const [engWords, setEngWords] = useState<string[]>([]);
  const [lockStates, setLockStates] = useState<{ [key: string]: boolean }>({});

  const clickedButtonsRef = useRef<string[]>([]);
  
  useEffect(() => {
    const words = Data.map((item) => item.word);
    setAllWords(words);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      moveAllButtonsBack();
    }, 3000);

    return () => clearTimeout(timer);
  }, [clickedButtonsRef.current]);
  

  const moveAllButtonsBack = () => {
    clickedButtonsRef.current.forEach((button) => {
      handleMoveBack(button);
    });
    clickedButtonsRef.current = [];
  };

  const handleMoveBack = (item: string) => {
    const word = Data.find((data) => data.word === item);
    if (word) {
      if (word.lang === "TH") {
        const updatedThaiWords = thaiWords.filter((word) => word !== item);
        setThaiWords(updatedThaiWords);
      } else if (word.lang === "EN") {
        const updatedEngWords = engWords.filter((word) => word !== item);
        setEngWords(updatedEngWords);
      }
      const updatedAllWords = [...allWords, item];
      setAllWords(updatedAllWords);
    }
  };

  const handleButtonClick = (item: string) => {
    clickedButtonsRef.current.push(item);
    const word = Data.find((data) => data.word === item);
    if (word) {
      if (word.lang === "TH") {
        const updatedThaiWords = [...thaiWords, item];
        setThaiWords(updatedThaiWords);
      } else if (word.lang === "EN") {
        const updatedEngWords = [...engWords, item];
        setEngWords(updatedEngWords);
      }
      const updatedAllWords = allWords.filter((word) => word !== item);
      setAllWords(updatedAllWords);
    }
  };



  const toggleLock = (item: string) => {
    setLockStates((prevLockStates) => ({
      ...prevLockStates,
      [item]: !prevLockStates[item],
    }));
  };

  return (
    <div className="mt-9 flex justify-center ">
      <div className="w-auto">
        <p className="text-center border-solid border-2 border-sky-500 rounded-lg p-2">
          คำศัพท์
        </p>
        <div
          id="boxall"
          className="flex flex-col bg-white shadow-md border-solid border-2 border-sky-500 p-5 mt-5 rounded-lg w-80 h-90  items-center"
        >
          {allWords.map((item, index) => (
            <button
              onClick={() => {
                handleButtonClick(item);
              }}
              key={index}
              className=" border-solid border-2 border-sky-500 rounded-lg p-1 mt-3 w-48 m-2"
            >
              <p className="m-auto">{item}</p>
            </button>
          ))}
        </div>
      </div>
      <div className="ml-20 w-auto">
        <p className="text-center border-solid border-2 border-sky-500 rounded-lg p-2">
          ภาษาไทย
        </p>
        <div
          id="boxth"
          className="flex flex-col bg-white shadow-md border-solid border-2 border-sky-500 p-5 mt-5 rounded-lg w-80 h-90 items-center"
        >
          {thaiWords.map((item, index) => (
            <div
              key={index}
              className={`flex border-solid border-2 border-sky-500 rounded-lg p-1 mt-3 w-48 m-2`}
            >
              <button
                onClick={() => {
                  if (!lockStates[item]) {
                    handleMoveBack(item);
                  }
                }}
                disabled={lockStates[item]}
                className={`${
                  lockStates[item] ? "cursor-not-allowed" : ""
                } w-full`}
              >
                <p className="m-auto w-10">{item}</p>
              </button>
              <button onClick={() => toggleLock(item)} className="w-6">
                {lockStates[item] ? <ImageLock /> : <ImageUnlock />}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="ml-20 w-auto">
        <p className="text-center border-solid border-2 border-sky-500 rounded-lg p-2">
          ภาษาอังกฤษ
        </p>
        <div
          id="boxen"
          className="flex flex-col bg-white shadow-md border-solid border-2 border-sky-500 p-5 mt-5 rounded-lg w-80 h-90 items-center"
        >
          {engWords.map((item, index) => (
            <div
              key={index}
              className={`flex border-solid border-2 border-sky-500 rounded-lg p-1 mt-3 w-48 m-2`}
            >
              <button
                onClick={() => {
                  if (!lockStates[item]) {
                    handleMoveBack(item);
                  }
                }}
                disabled={lockStates[item]}
                className={`${
                  lockStates[item] ? "cursor-not-allowed" : ""
                } w-full`}
              >
                <p className="m-auto w-10">{item}</p>
              </button>
              <button onClick={() => toggleLock(item)} className="w-6">
                {lockStates[item] ? <ImageLock /> : <ImageUnlock />}
              </button>
            </div>
          ))}
        </div>
      </div>
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
      className="w-6 h-6 ml-auto mr-2"
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

export default Checklist;
