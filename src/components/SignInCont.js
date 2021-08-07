import React from "react";
import img from "../Exports/Group 1364.png";

function SignInCont({ children, title, largeText, extraText }) {
  return (
    <div style={{height:"100vh"}} className="bg-white bg-opacity-60 pt-8 sm:pt-2 p-2 w-full h-full bottom-0 left-0 top-0 fixed flex flex-col justify-center items-center">
      <div style={{width: '1080px'}} className="relative border-white text-white flex flex-col sm:grid gap-0 sm:grid-cols-5">
        <div className=" w-full bg-primary rounded-3xl mb-4 sm:mb-0 sm:rounded-l-3xl sm:rounded-none col-span-2 p-5  relative flex flex-col  items-center h-2/6 sm:h-auto">
          <div className=" h-3/4  flex flex-col justify-between p-7">
            <h4 className="text-base sm:text-md sm:text-xl">{title}</h4>
            <h1 style={{fontSize: '52px', lineHeight: '72px'}} className="mt-16">
              {largeText}
            </h1>
            {extraText ? <h5 className="mt-20 text-md">{extraText}</h5> : ""}
          </div>

          <img
            className="right-0 sm:right-none absolute bottom-0 w-2/6 sm:w-auto"
            src={img}
            alt="pretzl-logo"
          />
        </div>
        {/* CONTENT */}
        {children}
      </div>
    </div>
  );
}

export default SignInCont;
