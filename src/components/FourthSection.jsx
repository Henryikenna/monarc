import React, { useContext } from 'react';
import ScrollContext from './ScrollContext';

const FourthSection = () => {
    const { growthRef } = useContext(ScrollContext);


  return (
    <div id='growth' ref={growthRef} className="fourthSection flex items-center gap-[6.25rem] px-[100px]">
      <section className="w-1/2">
        <img src="./src/assets/chartImage.png" alt="" className="" />
      </section>

      <section className="w-1/2 flex flex-col gap-6">
        <h2 className="text-6xl font-orbitron text-white font-bold">
          Our Growth
        </h2>
        <p className="text-white text-base font-light">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s,
        </p>
      </section>
    </div>
  );
};

export default FourthSection;
