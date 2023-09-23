import React from "react";
import { Footer } from "flowbite-react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
  BsLinkedin
} from "react-icons/bs";

import bannerNavbar from "/bannerNavbar.png";

const PiePag = () => {
  return (
    <div className="mt-[15rem]">
      <Footer container={true} className="bg-opacity-0  shadow-none">
        <div className="w-full">
          <div className="flex w-full justify-center items-center ">
            <div className="min-h-16">
              <img src={bannerNavbar} className="mr-3 h-20" alt="Caracola" />
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Valentin Krajzelman" year={2023} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={BsLinkedin} />
              <Footer.Icon href="#" icon={BsGithub} />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default PiePag;
