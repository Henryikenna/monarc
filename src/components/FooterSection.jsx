import React from "react";

const FooterSection = () => {
  return (
    <footer className="footerSection flex flex-col justify-end">
      <div className="flex justify-between px-[100px]">
        <span className=" flex items-start gap-[11.37px]">
          <img className="w-[49.7px]" src="./src/assets/logo.svg" alt="" />
          <h4 className="text-white font-semibold font-lufga text-[1.9rem]">
            Monarc
          </h4>
        </span>

        <button className="w-[142px] bg-[#FFFFFF1A] border-white border-[1px] justify-center rounded-full flex items-center gap-[10px] h-11">
          <div className="w-[7px] h-[7px] text-white bg-white rounded-full"></div>
          <h4 className="text-base text-white font-normal">Apply Now</h4>
        </button>
      </div>
      <div className="h-[1px] w-full opacity-20 mt-[2.6rem] bg-white"></div>
      <h4 className="text-white font-light text-center text-base my-[2.3rem]">
        All Rights Reserved 2024
      </h4>
    </footer>
  );
};

export default FooterSection;
