import type { NextPage } from "next";
import { Button } from "@mui/material";

const InputSplitter: NextPage = () => {
  return (
    <header className="self-stretch flex flex-row items-start justify-start max-w-full text-left text-base text-gray-gray-700 font-footer-footer-sm">
      <div className="w-[1440px] bg-base-white shadow-[0px_4px_40px_rgba(0,_0,_0,_0.1)] flex flex-row items-center justify-between py-2.5 px-[25px] box-border gap-[20px] max-w-full">
        <img
          className="h-[59px] w-[180px] relative"
          loading="lazy"
          alt=""
          src="/Software-company-website/brandlogo.svg"
        />
        <div className="w-[645px] flex flex-row items-center justify-between py-2.5 px-0 box-border max-w-full">
          <div className="h-[22px] w-14 relative hidden z-[1] text-lg text-brand-primary-bg">
            <b className="absolute h-full w-full top-[0%] left-[0%] inline-block whitespace-nowrap">
              Home
            </b>
            <div className="absolute h-[13.64%] w-[30.36%] top-[218.18%] right-[69.64%] bottom-[-131.82%] left-[0%] rounded-mid bg-brand-primary-bg" />
          </div>
          <div className="flex flex-row items-center justify-start">
            <div className="relative leading-[25px] font-medium whitespace-nowrap">
              About us
            </div>
          </div>
          <div className="flex flex-row items-center justify-start">
            <div className="relative leading-[25px] font-medium">Services</div>
          </div>
          <div className="flex flex-row items-center justify-start">
            <div className="relative leading-[25px] font-medium whitespace-nowrap">
              Case Studies
            </div>
          </div>
          <div className="flex flex-row items-center justify-start">
            <div className="relative leading-[25px] font-medium">Blog</div>
          </div>
          <div className="flex flex-row items-center justify-start">
            <div className="relative leading-[25px] font-medium whitespace-nowrap">
              How it Works
            </div>
          </div>
          <div className="flex flex-row items-center justify-start">
            <div className="relative leading-[25px] font-medium">Hire</div>
          </div>
        </div>
        <Button
          className="h-[42px] w-[124px]"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fafafa",
            fontSize: "14",
            background: "linear-gradient(225deg, #6675f7, #57007b)",
            borderRadius: "5px",
            "&:hover": {
              background: "linear-gradient(225deg, #6675f7, #57007b)",
            },
            width: 124,
            height: 43,
          }}
        >
          Contact us
        </Button>
      </div>
      <div className="w-[92px] flex flex-col items-start justify-start pt-[25px] px-0 pb-0 box-border ml-[-1367px] text-5xl text-black font-inspiration">
        <div className="self-stretch h-[15px] relative inline-block shrink-0 whitespace-nowrap z-[1]">
          Ik developers
        </div>
      </div>
    </header>
  );
};

export default InputSplitter;
