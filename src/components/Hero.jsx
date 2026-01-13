import Image from "next/image";
import React from "react";
import Model from "./Model/Model";
import Footer from "./layout/Footer";

const Hero = () => {
  return (
    <main className="flex relative z-999  w-full   flex-col items-center justify-between pt-32 overflow-hidden  ">
      <div className="fixed inset-0 z-999"><Model /></div>

      <div className="w-full  absolute top-0 left-0 min-h-screen  z-0  flex  justify-between">
        <div className=" w-[25%] h-[300vh]  border-r  border-zinc-800 opacity-50"></div>
        <div className=" w-[25%] h-[830vh] border-r  border-zinc-800 opacity-50"></div>
        <div className=" w-[25%] h-[830vh] border-r  border-zinc-800 opacity-50"></div>
        <div className=" w-[25%] h-[830vh]  "></div>
      </div>

      <h1 className="text-[28rem] relative z-10 font-black font-arial leading-64 tracking-tighter text-center text-[#E5D48E]">
        Wasp
      </h1>

      <div className="w-full  h-180 mt-40 flex items-center justify-between ">
        <Image
          className="relative z-999"
          src="/Big-Flower.webp"
          alt="flower"
          height={1000}
          width={1000}
        />
        <div className="pb-80 pr-16 max-w-84">
          <h1 className=" text-zinc-950 leading-7 text-2xl">
            We all kow that wasps can sting repeatedly, but there are some facts
            about you may not know{" "}
          </h1>
        </div>
      </div>

      <div className="w-full relative z-10 h-180 mt-40 flex items-start justify-center ">
        <h1 className="text-[25rem] leading-20 text-[#E5D48E] font-black w-[50%]">
          01
        </h1>
        <div className="max-w-4xl w-[50%] ">
          <h1 className=" text-green-950 font-black tracking-tighter leading-none text-7xl">
            Wasp venom contains pheromone that causes other wasps to become more
            aggressive{" "}
          </h1>

          <h1 className=" text-zinc-950 max-w-xs mt-28 leading-7 text-2xl">
            We all kow that wasps can sting repeatedly, but there are some facts
            about you may not know so we have to more know about them that's why
            we are building this.
          </h1>
        </div>
      </div>

      <div className="mt-60 w-full flex bg-[url(/Golden.webp)] bg-cover justify-between h-[200vh]">
        
        <div className=" text-[#E5D48E]   h-full max-w-2xl space-y-6 px-5">
          <h1 className="text-[25rem] leading-none text-[#E5D48E] font-black w-[50%]">
            02
          </h1>
          <h2 className="text-7xl font-black tracking-tighter">
            Most wasps are capable to sting numerous times
          </h2>
          <h3 className="text-2xl max-w-sm">
            Unlikely many bee species, most wasps are capable stingning numerous
            times because their stinger is not barbed
          </h3>
        </div>

        <div className=" h-full mt-80 relative z-100 w-full flex items-end  ">
          <Image
            className=" "
            src="/Leaf.webp"
            alt="flower"
            height={1000}
            width={1000}
          />
        </div>
      </div>

      <div className="relative w-full h-[200vh] flex items-start mt-40 ">
        <div className=" h-full w-[40%]  ">
          <Image
            className="-translate-x-[55%] mt-40 object-fill "
            src="/Pink-Flower.webp"
            alt="flower"
            fill
            
          />
        </div>

        <div className=" max-w-4xl px-4  flex items-start justify-center ">
          <div className="w-[50%] ">
            <h1 className="text-[25rem]  text-[#E5D48E] font-black w-[50%]">
              01
            </h1>
            <h1 className=" text-green-950 font-black tracking-tighter leading-none text-5xl">
              Wasp venom contains pheromone that causes other wasps to become
              more aggressive{" "}
            </h1>

            <h1 className=" text-zinc-950 max-w-xs leading-8 mt-13 text-2xl">
              We all kow that wasps can sting repeatedly, but there are some
              facts about you may not know so we have to more know about them
              that's why we are building this.
            </h1>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Hero;
