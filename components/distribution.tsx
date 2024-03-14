import type { NextPage } from "next";

export type DistributionType = {
  textboxManager?: string;
};

const Distribution: NextPage<DistributionType> = ({ textboxManager }) => {
  return (
    <div className="w-[534px] flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border min-w-[534px] max-w-full text-center text-9xl text-gray-gray-900 font-footer-footer-sm mq750:min-w-full mq1050:flex-1">
      <div className="self-stretch flex flex-col items-start justify-start gap-[10px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full">
          <h3 className="m-0 w-[379px] relative text-inherit leading-[136.02%] font-semibold font-inherit inline-block max-w-full mq450:text-3xl mq450:leading-[30px]">
            Build the right team to scale
          </h3>
          <div className="self-stretch h-[113px] relative text-lg leading-[30px] text-gray-gray-800 text-left inline-block shrink-0">
            Finding the right talent is not easy. We help you find the talent
            that suits your needs, follows your processes, and sticks with you
            long term (not the case with freelancers
          </div>
        </div>
        <div className="w-[503px] flex flex-col items-start justify-start gap-[25px] max-w-full text-left text-lg text-gray-gray-800">
          <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
            <div className="self-stretch h-[69px] relative leading-[30px] inline-block shrink-0">
              <span>{`Our `}</span>
              <span className="[background:linear-gradient(225deg,_#f76680,_#57007b)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                delivery model
              </span>
              <span> helps you cut costs and deliver within budget.</span>
            </div>
            <div className="w-[453px] flex flex-row items-start justify-start gap-[15px] max-w-full text-base mq450:flex-wrap">
              <div className="h-[87px] w-[3px] relative [background:linear-gradient(225deg,_#f76680,_#57007b)] mq450:w-full mq450:h-[3px]" />
              <i className="flex-1 relative leading-[30px] inline-block font-light text-transparent !bg-clip-text [background:linear-gradient(225deg,_#f76680,_#57007b)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] min-w-[283px] max-w-full">
                "Simform is quick to identify larger problem with the Software
                so we decided to expand our scope to build new modules"
              </i>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[10px] text-base text-gray-gray-900">
            <img
              className="h-[41px] w-[41px] relative rounded-[50%] object-cover min-h-[41px]"
              loading="lazy"
              alt=""
              src={textboxManager}
            />
            <div className="flex flex-col items-start justify-start gap-[5px]">
              <div className="relative">Jeewa markram</div>
              <div className="relative text-smi text-gray-gray-600">CEO</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Distribution;
