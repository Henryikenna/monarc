import React from 'react'

const ThirdSection = () => {
  return (
    <div className="thirdSection px-[100px] flex items-end">
        {/* <img src="./src/assets/discordChannel_text.svg" alt="" className="" /> */}

        <section className="relative bg-[#D9D9D9] flex items-end text-white w-full rounded-[20px] mb-16 h-4/6">
          <img
            src="./src/assets/white_background_grid.png"
            alt=""
            className="absolute h-full object-cover opacity-5 w-full"
          />

          <div className="relative flex items-center text-black">
            <section className="w-1/2 px-16 pt-20">
              <h1 className="font-bold font-orbitron text-[3.75rem] pb-2">
                Crypto Calls
              </h1>
              <h3 className="text-base font-light pb-7">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s,Lorem
              </h3>

              <button className="text-white text-base font-normal rounded-[0.25rem] bg-black px-5 py-3">
                Apply now
              </button>
            </section>

            <section className="w-1/2 flex items-end justify-end pr-16">
              <img src="./src/assets/phone_mockup2.png" alt="" className="h-[50%]" />
            </section>
          </div>
        </section>
      </div>
  )
}

export default ThirdSection