// import Data from "@data/word.json";
// import { useState } from "react";
// import Item from "@components/time";

// type Word = {
//   lang: string;
//   word: string;
// };

// const Checklist = () => {
//   const [allWords, setAllWords] = useState<Word[]>(Data);
//   const [thaiWords, setThaiWords] = useState<Word[]>([]);
//   const [engWords, setEngWords] = useState<Word[]>([]);
//   const handleButtonClick = (item:Word) => {
//       if (item.lang === "TH") {
//         setThaiWords((prev) => [...prev, item]);
//         setAllWords(allWords.filter((word) => word !== item));
//       } else if (item.lang === "EN") {
//         setEngWords([...engWords, item]);
//         setAllWords(allWords.filter((word) => word !== item));
//       }
//   };
//   const handleMoveBack = (item: Word) => {
//       if (item.lang === "TH") {
//         setThaiWords((prev) => prev.filter((word) => word !== item));
//       } else if (item.lang === "EN") {
//         setEngWords((prev) => prev.filter((word) => word !== item));
//       }
//       setAllWords((prev) => [...prev, item]);
//   };
//   return (
//     <div className="mt-7 flex justify-center ">
//       <div className="w-auto">
//         <p
//           id="headvocab"
//           className="text-center border-solid border-2 rounded-lg p-2"
//         >
//           คำศัพท์
//         </p>
//         <div
//           id="boxall"
//           className="flex flex-col bg-white shadow-md border-solid border-2  p-5 mt-5 rounded-lg w-80 h-90  items-center"
//         >
//           {allWords.map((item, index) => (
//             <Item  key={item.word} text={item.word} onClick={()=>handleButtonClick(item) }/>
//           ))}
//         </div>
//       </div>
//       <div className="ml-20 w-auto">
//         <p
//           id="headth"
//           className="text-center border-solid border-2  rounded-lg p-2"
//         >
//           ภาษาไทย
//         </p>
//         <div
//           id="boxth"
//           className="flex flex-col bg-white shadow-md border-solid border-2  p-5 mt-5 rounded-lg w-80 h-90 items-center"
//         >
//           {thaiWords.map((item, index) => (
//             <Item key={item.word} text={item.word} onClick={()=>handleMoveBack(item) } isLock />
//           ))}
//         </div>
//       </div>
//       <div className="ml-20 w-auto">
//         <p
//           id="headen"
//           className="text-center border-solid border-2  rounded-lg p-2"
//         >
//           ภาษาอังกฤษ
//         </p>
//         <div
//           id="boxen"
//           className="flex flex-col bg-white shadow-md border-solid border-2  p-5 mt-5 rounded-lg w-80 h-90 items-center"
//         >
//           {engWords.map((item, index) => (
//             <Item key={item.word}  text={item.word} onClick={()=>handleMoveBack(item)} isLock/>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checklist;
