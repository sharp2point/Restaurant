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
      <div className="grid lg:grid-cols-3 sm:grid-cols-2">
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
        
      </div>
    </div>
  );
};

export default Footer;
