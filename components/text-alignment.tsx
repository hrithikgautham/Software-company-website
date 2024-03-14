import type { NextPage } from "next";
import RoundedRectangle from "./rounded-rectangle";
import RotationAngle from "./rotation-angle";
import BlogPost from "./blog-post";

const TextAlignment: NextPage = () => {
  return (
    <section className="self-stretch flex flex-col items-end justify-start pt-0 px-px pb-[117px] box-border gap-[66px] max-w-full text-left text-lg text-gray-gray-900 font-footer-footer-sm lg:pb-[76px] lg:box-border mq450:gap-[16px_66px] mq750:gap-[33px_66px] mq750:pb-[49px] mq750:box-border">
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[27px] box-border max-w-full">
        <img
          className="h-[0.3px] flex-1 relative max-w-full overflow-hidden"
          alt=""
        />
      </div>
      <div className="w-[1354px] flex flex-row items-start justify-start pt-0 pb-[30px] pr-0 pl-5 box-border max-w-full">
        <div className="w-[1250px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[15px] max-w-full">
          <div className="flex flex-row items-start justify-start py-0 px-[38px] box-border max-w-full">
            <div className="flex flex-col items-end justify-start gap-[88px] max-w-full mq750:gap-[22px_88px] mq1050:gap-[44px_88px]">
              <RoundedRectangle
                whyCutomersLove="How development "
                workingWithUs="through Alcaline works"
                propAlignSelf="unset"
                propWidth="964px"
                propWidth1="474px"
                propFlex="unset"
              />
              <div className="flex flex-row items-start justify-center gap-[71px] lg:flex-wrap mq750:gap-[71px_18px] mq1050:gap-[71px_35px]">
                <div className="h-[159px] w-[299px] rounded-4xs bg-base-white box-border flex flex-col items-start justify-start pt-[22px] pb-[26px] pr-[31px] pl-[21px] gap-[15px] border-[1px] border-solid border-shade-primary-lite-bg">
                  <div className="w-[299px] h-[159px] relative rounded-4xs bg-base-white box-border hidden border-[1px] border-solid border-shade-primary-lite-bg" />
                  <div className="flex flex-row items-start justify-start gap-[8px]">
                    <b className="relative text-transparent !bg-clip-text [background:linear-gradient(225deg,_#f76680,_#57007b)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[1]">
                      #1
                    </b>
                    <b className="relative z-[1]">Assemble the right team</b>
                  </div>
                  <div className="self-stretch flex-1 relative text-sm leading-[20px] text-gray-gray-600 z-[1]">
                    We handle all aspects of vetting and choosing the right team
                    that you don't have the time, expertise, or desire to do.
                  </div>
                </div>
                <RotationAngle
                  perspective="#3"
                  techArchitecture="Tech architecture"
                  weBreakMonolithicAppsInto="We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently"
                />
                <div className="h-[159px] w-[299px] rounded-4xs bg-base-white box-border flex flex-col items-start justify-start pt-[22px] px-[21px] pb-[26px] gap-[15px] border-[1px] border-solid border-shade-primary-lite-bg">
                  <div className="w-[299px] h-[159px] relative rounded-4xs bg-base-white box-border hidden border-[1px] border-solid border-shade-primary-lite-bg" />
                  <div className="flex flex-row items-start justify-start gap-[9px]">
                    <b className="relative text-transparent !bg-clip-text [background:linear-gradient(225deg,_#f76680,_#57007b)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[1]">
                      #5
                    </b>
                    <b className="relative z-[1]">Code reviews</b>
                  </div>
                  <div className="w-[245px] flex-1 relative text-sm leading-[20px] text-gray-gray-600 inline-block z-[1]">
                    Code reviews before release help detect issues like memory
                    leaks, file leaks, performance signs, and general bad smells
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[6px] max-w-full">
            <div className="flex-1 overflow-x-auto flex flex-col items-end justify-start max-w-full mq1050:min-w-full">
              <div className="w-[1182px] h-[30px] relative">
                <div className="absolute top-[30px] left-[0px] box-border w-[1182px] h-0.5 border-t-[2px] border-solid border-gradient-primary-bg" />
                <div className="absolute top-[0px] left-[180.1px] box-border w-0.5 h-[30px] z-[1] border-r-[2px] border-solid border-gradient-primary-bg" />
                <div className="absolute top-[0px] left-[550.1px] box-border w-0.5 h-[30px] z-[1] border-r-[2px] border-solid border-gradient-primary-bg" />
                <div className="absolute top-[0px] left-[940.1px] box-border w-0.5 h-[30px] z-[1] border-r-[2px] border-solid border-gradient-primary-bg" />
              </div>
              <div className="w-[1108px] flex flex-row items-start justify-center py-0 px-5 box-border">
                <div className="h-[30px] w-[770px] flex flex-row items-start justify-between gap-[20px] max-w-full">
                  <div className="h-[30px] w-0.5 relative box-border z-[1] border-r-[2px] border-solid border-gradient-primary-bg" />
                  <div className="h-[30px] flex flex-col items-start justify-start py-0 pr-2 pl-0 box-border">
                    <div className="w-0.5 h-[30px] relative box-border z-[1] border-r-[2px] border-solid border-gradient-primary-bg" />
                  </div>
                  <div className="h-[30px] w-0.5 relative box-border z-[1] border-r-[2px] border-solid border-gradient-primary-bg" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
              <img
                className="w-[42px] h-[42px] relative object-cover"
                alt=""
                src="/trophy-perspective-matte@2x.png"
              />
            </div>
          </div>
          <div className="flex flex-row items-start justify-end py-0 pr-[68px] pl-[93px] box-border max-w-full lg:pl-[46px] lg:pr-[34px] lg:box-border mq750:pl-[23px] mq750:box-border">
            <div className="w-[1069px] flex flex-row items-start justify-between gap-[20px] max-w-full mq1050:flex-wrap">
              <div className="h-[159px] w-[299px] rounded-4xs bg-base-white box-border flex flex-col items-start justify-start pt-[22px] px-[21px] pb-[26px] gap-[15px] border-[1px] border-solid border-shade-primary-lite-bg">
                <div className="w-[299px] h-[159px] relative rounded-4xs bg-base-white box-border hidden border-[1px] border-solid border-shade-primary-lite-bg" />
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <b className="relative text-transparent !bg-clip-text [background:linear-gradient(225deg,_#f76680,_#57007b)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[1]">
                    #2
                  </b>
                  <b className="relative z-[1]">Sprint planning</b>
                </div>
                <div className="w-[245px] flex-1 relative text-sm leading-[20px] text-gray-gray-600 inline-block z-[1]">
                  Sprint roadmap is a collective planning effort. Team members
                  collaborate to clarify items and ensure shared understanding.
                </div>
              </div>
              <RotationAngle
                perspective="#4"
                techArchitecture={`Standups & weekly demos`}
                weBreakMonolithicAppsInto="Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns."
                propWidth="309px"
                propAlignSelf="stretch"
              />
              <div className="w-[299px] rounded-4xs bg-base-white box-border flex flex-col items-start justify-start pt-[22px] px-[21px] pb-[26px] gap-[15px] border-[1px] border-solid border-shade-primary-lite-bg">
                <div className="w-[299px] h-[159px] relative rounded-4xs bg-base-white box-border hidden border-[1px] border-solid border-shade-primary-lite-bg" />
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <b className="relative text-transparent !bg-clip-text [background:linear-gradient(225deg,_#f76680,_#57007b)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[1]">
                    #6
                  </b>
                  <b className="relative z-[1]">Iterative delivery</b>
                </div>
                <div className="w-[245px] h-[74px] relative text-sm leading-[20px] text-gray-gray-600 inline-block shrink-0 z-[1]">
                  We divide the implementation process into several checkpoints
                  rather than a single deadline.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RoundedRectangle
        whyCutomersLove="Featured "
        workingWithUs="Resources"
        propAlignSelf="stretch"
        propWidth="unset"
        propWidth1="474px"
        propFlex="unset"
      />
      <div className="mr-[-1px] w-[1440px] overflow-x-auto flex flex-row items-start justify-start gap-[60px] max-w-full text-base text-gray-gray-800 mq750:gap-[60px_30px]">
        <BlogPost constantNode="/rectangle-10@2x.png" />
        <BlogPost constantNode="/rectangle-10-1@2x.png" />
        <BlogPost constantNode="/rectangle-10-2@2x.png" />
        <BlogPost constantNode="/rectangle-10-3@2x.png" />
        <BlogPost constantNode="/rectangle-10-4@2x.png" />
      </div>
    </section>
  );
};

export default TextAlignment;
