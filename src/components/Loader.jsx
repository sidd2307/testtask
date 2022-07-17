import React from "react";
import { FadeLoader } from "react-spinners";

export default function Loader({ loading = false }) {
  return (
    <div className="w-full h-64 flex flex-col items-center justify-center space-y-3 bg-transparent">
      <FadeLoader
        color="#22D3EE"
        loading={loading}
        height={12}
        width={10}
        radius={3}
      />
      <span>Loading</span>
    </div>
  );
}
