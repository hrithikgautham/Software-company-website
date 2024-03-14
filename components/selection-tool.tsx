import type { NextPage } from "next";

export type SelectionToolType = {
  group2?: string;
};

const SelectionTool: NextPage<SelectionToolType> = ({ group2 }) => {
  return (
    <div className="w-[138px] flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border text-center text-base text-gray-gray-500 font-footer-footer-sm">
      <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
        <div className="flex flex-row items-start justify-start py-0 pr-[26px] pl-[26.5px]">
          <div className="h-[85px] w-[85px] relative flex items-center justify-center">
            <img
              className="h-full w-full object-contain absolute left-[0px] top-[4px] [transform:scale(1.706)]"
              alt=""
              src={group2}
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[9px] pl-[9.199999999999989px]">
          <div className="flex-1 flex flex-row items-start justify-start gap-[5.5px]">
            <img
              className="h-5 w-[19.5px] relative object-cover min-h-[20px]"
              alt=""
              src="/star-perspective-matte-23@2x.png"
            />
            <img
              className="h-5 w-[19.5px] relative object-cover min-h-[20px]"
              alt=""
              src="/star-perspective-matte-23@2x.png"
            />
            <img
              className="h-5 w-[19.5px] relative object-cover min-h-[20px]"
              alt=""
              src="/star-perspective-matte-23@2x.png"
            />
            <img
              className="h-5 w-[19.5px] relative object-cover min-h-[20px]"
              alt=""
              src="/star-perspective-matte-23@2x.png"
            />
            <img
              className="h-5 w-[19.5px] relative object-cover min-h-[20px]"
              alt=""
              src="/star-perspective-matte-23@2x.png"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[2px]">
          <div className="self-stretch relative leading-[25px] font-medium">
            Romeena De Silva
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[21px] text-xs text-gray-gray-400">
            <div className="flex-1 relative leading-[162.02%]">
              Janet Cosmetics
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionTool;
