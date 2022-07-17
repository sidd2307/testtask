import React, { useEffect, useState } from "react";
import axios from "axios";
import { api } from "../api";
import { toast } from "react-toastify";
import MessageCard from "./MessageCard";
import Loader from "./Loader";
export default function Messages() {
  const [data, setdata] = useState();
  const [loading, setloading] = useState(true);
  const [showerror, setshowerror] = useState(false);
  const [error, seterror] = useState();

  //   useEffect(() => {
  //     setTimeout(function () {
  //       setshowerror(false);
  //     }, 3000);
  //   }, [showerror]);

  useEffect(() => {
    const resultFunction = async () => {
      try {
        const res = await axios.get(api);
        setloading(false);
        setdata(res.data);
        setshowerror(false);
      } catch (error) {
        setloading(false);
        console.log(error);
        setshowerror(true);
        seterror(error.message);
      }
    };
    resultFunction();
  }, []);

  console.log("error: ", error);

  return (
    <>
      <div className="grid md:grid-cols-2 gap-4">
        {!loading &&
          data?.length !== 0 &&
          data?.map((item, key) => {
            return <MessageCard item={item} key={key} />;
          })}
      </div>

      {loading && <Loader loading={loading} />}

      {data?.length === 0 && !loading && (
        <div className="flex justify-center">
          <p className="text-center px-4 py-2 border border-cyan-400 rounded-md">
            No Messeages found.
          </p>
        </div>
      )}

      {showerror && (
        <div className="flex justify-center">
          <p className="text-center text-rose-400 px-4 py-2 border border-rose-600 rounded-md">
            {error}
          </p>
        </div>
      )}
    </>
  );
}
