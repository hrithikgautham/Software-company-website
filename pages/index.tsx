import type { NextPage } from "next";
import InputSplitter from "../components/input-splitter";
import ConstantNode from "../components/constant-node";
import NestingNode from "../components/nesting-node";
import CircularLinkedList from "../components/circular-linked-list";
import NumberNode from "../components/number-node";
import MethodNode from "../components/method-node";
import AlignmentGrid from "../components/alignment-grid";
import TextProperties from "../components/text-properties";
import RotationHandler from "../components/rotation-handler";
import SnapPoints1 from "../components/snap-points1";
import SnapPoints from "../components/snap-points";
import CellSizing from "../components/cell-sizing";
import ReflectingNode from "../components/reflecting-node";
import TextAlignment from "../components/text-alignment";
import FilterNode from "../components/filter-node";
import ExpNode from "../components/exp-node";

const SoftwareCompanyWebsite: NextPage = () => {
  return (
    <div className="w-full relative bg-base-white overflow-hidden flex flex-col items-end justify-start gap-[32px] tracking-[normal] text-center text-base text-gray-gray-500 font-footer-footer-sm mq750:gap-[16px_32px]">
      <div className="w-[777.6px] h-[765.2px] relative hidden max-w-full z-[0]">
        <div className="absolute top-[765.19px] left-[464.3px] rounded-tl-31xl rounded-tr-[120px] rounded-br-[90px] rounded-bl-31xl [background:linear-gradient(225deg,_#f76680,_#57007b)] w-[582.8px] h-[518.3px] [transform:_rotate(-142.81deg)] [transform-origin:0_0]" />
        <div className="absolute top-[88.7px] left-[237.2px] w-[393.2px] h-[671px]">
          <img
            className="absolute top-[284px] left-[0px] w-[393.2px] h-[387px]"
            alt=""
            src="/group-10.svg"
          />
          <img
            className="absolute top-[0px] left-[24px] w-[71px] h-[69.7px]"
            alt=""
            src="/group-11.svg"
          />
        </div>
      </div>
      <div className="w-[604px] h-[597px] relative rounded-[50%] bg-lavender hidden max-w-full z-[1]" />
      <img
        className="w-[781px] h-[781px] relative object-contain hidden max-w-full z-[2]"
        alt=""
        src="/group-16@2x.png"
      />
      <img
        className="w-[781px] h-[781px] relative object-contain hidden max-w-full z-[3]"
        alt=""
        src="/group-19@2x.png"
      />
      <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[74.69999999999982px] box-border gap-[69px] max-w-full mq450:gap-[17px_69px] mq450:pb-8 mq450:box-border mq750:gap-[34px_69px] mq1050:pb-[49px] mq1050:box-border">
        <InputSplitter />
        <ConstantNode />
      </section>
      <NestingNode />
      <div className="w-[39px] h-14 relative hidden z-[6]">
        <img
          className="absolute top-[17px] left-[0px] w-[39px] h-[39px] overflow-hidden object-contain"
          alt=""
          src="/rightarrow-20-1@2x.png"
        />
        <div className="absolute top-[6px] left-[18px] rounded-3xs [background:linear-gradient(225deg,_#f76680,_#57007b)] w-[3px] h-2" />
        <div className="absolute top-[0px] left-[18px] rounded-3xs [background:linear-gradient(225deg,_#f76680,_#57007b)] w-[3px] h-[3px]" />
      </div>
      <div className="w-[121px] h-[153px] relative hidden z-[7]">
        <div className="absolute top-[0px] left-[-666px] hidden flex-col items-center justify-center gap-[10px]">
          <img
            className="w-[85px] h-[85px] relative"
            alt=""
            src="/group-5.svg"
          />
          <div className="self-stretch h-[18px] relative">
            <img
              className="absolute top-[0px] left-[16.2px] w-[17.6px] h-[18px] object-cover"
              alt=""
              src="/star-perspective-matte@2x.png"
            />
            <img
              className="absolute top-[0px] left-[38.2px] w-[17.6px] h-[18px] object-cover"
              alt=""
              src="/star-perspective-matte@2x.png"
            />
            <img
              className="absolute top-[0px] left-[60.2px] w-[17.6px] h-[18px] object-cover"
              alt=""
              src="/star-perspective-matte@2x.png"
            />
            <img
              className="absolute top-[0px] left-[82.2px] w-[17.6px] h-[18px] object-cover"
              alt=""
              src="/star-perspective-matte@2x.png"
            />
            <img
              className="absolute top-[0px] left-[104.2px] w-[17.6px] h-[18px] object-cover"
              alt=""
              src="/star-perspective-matte@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-col items-center justify-center gap-[2px]">
            <div className="self-stretch h-[25px] relative leading-[25px] font-medium inline-block">
              Romeena De Silva
            </div>
            <div className="self-stretch h-[19px] relative text-xs leading-[162.02%] text-gray-gray-400 inline-block box-border pl-5 pr-5">
              Janet Cosmetics
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[-216px] hidden flex-col items-center justify-center gap-[10px]">
          <img
            className="w-[85px] h-[85px] relative"
            alt=""
            src="/group-7.svg"
          />
          <div className="self-stretch h-[18px] relative">
            <img
              className="absolute top-[0px] left-[16.2px] w-[17.6px] h-[18px] object-cover"
              alt=""
              src="/star-perspective-matte@2x.png"
            />
            <img
              className="absolute top-[0px] left-[38.2px] w-[17.6px] h-[18px] object-cover"
              alt=""
              src="/star-perspective-matte@2x.png"
            />
            <img
              className="absolute top-[0px] left-[60.2px] w-[17.6px] h-[18px] object-cover"
              alt=""
              src="/star-perspective-matte@2x.png"
            />
            <img
              className="absolute top-[0px] left-[82.2px] w-[17.6px] h-[18px] object-cover"
              alt=""
              src="/star-perspective-matte@2x.png"
            />
            <img
              className="absolute top-[0px] left-[104.2px] w-[17.6px] h-[18px] object-cover"
              alt=""
              src="/star-perspective-matte@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-col items-center justify-center gap-[2px]">
            <div className="self-stretch h-[25px] relative leading-[25px] font-medium inline-block">
              Romeena De Silva
            </div>
            <div className="self-stretch h-[19px] relative text-xs leading-[162.02%] text-gray-gray-400 inline-block box-border pl-5 pr-5">
              Janet Cosmetics
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[-865px] w-full h-[171px] hidden text-sm">
          <img
            className="absolute top-[0px] left-[20.5px] w-20 h-20"
            alt=""
            src="/group-4.svg"
          />
          <div className="absolute top-[106px] left-[31.7px] w-[57.7px] h-[13px]">
            <img
              className="absolute top-[0px] left-[0px] w-[12.7px] h-[13px] object-cover"
              alt=""
              src="/star-perspective-matte-10@2x.png"
            />
            <img
              className="absolute top-[0px] left-[15px] w-[12.7px] h-[13px] object-cover"
              alt=""
              src="/star-perspective-matte-10@2x.png"
            />
            <img
              className="absolute top-[0px] left-[30px] w-[12.7px] h-[13px] object-cover"
              alt=""
              src="/star-perspective-matte-10@2x.png"
            />
            <img
              className="absolute top-[0px] left-[45px] w-[12.7px] h-[13px] object-cover"
              alt=""
              src="/star-perspective-matte-10@2x.png"
            />
          </div>
          <div className="absolute top-[127px] left-[0px] flex flex-col items-center justify-center gap-[2px]">
            <div className="self-stretch h-6 relative leading-[24px] font-semibold inline-block">
              Romeena De Silva
            </div>
            <div className="flex-1 relative text-2xs leading-[162.02%] text-gray-gray-400">
              Janet Cosmetics
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[0px] flex flex-col items-center justify-center gap-[8px] w-full h-full text-sm">
          <img className="w-20 h-20 relative" alt="" src="/group-6.svg" />
          <div className="w-[98px] h-[13px] relative">
            <img
              className="absolute top-[0px] left-[20.15px] w-[12.7px] h-[13px] object-cover"
              alt=""
              src="/star-perspective-matte-10@2x.png"
            />
            <img
              className="absolute top-[0px] left-[35.15px] w-[12.7px] h-[13px] object-cover"
              alt=""
              src="/star-perspective-matte-10@2x.png"
            />
            <img
              className="absolute top-[0px] left-[50.15px] w-[12.7px] h-[13px] object-cover"
              alt=""
              src="/star-perspective-matte-10@2x.png"
            />
            <img
              className="absolute top-[0px] left-[65.15px] w-[12.7px] h-[13px] object-cover"
              alt=""
              src="/star-perspective-matte-10@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-col items-center justify-center gap-[2px]">
            <div className="self-stretch h-6 relative leading-[24px] font-semibold inline-block">
              Romeena De Silva
            </div>
            <div className="h-[18px] relative text-2xs leading-[162.02%] text-gray-gray-400 inline-block">
              Janet Cosmetics
            </div>
          </div>
        </div>
      </div>
      <CircularLinkedList />
      <NumberNode />
      <MethodNode />
      <section className="w-[1440px] !m-[0] absolute top-[3511px] left-[0px] flex flex-row items-start justify-start max-w-full">
        <img
          className="h-[1777px] flex-1 relative max-w-full overflow-hidden"
          alt=""
          src="/group-18.svg"
        />
        <img
          className="h-[416px] w-[601px] absolute !m-[0] top-[303px] left-[104px] rounded-3xs object-cover z-[2]"
          loading="lazy"
          alt=""
          src="/casestudy--image@2x.png"
        />
        <img
          className="h-[416px] w-[601px] absolute !m-[0] bottom-[607px] left-[104px] rounded-3xs object-cover z-[2]"
          alt=""
          src="/casestudy--image-1@2x.png"
        />
        <img
          className="h-[416px] w-[601px] absolute !m-[0] bottom-[156px] left-[104px] rounded-3xs object-cover z-[2]"
          alt=""
          src="/casestudy--image-2@2x.png"
        />
      </section>
      <img
        className="w-full h-[1142px] absolute !m-[0] right-[0px] bottom-[3024px] left-[0px] max-w-full overflow-hidden shrink-0"
        alt=""
        src="/backgroundwrapper.svg"
      />
      <div className="w-[1233px] hidden flex-col items-end justify-end gap-[40px] max-w-full z-[13] text-16xl text-gray-gray-900">
        <div className="self-stretch flex flex-col items-start justify-start gap-[55px] max-w-full">
          <div className="self-stretch flex flex-col items-center justify-between min-h-[133px] max-w-full">
            <div className="w-[109px] h-[5px] relative [background:linear-gradient(225deg,_#f76680,_#57007b)]" />
            <div className="w-[514px] h-[108px] relative leading-[55px] inline-block shrink-0 max-w-full box-border pl-5 pr-5 mq450:text-2xl mq450:leading-[33px] mq750:text-9xl mq750:leading-[44px]">
              <p className="m-0">{`Our recent `}</p>
              <p className="m-0">
                <b>{`Case studies `}</b>
              </p>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[31px] max-w-full text-left">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[31px] max-w-full">
              <div className="h-[655px] flex-1 relative min-w-[391px] max-w-full mq450:min-w-full">
                <div className="absolute h-[93.89%] w-full top-[0%] right-[0%] bottom-[6.11%] left-[0%]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-base-white hidden" />
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs overflow-hidden" />
                </div>
                <div className="absolute h-[27.63%] w-[86.02%] top-[0%] right-[13.98%] bottom-[72.37%] left-[0%] flex flex-col items-start justify-start gap-[21px] max-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                    <b className="self-stretch h-[55px] relative leading-[55px] inline-block mq450:text-2xl mq450:leading-[33px] mq750:text-9xl mq750:leading-[44px]">
                      Case study name
                    </b>
                    <div className="self-stretch h-[69px] relative text-sm leading-[162.02%] text-gray-gray-700 inline-block box-border pr-[15px]">
                      A Website is an extension of yourself and we can help you
                      to express it properly. Your website is your number one
                      marketing asset because we live in a digital age.
                    </div>
                  </div>
                  <div className="w-[114px] flex flex-row items-center justify-center py-0 pr-5 pl-0 box-border gap-[5px] text-sm">
                    <div className="h-4 flex-1 relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(225deg,_#f76680,_#57007b)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block">
                      Raed more
                    </div>
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0"
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
                <img
                  className="absolute h-[63.51%] w-full top-[34.05%] right-[0%] bottom-[2.44%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/casestudy--image-3@2x.png"
                />
              </div>
              <div className="h-[655px] flex-1 relative min-w-[391px] max-w-full mq450:min-w-full">
                <div className="absolute h-[93.89%] w-full top-[0%] right-[0%] bottom-[6.11%] left-[0%]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-base-white hidden" />
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs overflow-hidden" />
                </div>
                <div className="absolute h-[27.63%] w-[86.02%] top-[0%] right-[13.98%] bottom-[72.37%] left-[0%] flex flex-col items-start justify-start gap-[21px] max-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                    <b className="self-stretch h-[55px] relative leading-[55px] inline-block mq450:text-2xl mq450:leading-[33px] mq750:text-9xl mq750:leading-[44px]">
                      Case study name
                    </b>
                    <div className="self-stretch h-[69px] relative text-sm leading-[162.02%] text-gray-gray-700 inline-block box-border pr-[15px]">
                      A Website is an extension of yourself and we can help you
                      to express it properly. Your website is your number one
                      marketing asset because we live in a digital age.
                    </div>
                  </div>
                  <div className="w-[114px] flex flex-row items-center justify-center py-0 pr-5 pl-0 box-border gap-[5px] text-sm">
                    <div className="h-4 flex-1 relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(225deg,_#f76680,_#57007b)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block">
                      Raed more
                    </div>
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0"
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
                <img
                  className="absolute h-[63.51%] w-full top-[34.05%] right-[0%] bottom-[2.44%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/casestudy--image-4@2x.png"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[31px] max-w-full">
              <div className="h-[655px] flex-1 relative min-w-[391px] max-w-full mq450:min-w-full">
                <div className="absolute h-[93.89%] w-full top-[0%] right-[0%] bottom-[6.11%] left-[0%]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-base-white hidden" />
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs overflow-hidden" />
                </div>
                <div className="absolute h-[27.63%] w-[86.02%] top-[0%] right-[13.98%] bottom-[72.37%] left-[0%] flex flex-col items-start justify-start gap-[21px] max-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                    <b className="self-stretch h-[55px] relative leading-[55px] inline-block mq450:text-2xl mq450:leading-[33px] mq750:text-9xl mq750:leading-[44px]">
                      Case study name
                    </b>
                    <div className="self-stretch h-[69px] relative text-sm leading-[162.02%] text-gray-gray-700 inline-block box-border pr-[15px]">
                      A Website is an extension of yourself and we can help you
                      to express it properly. Your website is your number one
                      marketing asset because we live in a digital age.
                    </div>
                  </div>
                  <div className="w-[114px] flex flex-row items-center justify-center py-0 pr-5 pl-0 box-border gap-[5px] text-sm">
                    <div className="h-4 flex-1 relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(225deg,_#f76680,_#57007b)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block">
                      Raed more
                    </div>
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0"
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
                <img
                  className="absolute h-[63.51%] w-full top-[34.05%] right-[0%] bottom-[2.44%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/casestudy--image-5@2x.png"
                />
              </div>
              <div className="h-[655px] flex-1 relative min-w-[391px] max-w-full mq450:min-w-full">
                <div className="absolute h-[93.89%] w-full top-[0%] right-[0%] bottom-[6.11%] left-[0%]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-base-white hidden" />
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs overflow-hidden" />
                </div>
                <div className="absolute h-[27.63%] w-[86.02%] top-[0%] right-[13.98%] bottom-[72.37%] left-[0%] flex flex-col items-start justify-start gap-[21px] max-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                    <b className="self-stretch h-[55px] relative leading-[55px] inline-block mq450:text-2xl mq450:leading-[33px] mq750:text-9xl mq750:leading-[44px]">
                      Case study name
                    </b>
                    <div className="self-stretch h-[69px] relative text-sm leading-[162.02%] text-gray-gray-700 inline-block box-border pr-[15px]">
                      A Website is an extension of yourself and we can help you
                      to express it properly. Your website is your number one
                      marketing asset because we live in a digital age.
                    </div>
                  </div>
                  <div className="w-[114px] flex flex-row items-center justify-center py-0 pr-5 pl-0 box-border gap-[5px] text-sm">
                    <div className="h-4 flex-1 relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(225deg,_#f76680,_#57007b)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block">
                      Raed more
                    </div>
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0"
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
                <img
                  className="absolute h-[63.51%] w-full top-[34.05%] right-[0%] bottom-[2.44%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/casestudy--image-6@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[290px] flex flex-row items-start justify-start py-0 pr-0 pl-5 box-border gap-[12px] text-left text-xl">
          <div className="h-[27px] flex-1 relative leading-[136.52%] font-semibold text-transparent !bg-clip-text [background:linear-gradient(225deg,_#f76680,_#57007b)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block mq450:text-base mq450:leading-[22px]">
            Read more case studies
          </div>
          <img
            className="h-[27px] w-[27px] relative overflow-hidden shrink-0"
            alt=""
            src="/arrowrightsline-4.svg"
          />
        </div>
      </div>
      <div className="w-[72px] h-[72px] relative rounded-[50%] [background:linear-gradient(225deg,_#f76680,_#57007b)] hidden z-[14]" />
      <AlignmentGrid />
      <section className="w-[1083px] flex flex-row items-start justify-start pt-0 pb-[135px] pr-0 pl-5 box-border max-w-full text-center text-16xl text-gray-gray-900 font-footer-footer-sm lg:pb-[88px] lg:box-border mq450:pb-[37px] mq450:box-border mq1050:pb-[57px] mq1050:box-border">
        <div className="w-[979px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[81px] max-w-full mq750:gap-[20px_81px] mq1050:gap-[40px_81px]">
          <div className="w-[580px] flex flex-row items-start justify-between gap-[20px] max-w-full">
            <div className="h-[18px] w-[18px] relative rounded-[50%] [background:linear-gradient(225deg,_#f76680,_#57007b)] z-[1]" />
            <div className="w-[474px] flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border max-w-[calc(100%_-_38px)]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px] z-[1]">
                <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                  <div className="h-[5px] w-[69px] relative [background:linear-gradient(225deg,_#f76680,_#57007b)]" />
                </div>
                <h2 className="m-0 self-stretch relative text-inherit leading-[55px] font-inherit mq450:text-2xl mq450:leading-[33px] mq750:text-9xl mq750:leading-[44px]">
                  <p className="m-0">{`Our recent `}</p>
                  <p className="m-0">
                    <b>{` Case studies `}</b>
                  </p>
                </h2>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-end max-w-full text-left text-xl">
            <div className="w-[723px] flex flex-col items-start justify-start gap-[35px] max-w-full mq750:gap-[17px_35px]">
              <TextProperties />
              <TextProperties
                propBackgroundColor="#f0fff7"
                propBackgroundColor1="#f0fff7"
              />
              <div className="self-stretch flex flex-col items-end justify-start gap-[41px] max-w-full mq750:gap-[20px_41px]">
                <TextProperties
                  propBackgroundColor="#fff4f4"
                  propBackgroundColor1="#fff4f4"
                />
                <div className="flex flex-row items-start justify-start gap-[12px]">
                  <div className="relative leading-[136.52%] font-semibold text-transparent !bg-clip-text [background:linear-gradient(225deg,_#f76680,_#57007b)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[1] mq450:text-base mq450:leading-[22px]">
                    Read more case studies
                  </div>
                  <img
                    className="h-[27px] w-[27px] relative overflow-hidden shrink-0 min-h-[27px] z-[1]"
                    alt=""
                    src="/arrowrightsline-4.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-2 h-2 relative rounded-[50%] [background:linear-gradient(225deg,_#f76680,_#57007b)] hidden z-[17]" />
      <section className="w-[1358px] flex flex-row items-start justify-start pt-0 pb-[158px] pr-0 pl-5 box-border max-w-full lg:pb-[103px] lg:box-border mq750:pb-11 mq750:box-border mq1050:pb-[67px] mq1050:box-border">
        <div className="w-[1253px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[95px] max-w-full mq450:gap-[24px_95px] mq750:gap-[47px_95px]">
          <RotationHandler />
          <SnapPoints1 />
          <SnapPoints />
        </div>
      </section>
      <CellSizing />
      <ReflectingNode />
      <TextAlignment />
      <FilterNode />
      <ExpNode />
    </div>
  );
};

export default SoftwareCompanyWebsite;
