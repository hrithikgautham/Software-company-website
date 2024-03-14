import type { NextPage } from "next";
import RoundedRectangle from "./rounded-rectangle";
import SelectionTool1 from "./selection-tool1";
import SelectionTool from "./selection-tool";

const AlignmentGrid: NextPage = () => {
  return (
    <section className="w-[1381px] flex flex-row items-start justify-start pt-0 pb-[184px] pr-0 pl-5 box-border relative max-w-full text-center text-16xl text-gray-gray-900 font-footer-footer-sm mq450:pb-[78px] mq450:box-border mq1050:pb-[120px] mq1050:box-border">
      <div className="w-[1300px] flex flex-row items-start justify-between py-0 pr-5 pl-0 box-border max-w-full gap-[20px]">
        <div className="flex flex-col items-start justify-start pt-[301px] px-0 pb-0 mq750:hidden">
          <img
            className="w-[45px] h-[45px] relative"
            alt=""
            src="/btnleft.svg"
          />
        </div>
        <div className="w-[976px] flex flex-col items-start justify-start py-0 pr-[31px] pl-0 box-border max-w-[calc(100%_-_130px)] mq750:max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[52px] max-w-full mq750:gap-[26px_52px]">
            <RoundedRectangle
              whyCutomersLove="Why cutomers love"
              workingWithUs="working with us"
            />
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-lg text-gray-gray-600">
              <div className="flex flex-row items-start justify-center gap-[56px] max-w-full mq750:gap-[56px_28px] mq1050:flex-wrap">
                <img
                  className="h-10 w-10 relative overflow-hidden shrink-0 object-contain"
                  alt=""
                  src="/fluentcomma24regular.svg"
                />
                <div className="w-[535px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border max-w-full">
                  <div className="self-stretch h-[181px] relative leading-[36px] inline-block shrink-0">
                    Without any doubt I recommend Alcaline Solutions as one of
                    the best web design and digital marketing agencies. One of
                    the best agencies I’ve came across so far. Wouldn’t be
                    hesitated to introduce their work to someone else.
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-[121px] px-0 pb-0">
                  <img
                    className="w-10 h-10 relative overflow-hidden shrink-0"
                    alt=""
                    src="/fluentcomma24regular-1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-sm text-gray-gray-500 mq1050:flex-wrap mq1050:justify-center">
              <SelectionTool1 group2="/group-2.svg" />
              <SelectionTool group2="/group-2-1.svg" />
              <div className="w-[123px] flex flex-col items-start justify-start gap-[15px] text-lg text-brand-primary-bg">
                <div className="flex flex-row items-start justify-start py-0 pr-[11px] pl-[11.5px]">
                  <div className="h-[100px] w-[100px] relative flex items-center justify-center">
                    <img
                      className="h-full w-full object-contain absolute left-[0px] top-[4px] [transform:scale(1.98)]"
                      alt=""
                      src="/group-2-2.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-0 pr-0.5 pl-[1.7000000000000028px]">
                  <div className="flex flex-row items-start justify-start gap-[5.499999999999999px]">
                    <img
                      className="h-5 w-[19.5px] relative object-cover min-h-[20px]"
                      alt=""
                      src="/star-perspective-matte-28@2x.png"
                    />
                    <img
                      className="h-5 w-[19.5px] relative object-cover min-h-[20px]"
                      alt=""
                      src="/star-perspective-matte-28@2x.png"
                    />
                    <img
                      className="h-5 w-[19.5px] relative object-cover min-h-[20px]"
                      alt=""
                      src="/star-perspective-matte-28@2x.png"
                    />
                    <img
                      className="h-5 w-[19.5px] relative object-cover min-h-[20px]"
                      alt=""
                      src="/star-perspective-matte-28@2x.png"
                    />
                    <img
                      className="h-5 w-[19.5px] relative object-cover min-h-[20px]"
                      alt=""
                      src="/star-perspective-matte-28@2x.png"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[2px]">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 px-[11px]">
                    <b className="flex-1 relative">Imran Khan</b>
                  </div>
                  <div className="self-stretch relative text-sm leading-[162.02%] text-black">
                    Software Engineer
                  </div>
                </div>
              </div>
              <SelectionTool group2="/group-2-3.svg" />
              <SelectionTool1 group2="/group-2-4.svg" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[301px] px-0 pb-0 mq750:hidden">
          <div className="w-[45px] h-[45px] relative flex items-center justify-center">
            <img
              className="w-full h-full object-contain absolute left-[0px] top-[14px] [transform:scale(2.956)]"
              alt=""
              src="/btnright-1.svg"
            />
          </div>
        </div>
      </div>
      <img
        className="h-[294.9px] w-[213.6px] absolute !m-[0] right-[168.4px] bottom-[-266.9px] object-contain z-[1]"
        loading="lazy"
        alt=""
        src="/decoimgarrow@2x.png"
      />
      <img
        className="h-[219.6px] w-[250.5px] absolute !m-[0] bottom-[-194.6px] left-[35px] object-contain z-[1]"
        alt=""
        src="/decoimgarrow-1@2x.png"
      />
    </section>
  );
};

export default AlignmentGrid;
