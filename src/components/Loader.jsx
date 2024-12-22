import { Html } from "@react-three/drei";
import React from "react";

const Loader = () => {
    return (
      //wrap in html so it knows that it is not in 3d
    <Html>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="w-[10vw] h-[10vw] rounded-full font-bold">Loading...</div>
      </div>
    </Html>
  );
};

export default Loader;
