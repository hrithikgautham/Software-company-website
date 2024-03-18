import type { NextPage } from "next";
import Distribution from "./distribution";

const SnapPoints: NextPage = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start gap-[124px] max-w-full z-[1] lg:gap-[124px_62px] mq450:gap-[124px_15px] mq750:gap-[124px_31px] mq1050:flex-wrap">
      <Distribution textboxManager="/ellipse-185-2@2x.png" />
      <img
        className="h-[473px] flex-1 relative rounded-3xs max-w-full overflow-hidden object-cover min-w-[374px] mq450:min-w-full"
        loading="lazy"
        alt=""
        src="/Software-company-website/rectangle-19@2x.png"
      />
    </div>
  );
};

export default SnapPoints;
