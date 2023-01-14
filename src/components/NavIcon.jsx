import React, { useState } from "react";
import { mainMenu } from "../Data";
import { RxDashboard } from "react-icons/rx";

const NavIcon = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div
        className={`${
          toggle ? "scale-1" : "scale-0"
        } fixed w-full flex justify-center 
      z-20 bottom-8 trasition-all duration-300`}
      >
        <div
          className="flex sm:gap-8 gap-6 bg-black
        rounded-xl p-4"
        >
          {mainMenu.map((main) => {
            return (
              <div className="p-2 rounded-full bg-glass" key={main.id}>
                <a className="text-white text-xl" href="">
                  {main.icon}
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="fixed right-0 top-[20%] z-20
      cursor-pointer bg-black"
        onClick={() => setToggle(!toggle)}
      >
        <RxDashboard className="text-white text-3xl" />
      </div>
    </>
  );
};

export default NavIcon;
