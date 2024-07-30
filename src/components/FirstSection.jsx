import React, { useContext } from "react";
import ScrollContext from "./ScrollContext";
import logo from "../assets/logo.svg";
import barCircleIcon from "../assets/barCircleIcon.svg";
import solanaCircleIcon from "../assets/solanaCircleIcon.svg";
import linksCircleIcon from "../assets/linksCircleIcon.svg";
import thousandxCircleIcon from "../assets/1000xCircleIcon.svg";
import ethereumCircleIcon from "../assets/ethereumCircleIcon.svg";
import downArrow from "../assets/down_arrow.svg";

const FirstSection = () => {
  const { activeSection, handleScroll } = useContext(ScrollContext);

  const { homeRef } = useContext(ScrollContext);

  return (
    <div id="home" ref={homeRef} className="homeHeader flex flex-col px-[100px] pt-10">
      <section className="flex items-center justify-between">
        <span className=" flex items-end gap-[9.7px]">
          <img className="w-[42.5px]" src={logo} alt="" />
          <h4 className="text-white font-semibold font-lufga text-xl">
            Monarc
          </h4>
        </span>

        {/* <nav class="navbar">
            <ul>
              <li>
                <a href="#" class="active">
                  Home
                </a>
              </li>
              <li>
                <a href="#">Wins</a>
              </li>
              <li>
                <a href="#">Growth</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
            </ul>
          </nav> */}
        <nav className="navbar">
          <ul className="">
            <li>
              <button
                onClick={() => handleScroll("home")}
                className={`${activeSection === "home" ? "active" : ""}`}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("wins")}
                className={`${activeSection === "wins" ? "active" : ""}`}
              >
                Wins
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("growth")}
                className={`${activeSection === "growth" ? "active" : ""}`}
              >
                Growth
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("pricing")}
                className={`${activeSection === "pricing" ? "active" : ""}`}
              >
                Pricing
              </button>
            </li>
          </ul>
        </nav>

        <button className="w-[142px] border-white border-[1px] justify-center rounded-full flex items-center gap-[10px] h-11">
          <div className="w-[7px] h-[7px] text-white bg-white rounded-full"></div>
          <h4 className="text-base text-white font-normal">Apply Now</h4>
        </button>
      </section>

      <section className="justify-center flex flex-1 items-center origin-center px-[100px]">
        <div className="flex flex-col justify-center items-center gap-[1px]">
          <h1 className="text-white font-orbitron font-bold text-[4.375rem] text-center">
            Join the community of expert trade callers
          </h1>
          <h4 className="text-white font-normal text-center text-base px-60">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </h4>

          <button className="text-black font-semibold text-[1.1125rem] bg-white h-[50px] rounded-full w-[164px] mt-8">
            Join Now
          </button>
          <div className="icons">
            <img
              className="absolute top-64 left-36"
              src={barCircleIcon}
              alt="icon1"
            />
            <img
              className="absolute top-[36rem] left-[17rem]"
              src={solanaCircleIcon}
              alt="icon2"
            />
            <img
              className="absolute top-[42rem] right-[28rem]"
              src={linksCircleIcon}
              alt="icon3"
            />
            <img
              className="absolute top-[32rem] right-[15rem]"
              src={thousandxCircleIcon}
              alt="icon4"
            />
            <img
              className="absolute top-40 right-52"
              src={ethereumCircleIcon}
              alt="icon5"
            />
          </div>
          <img
            className="absolute bottom-2 right-16"
            src={downArrow}
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default FirstSection;
