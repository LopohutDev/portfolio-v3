import React from "react";

const SideNumbers = () => {
  const arrnum: number[] = [];
  for (let i = 0; i < 100; i++) {
    arrnum.push(i);
  }

  return (
    <div className="fixed w-10 h-screen px-3 py-3 overflow-hidden text-xl text-right text-gray-500 border-r border-gray-600">
      {arrnum.map((val, i) => (
        <p key={i}>{val}</p>
      ))}
    </div>
  );
};

export default SideNumbers;
