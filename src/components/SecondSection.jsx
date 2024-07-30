import React, { useState, useContext } from "react";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import ScrollContext from "./ScrollContext";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1721894456328-c8c370fbaa80?q=80&w=1911&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Slide 1",
    description: "This is the first slide",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1721404832698-4e300fa83b9b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Slide 2",
    description: "This is the second slide",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1722113515289-72771c520102?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Slide 3",
    description: "This is the third slide",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1691157915037-68576ba139b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Slide 4",
    description: "This is the fourth slide",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1721623905125-af5f7b7fb18b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Slide 5",
    description: "This is the fifth slide",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1721566364814-7345a56e7ab0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Slide 6",
    description: "This is the sixth slide",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1721804976114-3c94d0d5a671?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Slide 7",
    description: "This is the seventh slide",
  },
];

const SecondSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { winsRef } = useContext(ScrollContext);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const currentSlide = slides[currentIndex];

  return (
    <div
      id="wins"
      ref={winsRef}
      className="secondSection text-white px-[100px] bg-opacity-30 gap-24 flex items-center"
    >
      <div className="flex flex-col gap-5 w-1/2 h-[28rem]">
        <section className="w-full h-full">
          <img
            src={currentSlide.image}
            alt={currentSlide.alt || `Slide ${currentIndex}`}
            className="w-full h-[24.5rem] object-cover rounded-lg"
          />
        </section>

        <section className="flex items-center justify-between">
          {/* <div className="flex space-x-[6.65px] bg-[#202020] border border-[#FFFFFF1A] rounded-full px-[13.3px] py-4">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? "bg-white" : "bg-white opacity-30"
                }`}
              />
            ))}
          </div> */}
          <div className="flex space-x-[6.65px] bg-[#202020] border border-[#FFFFFF1A] rounded-full px-[13.3px] py-[10px]">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex
                    ? "bg-white w-6"
                    : "bg-white opacity-30"
                }`}
                onClick={() => goToSlide(index)} // Optional: if you want to make dots clickable
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={goToPrevious}
              className="bg-white border border-[#FFFFFF1A] text-black w-10 h-10 rounded-full flex items-center justify-center"
            >
              <GoChevronLeft className="text-2xl" />
            </button>

            <button
              onClick={goToNext}
              className=" bg-white border border-[#FFFFFF1A] text-black w-10 h-10 rounded-full flex items-center justify-center"
            >
              <GoChevronRight className="text-2xl" />
            </button>
          </div>
        </section>
      </div>

      <div className="w-1/2">
        <section className="flex flex-col gap-1 mb-6">
          <h2 className="text-5xl font-orbitron font-normal">Our</h2>
          <h2 className="text-5xl font-orbitron font-bold">Biggest Wins</h2>
        </section>
        <p className="text-white text-base font-light">
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s. Lorem ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s. Lorem ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s.
        </p>
      </div>
    </div>
  );
};

export default SecondSection;
