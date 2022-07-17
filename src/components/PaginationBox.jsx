import React from "react";

export default function PaginationBox() {
  return (
    <div className="flex justify-between w-[90%] mx-auto items-center">
      <button className="bg-cyan-400 text-white p-4 mx-6 drop-shadow-xl hover:drop-shadow-2xl rounded-md">
        Previous
      </button>
      <div className="w-100 flex text-sm justify-evenly items-center">
        <div className="border-2 border-inherit px-3 py-1.5 rounded-md bg-cyan-400 cursor-pointer mr-2">
          1
        </div>
        <div className="border-2 border-inherit px-3 py-1.5 rounded-md cursor-pointer mr-2">
          2
        </div>
        <div className="p-3 hidden rounded-md md:flex items-center gap-2 cursor-pointer mr-2">
          <span className="h-1 w-1 bg-gray-700 rounded-full inline-block"></span>
          <span className="h-1 w-1 bg-gray-700 rounded-full inline-block"></span>
          <span className="h-1 w-1 bg-gray-700 rounded-full inline-block"></span>
        </div>
        <div className="border-2 hidden md:block border-inherit px-3 py-1.5 rounded-md cursor-pointer mr-2">
          10
        </div>
      </div>
      <button className="bg-cyan-500 text-white p-4 mx-6 drop-shadow-xl hover:drop-shadow-2xl rounded-md">
        Next
      </button>
    </div>
  );
}
