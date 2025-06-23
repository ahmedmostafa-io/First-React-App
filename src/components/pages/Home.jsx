import React from "react";
import avatarLogo from "../../assets/avataaars.svg";
import Star from "./../Star";
export default function Home() {
  return (
    <>
      <div className="bg-main ">
        <div className="container">
          <div className="flex-col space-y-3 flex lg:pt-3 lg:pl-16 items-center justify-center h-[37rem]">
            <div className="w-[250px] pt-16 pb-8">
              <img src={avatarLogo} alt="" className="w-full " />
            </div>
            <h2 className="text-white text-3xl lg:text-[40px] uppercase font-bold  lg:font-bold ">
              start Framework
            </h2>
            <Star
              className={
                "relative *:text-white  before:w-20 before:absolute before:-left-24 before:top-[50%] before:-translate-y-1/2 before:h-1 before:bg-white after:w-20 after:absolute after:-right-24 after:top-[50%] after:-translate-y-1/2 after:h-1 after:bg-white"
              }
            />
            <p className="text-white">
              Graphic Artist - Web Designer - Illustrator
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
