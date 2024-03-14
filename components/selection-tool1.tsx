import type { NextPage } from "next";

export type SelectionTool1Type = {
  group2?: string;
};

const SelectionTool1: NextPage<SelectionTool1Type> = ({ group2 }) => {
  return (
    <div className="w-[121px] flex flex-col items-start justify-start pt-[17.5px] px-0 pb-0 box-border text-center text-sm text-gray-gray-500 font-footer-footer-sm">
      <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
        <div className="flex flex-row items-start justify-start py-0 pr-5 pl-[20.5px]">
          <div className="h-20 w-20 relative flex items-center justify-center">
            <img
              className="h-full w-full object-contain absolute left-[0px] top-[4px] [transform:scale(1.75)]"
              loading="lazy"
              alt=""
              src={group2}
            />
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[5.5px]">
          <img
            className="h-5 w-[19.5px] relative object-cover min-h-[20px]"
            alt=""
            src="/star-perspective-matte-18@2x.png"
          />
          <img
            className="h-5 w-[19.5px] relative object-cover min-h-[20px]"
            alt=""
            src="/star-perspective-matte-18@2x.png"
          />
          <img
            className="h-5 w-[19.5px] relative object-cover min-h-[20px]"
            alt=""
            src="/star-perspective-matte-18@2x.png"
          />
          <img
            className="h-5 w-[19.5px] relative object-cover min-h-[20px]"
            alt=""
            src="/star-perspective-matte-18@2x.png"
          />
          <img
            className="h-5 w-[19.5px] relative object-cover min-h-[20px]"
            alt=""
            src="/star-perspective-matte-18@2x.png"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch relative leading-[24px] font-semibold">
            Romeena De Silva
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-4 pl-[16.5px] text-2xs text-gray-gray-300">
            <div className="flex-1 relative leading-[162.02%]">
              Janet Cosmetics
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionTool1;
