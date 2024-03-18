import type { NextPage } from "next";
import RoundedRectangle from "./rounded-rectangle";
import Distribution from "./distribution";

const RotationHandler: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-end justify-start gap-[73px] max-w-full text-center text-9xl text-gray-gray-900 font-footer-footer-sm mq450:gap-[18px_73px] mq750:gap-[36px_73px]">
      <RoundedRectangle
        whyCutomersLove="Way of building"
        workingWithUs="Great Software"
        propAlignSelf="stretch"
        propWidth="unset"
        propWidth1="474px"
        propFlex="unset"
      />
      <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
        <img
          className="h-[1662.8px] w-[923.5px] absolute !m-[0] bottom-[-1156.8px] left-[74px]"
          alt=""
          src="/Software-company-website/group-20.svg"
        />
        <div className="flex-1 flex flex-row items-start justify-center gap-[124px] max-w-full z-[1] lg:gap-[124px_62px] mq450:gap-[124px_15px] mq750:gap-[124px_31px] mq1050:flex-wrap">
          <Distribution textboxManager="/ellipse-185@2x.png" />
          <div className="h-px w-[18px] relative overflow-hidden shrink-0 hidden" />
          <img
            className="h-[473px] flex-1 relative rounded-3xs max-w-full overflow-hidden object-cover min-w-[374px] mq450:min-w-full"
            loading="lazy"
            alt=""
            src="/Software-company-website/rectangle-17@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default RotationHandler;
