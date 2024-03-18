import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type SequenceLoopNodeType = {
  cardMainTitle?: string;
  rocketPerspectiveMatte?: string;

  /** Style props */
  propBackground?: CSSProperties["background"];
  propBackground1?: CSSProperties["background"];
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
};

const SequenceLoopNode: NextPage<SequenceLoopNodeType> = ({
  cardMainTitle,
  rocketPerspectiveMatte,
  propBackground,
  propBackground1,
  propWidth,
  propHeight,
}) => {
  const eventTriggerNodeStyle: CSSProperties = useMemo(() => {
    return {
      background: propBackground,
    };
  }, [propBackground]);

  const uXFirstStyle: CSSProperties = useMemo(() => {
    return {
      background: propBackground1,
    };
  }, [propBackground1]);

  const rocketPerspectiveMatteIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <div className="h-[237px] flex-1 relative min-w-[393px] max-w-full text-left text-xl text-gray-gray-900 font-footer-footer-sm mq750:h-auto mq750:min-h-[237] mq750:min-w-full">
      <div className="absolute top-[-0.3px] left-[0px] w-full flex flex-row items-end justify-start py-[39px] pr-[33px] pl-[34px] box-border min-h-[237px] max-w-full h-full z-[1]">
        <div className="h-full w-full absolute !m-[0] top-[0.3px] right-[0px] bottom-[-0.3px] left-[0px] bg-gray-100 box-border border-[1px] border-solid border-shade-primary-lite-bg" />
        <div className="flex-1 flex flex-row items-start justify-start gap-[25px] max-w-full z-[1] mq750:flex-wrap">
          <div className="h-14 w-[59px] relative">
            <div
              className="absolute top-[0px] left-[0px] rounded-3xs [background:linear-gradient(225deg,_#29272e,_#27272e)] w-full h-full"
              style={eventTriggerNodeStyle}
            />
            <img
              className="absolute top-[10px] left-[12px] w-[34px] h-[35px] object-cover hidden"
              alt=""
              src="/Software-company-website/play-perspective-matte@2x.png"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[294px] max-w-full">
            <div className="self-stretch relative leading-[136.52%] font-semibold mq450:text-base mq450:leading-[22px]">
              {cardMainTitle}
            </div>
            <div className="self-stretch h-[102px] relative text-sm leading-[162.02%] inline-block shrink-0 text-gray-gray-700">
              <span>{`Unlike other companies, we are a `}</span>
              <span
                className="[background:linear-gradient(225deg,_#29272e,_#27272e)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"
                style={uXFirstStyle}
              >
                UX first
              </span>
              <span>
                {" "}
                development company. Projects are driven by designers and they
                make sure design and experiences translate to code.
              </span>
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute top-[69px] left-[46px] w-[34px] h-[35px] object-cover z-[2]"
        alt=""
        src={rocketPerspectiveMatte}
        style={rocketPerspectiveMatteIconStyle}
      />
    </div>
  );
};

export default SequenceLoopNode;
