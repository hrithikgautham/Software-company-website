import type { NextPage } from "next";

const NumberNode: NextPage = () => {
  return (
    <section className="w-[1416px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-16xl text-gray-gray-900 font-footer-footer-sm">
      <div className="w-[1254px] flex flex-col items-start justify-start gap-[20px] max-w-full">
        <div className="w-[69px] h-[5px] relative [background:linear-gradient(225deg,_#f76680,_#57007b)]" />
        <div className="self-stretch flex flex-col items-start justify-start max-w-full">
          <h2 className="m-0 w-[412px] relative text-inherit leading-[55px] inline-block max-w-full font-inherit mq450:text-2xl mq450:leading-[33px] mq750:text-9xl mq750:leading-[44px]">
            <p className="m-0">Meet the People</p>
            <p className="m-0">
              <b>We are Working With</b>
            </p>
          </h2>
          <div className="self-stretch flex flex-row items-start justify-end mt-[-5px]">
            <div className="flex flex-row items-start justify-start gap-[22px]">
              <img
                className="h-[45px] w-[45px] relative min-h-[45px]"
                alt=""
                src="/btnleft.svg"
              />
              <div className="h-[45px] w-[45px] relative min-h-[45px] flex items-center justify-center">
                <img
                  className="h-full w-full min-h-[45px] object-contain absolute left-[0px] top-[14px] [transform:scale(2.956)]"
                  alt=""
                  src="/btnright.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumberNode;
