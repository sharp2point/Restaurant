import React from "react";
import {
  footerSocials,
  footerContacts,
  mainMenu,
  explores,
  payements,
} from "../Data";

const Footer = () => {
  return (
    <div className="section">
      <div
        className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10
      mb-8"
      >
        <div>
          <div className="text-xl font-semibold mb-3">Foodzone</div>
          <p className="mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            magni quaerat maxime est atque debitis ab minus quos nostrum!
            Quidem?
          </p>
          <div className="flex items-center gap-4">
            <span className="">Follow us</span>
            <div className="h-[2px] w-12 bg-black"></div>
            {footerSocials.map((fs, index) => {
              return (
                <div key={index}>
                  <a href="#">{fs}</a>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-2">
          <div>
            <h3 className="font-semibold text-[1.1rem] mb-4">Main menu</h3>
            {mainMenu.map((menu) => {
              return (
                <div className="mb-2">
                  <a href={`#${menu.href}`}>{menu.text}</a>
                </div>
              );
            })}
          </div>
          <div>
            <h3 className="font-semibold text-[1.1rem] mb-4">Explore</h3>
            {explores.map((exp, index) => {
              return (
                <div className="mb-2" key={index}>
                  <a href="#">{exp}</a>
                </div>
              );
            })}
          </div>
        </div>

        <div className="">
          <h3 className="font-semibold text-[1.1rem] mb-4">Contact</h3>
          {footerContacts.map((cnt) => {
            return (
              <div className="flex items-center gap-4 mb-4" key={cnt.id}>
                <div className="text-xl">{cnt.icon}</div>
                <div>{cnt.text}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-4 pb-8">
        <div>
          Copyright &#169; <span className="font-bold">Blinov & Co</span>. All
          right deserved.
        </div>
        <div className="flex gap-2">
          {payements.map((pm,index)=>{
            return (
              <div key={index}>
                <img src={pm} alt="" className="w-10"/>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
