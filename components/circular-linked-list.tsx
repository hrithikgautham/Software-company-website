import type { NextPage } from "next";

const CircularLinkedList: NextPage = () => {
  return (
    <section className="w-[1355px] flex flex-row items-start justify-start pt-0 pb-[135px] pr-0 pl-5 box-border max-w-full text-left text-16xl text-gray-gray-900 font-footer-footer-sm mq750:pb-[88px] mq750:box-border">
      <div className="w-[1252px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[96px] max-w-full mq450:gap-[96px_24px] mq750:gap-[96px_48px] mq1050:flex-wrap">
        <div className="w-[535px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border min-w-[535px] max-w-full mq750:min-w-full mq1050:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[51px] max-w-full mq750:gap-[25px_51px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full">
              <div className="w-[474px] flex flex-col items-start justify-start gap-[20px] max-w-full">
                <div className="w-[69px] h-[5px] relative [background:linear-gradient(225deg,_#f76680,_#57007b)]" />
                <h2 className="m-0 self-stretch relative text-inherit leading-[55px] font-inherit mq450:text-2xl mq450:leading-[33px] mq750:text-9xl mq750:leading-[44px]">
                  <span>Leading companies trust us</span>
                  <b> to develop software</b>
                </h2>
              </div>
              <div className="self-stretch relative text-lg leading-[36px] text-gray-gray-600">
                <span>{`We `}</span>
                <span className="[background:linear-gradient(225deg,_#f76680,_#57007b)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  add development capacity
                </span>
                <span>
                  {" "}
                  to tech teams. Our value isn’t limited to building teams but
                  is equally distributed across the project lifecycle. We are a
                  custom software development company that guarantees the
                  successful delivery of your project.
                </span>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[15px] text-base text-brand-primary-bg">
              <div className="relative leading-[25px] font-medium">
                See more Informations
              </div>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src="/Software-company-website/arrowrightline.svg"
              />
            </div>
          </div>
        </div>
        <img
          className="h-[460px] flex-1 relative max-w-full overflow-hidden min-w-[391px] mq750:min-w-full"
          loading="lazy"
          alt=""
          src="/Software-company-website/abouusvideo.svg"
        />
      </div>
    </section>
  );
};

export default CircularLinkedList;
