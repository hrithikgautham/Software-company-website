import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type TextPropertiesType = {
  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
};

const TextProperties: NextPage<TextPropertiesType> = ({
  propBackgroundColor,
  propBackgroundColor1,
}) => {
  const cardWrapperStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const gradientEngineStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  return (
    <div className="self-stretch h-[416px] relative max-w-full text-center text-9xl text-gray-gray-800 font-footer-footer-sm">
      <div
        className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-11xl rounded-br-11xl rounded-bl-none bg-ghostwhite box-border w-full h-full z-[1] border-[1px] border-solid border-shade-primary-lite-bg"
        style={cardWrapperStyle}
      >
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-gray-100 shadow-[0px_4px_30px_rgba(0,_0,_0,_0.05)] hidden" />
      </div>
      <div
        className="absolute top-[66px] left-[143px] bg-ghostwhite w-[529px] flex flex-col items-end justify-end gap-[60px] max-w-full z-[2]"
        style={gradientEngineStyle}
      >
        <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full">
          <h3 className="m-0 w-[451px] relative text-inherit leading-[136.02%] font-semibold font-inherit inline-block max-w-full mq450:text-3xl mq450:leading-[30px]">
            Website Design for SCFC Canada
          </h3>
          <div className="self-stretch relative text-sm leading-[162.02%] text-gray-gray-700 text-left">
            Born out of a vision, a single-minded objective that puts service
            before anything else, Swift Clearance and Forwarding Corp. surging
            forth to deliver the best services in the shipping and logistics
            scenario. Its meteoric rise stems out of a solid foundation. The
            management boasts of over 20 years of rich and varied experience in
            the shipping and freight forwarding industry.
          </div>
        </div>
        <div className="flex flex-row items-center justify-center text-left text-sm">
          <div className="flex flex-row items-center justify-center gap-[5px]">
            <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(225deg,_#f76680,_#57007b)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Raed more
            </div>
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
              alt=""
              src="/arrowrightsline.svg"
            />
            <img
              className="h-3.5 w-3.5 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/arrowrightcirclefill.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextProperties;
