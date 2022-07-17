import axios from "axios";
import React, { useEffect, useState } from "react";
import { api } from "../api";
import FooterLogo from "../statics/images/OBJECTS.png";

export default function Footer() {
  const [inputs, setInputs] = useState({});
  const [success, setsuccess] = useState(false);
  const [uploading, setuploading] = useState(false);
  const [error, seterror] = useState();
  const [showerror, setshowerror] = useState(false);

  useEffect(() => {
    setTimeout(function () {
      setsuccess(false);
    }, 3000);
  }, [success]);

  useEffect(() => {
    setTimeout(function () {
      setshowerror(false);
    }, 3000);
  }, [showerror]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setuploading(true);

    axios
      .post(api, {
        name: inputs.name,
        email: inputs.email,
        message: inputs.message,
      })
      .then((response) => {
        setuploading(false);
        setInputs({});
        seterror(null);
        console.log(response);
        setsuccess(true);
      })
      .catch((error) => {
        setuploading(false);
        console.log(error);
        seterror(error);
        setshowerror(true);
      });
  };
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <>
      <div className="font-bold text-3xl text-center mt-6">Get in Touch</div>
      <div className="flex justify-center flex-wrap mt-7">
        <div className="mr-5">Blogs</div>
        <div className="mr-5">FAQs</div>
        <div className="mr-5">Terms and Conditions</div>
        <div className="mr-5">Contact Us</div>
        <div className="mr-5">Privacy Policy</div>
      </div>

      <div className="flex flex-wrap w-[90%] mx-auto mt-10 justify-between">
        <img src={FooterLogo} alt="" srcset="" />

        <form
          // action="submit"
          class="mt-10 w-[100%] sm:w-[60%]"
          onSubmit={handleSubmit}
        >
          <div class="grid gap-6 sm:grid-cols-2">
            <div class="relative z-0">
              <input
                required
                type="text"
                name="name"
                value={inputs.name || ""}
                onChange={handleChange}
                class="drop-shadow-lg bg-white peer block w-full appearance-none rounded-md py-2.5 px-10 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder="Name"
              />
            </div>
            <div class="relative z-0">
              <input
                required
                type="text"
                name="email"
                value={inputs.email || ""}
                onChange={handleChange}
                class="drop-shadow-lg bg-white peer block w-full appearance-none py-2.5 px-10 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder="Email"
              />
            </div>
            <div class="relative z-0 col-span-2">
              <textarea
                required
                name="message"
                rows="5"
                value={inputs.message || ""}
                onChange={handleChange}
                class="drop-shadow-lg bg-white peer block w-full appearance-none  py-2.5 px-10 rounded-md text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder="Leave Your Message"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="bg-cyan-400 text-white px-6 mx-6 drop-shadow-xl hover:drop-shadow-2xl w-64 rounded-[50px] p-5"
              //   style={{ height: 50, width: 200, borderRadius: 100 }}
            >
              {uploading ? "Sending ..." : "Send"}
            </button>
          </div>
          {success && (
            <p className="text-green-400 text-center">Message Sent!</p>
          )}
          {showerror && <p className="text-rose-400 text-center">{error}</p>}
        </form>
      </div>
    </>
  );
}
