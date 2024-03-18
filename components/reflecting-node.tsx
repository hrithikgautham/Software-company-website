import type { NextPage } from "next";
import RoundedRectangle from "./rounded-rectangle";

const ReflectingNode: NextPage = () => {
  return (
    <section className="w-[1272px] flex flex-row items-start justify-start pt-0 pb-[58.69999999999982px] pr-0 pl-5 box-border max-w-full text-left text-lg text-gray-gray-900 font-footer-footer-sm mq750:pb-[38px] mq750:box-border">
      <div className="w-[1084px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[30px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[72px] max-w-full mq750:gap-[18px_72px] mq1050:gap-[36px_72px]">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="flex flex-row items-start justify-start gap-[60px] max-w-full mq750:gap-[60px_30px] mq1050:flex-wrap">
              <div className="flex flex-col items-start justify-start pt-[171px] px-0 pb-0">
                <div className="flex flex-col items-start justify-start">
                  <div className="relative leading-[30px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(225deg,_#f76680,_#57007b)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Backend
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 px-[21px] mt-[-2px]">
                    <div className="h-[3px] w-[25px] relative rounded-10xs [background:linear-gradient(225deg,_#f76680,_#57007b)] z-[1]" />
                  </div>
                </div>
              </div>
              <div className="w-[502px] flex flex-col items-start justify-start gap-[38px] max-w-full mq750:gap-[19px_38px]">
                <RoundedRectangle
                  whyCutomersLove="Our"
                  workingWithUs="Tech Stack"
                  propAlignSelf="stretch"
                  propWidth="unset"
                  propWidth1="unset"
                  propFlex="1"
                />
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap mq450:justify-center">
                  <div className="relative leading-[30px]">Frontend</div>
                  <div className="relative leading-[30px]">Databases</div>
                  <div className="relative leading-[30px]">CMS</div>
                  <div className="relative leading-[30px]">CloudTesting</div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[171px] px-0 pb-0">
                <div className="relative leading-[30px]">DevOps</div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq1050:flex-wrap mq1050:justify-center">
            <img
              className="h-[94px] w-[166px] relative overflow-hidden shrink-0 min-h-[94px]"
              loading="lazy"
              alt=""
              src="/Software-company-website/nodejs.svg"
            />
            <img
              className="h-[94px] w-[166px] relative overflow-hidden shrink-0 object-cover min-h-[94px]"
              loading="lazy"
              alt=""
              src="/Software-company-website/php@2x.png"
            />
            <div className="h-[87px] w-40 flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/Software-company-website/kisspngmysqliphpdatabaselinuxcoding5ac4824a2e87e0-1@2x.png"
              />
            </div>
            <img
              className="h-[94px] w-[166px] relative overflow-hidden shrink-0 min-h-[94px]"
              loading="lazy"
              alt=""
              src="/Software-company-website/java.svg"
            />
            <img
              className="h-[94px] w-[166px] relative overflow-hidden shrink-0 min-h-[94px]"
              loading="lazy"
              alt=""
              src="/Software-company-website/netcore.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[735px] flex flex-row flex-wrap items-start justify-center gap-[12px] max-w-full">
            <img
              className="h-[94px] w-[166px] relative overflow-hidden shrink-0 object-cover min-h-[94px]"
              loading="lazy"
              alt=""
              src="/Software-company-website/python@2x.png"
            />
            <img
              className="h-[94px] w-[166px] relative overflow-hidden shrink-0 min-h-[94px]"
              loading="lazy"
              alt=""
              src="/Software-company-website/rubyonrails.svg"
            />
            <img
              className="h-[94px] w-[166px] relative overflow-hidden shrink-0 min-h-[94px]"
              loading="lazy"
              alt=""
              src="/Software-company-website/go.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border min-w-[131px]">
              <img
                className="self-stretch h-[54px] relative max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/Software-company-website/mon-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReflectingNode;
