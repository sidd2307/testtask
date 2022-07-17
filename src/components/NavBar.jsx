import React from "react";
import Logo from "../statics/images/Logo (1).png";
import Instagram from "../statics/images/instagram.png";
import Facebook from "../statics/images/facebook.png";
import Youtube from "../statics/images/Mask Group 7.png";
import Telegram from "../statics/images/telegram (1).png";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <div className="px-10 flex md:justify-between flex-col md:flex-row items-center sticky top-0 z-[99999] bg-white shadow-md mb-5">
      <div
        className="flex justify-center cursor-pointer md:justify-start w-full md:w-auto"
        onClick={() => {
          navigate("/");
        }}
      >
        <img
          className="w-25 h-20 text-center sm:text-start"
          src={Logo}
          alt=""
        />
      </div>
      <div className="flex justify-evenly my-2 md:w-1/2 flex-wrap w-full">
        <img
          src={Instagram}
          alt=""
          srcset=""
          className="p-2 m-1 w-10 h-10 cursor-pointer drop-shadow-xl hover:drop-shadow-2xl"
        />
        <img
          src={Facebook}
          alt=""
          srcset=""
          className="p-2 m-1 w-10 h-10 cursor-pointer drop-shadow-xl hover:drop-shadow-2xl"
        />
        <img
          src={Youtube}
          alt=""
          srcset=""
          className="p-2 m-1 w-10 h-10 cursor-pointer drop-shadow-xl hover:drop-shadow-2xl"
        />
        <img
          src={Telegram}
          alt=""
          srcset=""
          className="p-2 m-1 w-10 h-10 cursor-pointer drop-shadow-xl hover:drop-shadow-2xl"
        />

        <button
          className="bg-cyan-400 text-white px-6 mx-6 drop-shadow-xl hover:drop-shadow-2xl"
          style={{ height: 50, width: 200, borderRadius: 100 }}
          onClick={() => {
            navigate("/messages");
          }}
        >
          Messages
        </button>
      </div>
    </div>
  );
}
