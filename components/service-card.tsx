import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type ServiceCardType = {
  webDesignDevelopment?: string;

  /** Style props */
  propOpacity?: CSSProperties["opacity"];
};

const ServiceCard: NextPage<ServiceCardType> = ({
  webDesignDevelopment,
  propOpacity,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      opacity: propOpacity,
    };
  }, [propOpacity]);

  return (
    <div className="h-[287px] flex-1 relative min-w-[250px] max-w-full text-left text-xl text-gray-gray-800 font-footer-footer-sm">
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] flex flex-row items-start justify-start max-w-full">
        <div className="self-stretch flex-1 relative rounded-6xs bg-gray-100 shadow-[0px_4px_30px_rgba(0,_0,_0,_0.05)] max-w-full" />
      </div>
      <div className="absolute h-[74.91%] w-[90.39%] top-[12.54%] right-[4.8%] bottom-[12.54%] left-[4.8%] flex flex-col items-start justify-start gap-[20px] z-[1]">
        <div className="w-[271px] flex flex-col items-start justify-start gap-[20px]">
          <div
            className="w-[58px] h-[58px] relative opacity-[0.5]"
            style={groupDivStyle}
          >
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gray-100 box-border w-full h-full border-[0px] border-solid border-gradient-primary-bg" />
            <img
              className="absolute top-[12px] left-[12px] w-[34px] h-[34px] object-cover hidden"
              alt=""
              src="/code-perspective-matte@2x.png"
            />
          </div>
          <div className="self-stretch relative leading-[136.52%] font-semibold mq450:text-base mq450:leading-[22px]">
            {webDesignDevelopment}
          </div>
        </div>
        <div className="self-stretch relative text-sm leading-[162.02%] text-gray-gray-600">
          A Website is an extension of yourself and we can help you to express
          it properly. Your website is your number one marketing asset because
          we live in a digital age.
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
