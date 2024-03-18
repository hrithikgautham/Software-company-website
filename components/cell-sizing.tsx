import type { NextPage } from "next";
import RoundedRectangle from "./rounded-rectangle";
import SequenceLoopNode from "./sequence-loop-node";
import FlowController from "./flow-controller";

const CellSizing: NextPage = () => {
  return (
    <section className="w-[1358px] flex flex-row items-start justify-start pt-0 pb-[146px] pr-0 pl-5 box-border max-w-full text-left text-xl text-gray-gray-900 font-footer-footer-sm lg:pb-[95px] lg:box-border mq750:pb-[62px] mq750:box-border">
      <div className="w-[1257px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[80px] max-w-full mq450:gap-[20px_80px] mq750:gap-[40px_80px]">
        <RoundedRectangle
          whyCutomersLove="Our design and"
          workingWithUs="development approach"
          propAlignSelf="stretch"
          propWidth="unset"
          propWidth1="474px"
          propFlex="unset"
        />
        <div className="self-stretch flex flex-col items-start justify-start gap-[24.5px] max-w-full">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[25px] max-w-full">
            <SequenceLoopNode
              cardMainTitle="UX Driven Engineering"
              rocketPerspectiveMatte="/rocket-perspective-matte@2x.png"
            />
            <div className="h-[237px] flex-1 relative min-w-[393px] max-w-full mq750:h-auto mq750:min-h-[237] mq750:min-w-full">
              <div className="absolute top-[-0.3px] left-[0px] w-full flex flex-row items-end justify-start py-[39px] pr-[33px] pl-[34px] box-border min-h-[237px] max-w-full h-full z-[1]">
                <div className="h-full w-full absolute !m-[0] top-[0.3px] right-[0px] bottom-[-0.3px] left-[0px] bg-gray-100 box-border border-[1px] border-solid border-shade-primary-lite-bg" />
                <div className="flex-1 flex flex-row items-start justify-start gap-[25px] max-w-full z-[1] mq750:flex-wrap">
                  <div className="h-14 w-[59px] relative">
                    <div className="absolute top-[0px] left-[0px] rounded-3xs [background:linear-gradient(225deg,_#68dbf2_0.01%,_#509cf5)] w-full h-full" />
                    <img
                      className="absolute top-[10px] left-[12px] w-[34px] h-[35px] object-cover hidden"
                      alt=""
                      src="/Software-company-website/play-perspective-matte@2x.png"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[294px] max-w-full">
                    <div className="self-stretch relative leading-[136.52%] font-semibold mq450:text-base mq450:leading-[22px]">
                      Developing Shared Understanding
                    </div>
                    <div className="self-stretch h-[102px] relative text-sm leading-[162.02%] inline-block shrink-0 text-gray-gray-700">
                      <span>{`Unlike other companies, we are a `}</span>
                      <span className="[background:linear-gradient(225deg,_#68dbf2_0.01%,_#509cf5)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        UX first
                      </span>
                      <span>
                        {" "}
                        development company. Projects are driven by designers
                        and they make sure design and experiences translate to
                        code.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[68px] left-[46px] w-9 h-[37px]">
                <div className="absolute top-[6px] left-[0px] w-[29px] h-[30px] z-[2]" />
                <img
                  className="absolute top-[0px] left-[0px] w-9 h-[37px] object-cover z-[3]"
                  alt=""
                  src="/Software-company-website/code-perspective-matte-2@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[29px] max-w-full">
            <FlowController
              cardMainTitle="Proven Experience and Expertise"
              heartRatePerspectiveMatte="/heart-rate-perspective-matte@2x.png"
            />
            <SequenceLoopNode
              cardMainTitle={`Security & Intellectual Property (IP)`}
              rocketPerspectiveMatte="/shield-perspective-matte@2x.png"
              propBackground="linear-gradient(225deg, #67e9f1, #24e795)"
              propBackground1="linear-gradient(225deg, #67e9f1, #24e795)"
              propWidth="40px"
              propHeight="40px"
            />
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[29px] max-w-full">
            <FlowController
              cardMainTitle="Code Reviews"
              heartRatePerspectiveMatte="/success-perspective-matte@2x.png"
              propBackground="linear-gradient(225deg, #ffef5e, #f7936f)"
              propBackground1="linear-gradient(225deg, #ffef5e, #f7936f)"
            />
            <FlowController
              cardMainTitle={`Quality Assurance & Testing`}
              heartRatePerspectiveMatte="/padlock-perspective-matte@2x.png"
              propBackground="linear-gradient(225deg, #f76680, #57007b)"
              propBackground1="linear-gradient(225deg, #f76680, #57007b)"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CellSizing;
