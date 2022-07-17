import React from "react";
import Card from "./Card";

export default function Cards() {
  return (
    <div
      //   style={{
      //     width: "90%",
      //     marginLeft: "auto",
      //     marginRight: "auto",
      //     marginTop: 50,
      //     justifyContent: "space-between",
      //     display: "flex",
      //     flexWrap: "wrap",
      //   }}
      className="w-[90%] mx-auto grid sm:grid-cols-2 gap-x-4 gap-y-6"
    >
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
