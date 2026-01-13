import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full z-999 text-zinc-900  py-20 px-10">
      <div className="flex items-center justify-between  ">
        <div className="container space-y-6 flex flex-col items-left justify-start ">
          <h1 className="text-6xl font-black">Minh Pham</h1>
          <p className="font-bold">© 2023 Wasp. All rights reserved.</p>
        </div>

        <div className="flex items-center justify-between w-full gap-10">
          <div className="container text-left px-2 font-bold  flex flex-col items-left gap-3 ">
            <p className="text-xl">Youtube</p>
            <p className="text-xl">Linkedin</p>
            <p className="text-xl">Instagram</p>
          </div>

          <div className="container text-left px-2 font-bold  flex flex-col items-left gap-3 ">
            <p className="text-xl">Facebook</p>
            <p className="text-xl">Unsplash</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
