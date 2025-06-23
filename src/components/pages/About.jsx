import React from "react";
import Star from "./../Star";

export default function About() {
  return (
    <>
      <div className="bg-main lg:pt-6 lg:pb-5 ">
        <div className="container">
          <div className="flex-col space-y-3 pt-14  flex lg:pt-14 lg:pl-16 items-center justify-center h-[37rem]">
            <h2 className="text-3xl text-white lg:text-[40px] pt-4 uppercase font-bold  lg:font-bold">
              about component
            </h2>
            <Star
              className={
                "relative *:text-white before:w-20 before:absolute before:-left-24 before:top-[50%] before:-translate-y-1/2 before:h-1 before:bg-white after:w-20 after:absolute after:-right-24 after:top-[50%] after:-translate-y-1/2 after:h-1 after:bg-white"
              }
            />
            <div className="text-white  grid lg:max-w-4xl lg:grid-cols-2">
              <p className="max-w-[370px] lg:max-w-4xl">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
              <p className="max-w-[330px] lg:max-w-4xl">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
