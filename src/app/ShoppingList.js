import React, { useState } from "react";

const ShoppingList = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (input.trim()) {
      setList((prev) => [...prev, { name: input, id: crypto.randomUUID() }]);
      setInput("");
    }
  }

  function handleRemove(id) {
    setList((prev) => {
      const filtered = prev.filter((item) => item.id !== id);
      return filtered;
    });
  }
  console.log(list);
  return (
    <div className="bg-white w-[90%] md:w-2/4  max-w-[800px] p-8 text-center grid place-items-center gap-4 rounded-xl shadow-2xl border-[1px] border-green-300">
      {/* <h1 className="font-extrabold text-2xl font-serif px-3 py-2 rounded-md text-white m-4 bg-[#FC9A8B]">
        Shopping List
      </h1>
      <h1 className="font-extrabold text-2xl font-serif px-3 py-2 rounded-md text-white m-4 bg-[#7CF8BA]">
        Shopping List
      </h1>
      <h1 className="font-extrabold text-2xl font-serif px-3 py-2 rounded-md text-white m-4 bg-[#FD93ED]">
        Shopping List
      </h1> */}
      <h1 className="font-extrabold text-2xl font-serif px-3 py-2 rounded-md text-white m-4 bg-[#C1AEFD]">
        Shopping List
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap gap-4 w-full justify-center"
      >
        <input
          className="border-2 py-1 pl-4"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your item"
        />
        <button
          type="submit"
          className="px-2 py-1 bg-lime-500 hover:bg-lime-500/85 active:scale-x-110 active:scale-y-90 transition-transform duration-[5ms] shadow-md rounded-md font-semibold text-white"
        >
          Add
        </button>
      </form>
      <ul className="w-full mt-4 font-serif">
        {list.map((item) => (
          <li key={item.id} className="flex justify-between mt-4 items-center">
            <span className=" mr-4 break-words max-w-[calc(100%-8rem)]">
              {item.name}
            </span>
            <button
              onClick={() => handleRemove(item.id)}
              className="px-2 py-1 bg-lime-500 hover:bg-lime-500/85 active:scale-x-110 active:scale-y-90 transition-transform duration-[5ms] shadow-md rounded-md font-semibold text-white"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
// className="flex justify-between mt-4"
export default ShoppingList;
