import React from "react";
import Hero from "../Hero/Hero";
import wave from "../../assets/wave.svg";

const Home = () => {
  return (
    <div className="flex relative flex-col justify-center items-center min-h-[calc(100vh-134px)]">
      <Hero />
      <img className="absolute bottom-0 w-full" src={wave} alt="" />
     </div>
  );
};

export default Home;
