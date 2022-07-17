import React from "react";

export default function Card() {
  return (
    <div className=" rounded overflow-hidden border w-full bg-white mb-10">
      <div className="w-full flex justify-between p-3">
        <span className="px-2 hover:bg-gray-300 cursor-pointer rounded">
          <i className="fas fa-ellipsis-h pt-2 text-lg"></i>
        </span>
      </div>
      <img
        className="w-full bg-cover"
        src="https://3.bp.blogspot.com/-Chu20FDi9Ek/WoOD-ehQ29I/AAAAAAAAK7U/mc4CAiTYOY8VzOFzBKdR52aLRiyjqu0MwCLcBGAs/s1600/DSC04596%2B%25282%2529.JPG"
      />
      <div className="px-3 pb-2">
        <div className="pt-1">
          <div className="mb-2 text-sm">
            <span className="mr-2 text-blue-400 font-semibold">
              DocTutorials - Your go to destination for tutorials
            </span>
          </div>
        </div>
        <div className="text-sm mb-2 text-gray-400 cursor-pointer font-medium">
          Posted Date - 23-07-2001
        </div>
      </div>
    </div>
  );
}
