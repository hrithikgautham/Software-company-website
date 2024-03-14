import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type RotationAngleType = {
  perspective?: string;
  techArchitecture?: string;
  weBreakMonolithicAppsInto?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const RotationAngle: NextPage<RotationAngleType> = ({
  perspective,
  techArchitecture,
  weBreakMonolithicAppsInto,
  propWidth,
  propAlignSelf,
}) => {
  const rotationAngleStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const skewAxisStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div
      className="h-[159px] w-[319px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border text-left text-lg text-gray-gray-900 font-footer-footer-sm"
      style={rotationAngleStyle}
    >
      <div className="self-stretch flex-1 rounded-4xs bg-base-white flex flex-col items-start justify-start pt-[22px] px-[21px] pb-[26px] gap-[15px] border-[1px] border-solid border-shade-primary-lite-bg">
        <div className="w-[299px] h-[159px] relative rounded-4xs bg-base-white box-border hidden border-[1px] border-solid border-shade-primary-lite-bg" />
        <div
          className="flex flex-row items-start justify-start gap-[9px]"
          style={skewAxisStyle}
        >
          <b className="relative text-transparent !bg-clip-text [background:linear-gradient(225deg,_#f76680,_#57007b)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[1]">
            {perspective}
          </b>
          <b className="relative z-[1]">{techArchitecture}</b>
        </div>
        <div className="w-[245px] flex-1 relative text-sm leading-[20px] text-gray-gray-600 inline-block z-[1]">
          {weBreakMonolithicAppsInto}
        </div>
      </div>
    </div>
  );
};

export default RotationAngle;
