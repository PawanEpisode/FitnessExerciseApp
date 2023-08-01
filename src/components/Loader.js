import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div
      className="loader"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: '37px',
        padding: '20px'
      }}
    >
      <InfinitySpin />
    </div>
  );
};

export default Loader;
