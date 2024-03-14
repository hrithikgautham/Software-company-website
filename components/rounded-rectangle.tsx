import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type RoundedRectangleType = {
  whyCutomersLove?: string;
  workingWithUs?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
};

const RoundedRectangle: NextPage<RoundedRectangleType> = ({
  whyCutomersLove,
  workingWithUs,
  propAlignSelf,
  propWidth,
  propWidth1,
  propFlex,
}) => {
  const roundedRectangleStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const headingH2LeftStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
      flex: propFlex,
    };
  }, [propWidth1, propFlex]);

  return (
    <div
      className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-16xl text-gray-gray-900 font-footer-footer-sm"
      style={roundedRectangleStyle}
    >
      <div
        className="w-[474px] flex flex-col items-start justify-start gap-[20px] max-w-full"
        style={headingH2LeftStyle}
      >
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <div className="h-[5px] w-[69px] relative [background:linear-gradient(225deg,_#f76680,_#57007b)]" />
        </div>
        <h2 className="m-0 self-stretch relative text-inherit leading-[55px] font-inherit mq450:text-2xl mq450:leading-[33px] mq750:text-9xl mq750:leading-[44px]">
          <p className="m-0">{whyCutomersLove}</p>
          <p className="m-0">
            <b>{workingWithUs}</b>
          </p>
        </h2>
      </div>
    </div>
  );
};

export default RoundedRectangle;
