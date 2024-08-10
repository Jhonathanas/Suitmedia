import React, { useEffect, useState } from "react";
import List from "../components/List";
const Ideas = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="relative mt-16 h-80 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            transform: `translateY(${offsetY * 0.5}px)`, 
            transition: "transform 0.1s ease-out", 
          }}
        >
          <img
            className="object-cover w-full h-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNx_zkQMIjxCNk2bjWCxI5G1lX2OL_ZsxnYA&s"
            alt="Menu Image"
          />
          <svg
            className="absolute bottom-0 w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,320L1440,128L1440,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div
          className="absolute inset-0 top-20 text-center text-white"
          style={{
            transform: `translateY(${offsetY * 0.2}px)`, // Parallax effect for text
            transition: "transform 0.1s ease-out", // Smooth scrolling effect
          }}
        >
          <h1 className="text-6xl font-bold">IDEAS</h1>
          <p className="text-center mt-4 px-8">
            Where all our great things begin
          </p>
        </div>
      </div>
      <div className="mt-10">
          <List/>
      </div>
    </>
  );
};

export default Ideas;
