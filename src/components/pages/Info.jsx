import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function Info() {
  const linksItem = [
    "https://www.facebook.com/?locale=ar_AR",
    "https://x.com/AhmedMostafa_io",
    "https://www.linkedin.com/company/login/",
    "https://github.com/ahmedmostafa-io",
  ];
  function handleClick(e, i) {
    e.preventDefault();
    window.location.href = linksItem[i];
  }
  return (
    <>
      <div className="bg-second py-20">
        <div className="container">
          <div className="flex pt-10 space-y-10 *:pb-3 lg:space-y-0 lg:*:pl-36 **:text-center items-center justify-center flex-col lg:flex-row lg:justify-evenly *:text-white">
            <div className="flex-col pt-2.5  flex gap-3">
              <h2 className="text-3xl font-semibold">LOCATION</h2>
              <p>2215 John Daniel Drive</p>
              <p> Clark, MO 65243</p>
            </div>
            <div className="flex-col  flex gap-3.5">
              <h2 className="text-3xl font-semibold">AROUND THE WEB</h2>
              <div className="flex justify-center items-center gap-2.5">
                {linksItem.map((link, i) => {
                  return (
                    <Links
                      key={i}
                      link={link}
                      index={i}
                      handleClick={handleClick}
                    ></Links>
                  );
                })}
              </div>
            </div>
            <div className="">
              <h2 className="text-3xl  font-semibold pb-2">ABOUT FREELANCER</h2>
              <p className="w-92">
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function Links({ link, index, handleClick }) {
  const icons = [faFacebook, faTwitter, faLinkedinIn, faGlobe];

  return (
    <>
      <a
        href={link[0]}
        className="border hover:text-main transition-colors duration-500 rounded-full py-1 px-2 "
        onClick={(e) => handleClick(e, index)}
      >
        <FontAwesomeIcon icon={icons[index]} />
      </a>
    </>
  );
}
