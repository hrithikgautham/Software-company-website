import type { NextPage } from "next";
import { Button } from "@mui/material";

const FilterNode: NextPage = () => {
  return (
    <section className="w-[1355px] flex flex-row items-start justify-start pt-0 pb-[67px] pr-0 pl-5 box-border max-w-full text-left text-16xl font-footer-footer-sm mq450:pb-11 mq450:box-border">
      <div className="w-[1230px] rounded-xl [background:linear-gradient(225deg,_#f1f1f5,_#e4ecf7)] flex flex-row items-start justify-between py-[47px] px-[84px] box-border max-w-full gap-[20px] lg:pl-[42px] lg:pr-[42px] lg:box-border mq750:pl-[21px] mq750:pr-[21px] mq750:box-border mq1050:flex-wrap">
        <div className="h-[285px] w-[1230px] relative rounded-xl [background:linear-gradient(225deg,_#f1f1f5,_#e4ecf7)] hidden max-w-full" />
        <div className="w-[531px] flex flex-col items-start justify-start pt-[41px] px-0 pb-0 box-border min-w-[531px] max-w-full mq750:min-w-full mq1050:flex-1">
          <h2 className="m-0 self-stretch relative text-inherit leading-[55px] font-bold font-inherit text-transparent !bg-clip-text [background:linear-gradient(225deg,_#29272e,_#27272e)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[1] mq450:text-2xl mq450:leading-[33px] mq750:text-9xl mq750:leading-[44px]">
            Hire the best developers and designers around!
          </h2>
        </div>
        <div className="w-[262px] flex flex-row items-start justify-start relative min-w-[262px] mq1050:flex-1">
          <div className="h-[6.6px] w-[34.9px] absolute !m-[0] top-[36.87px] right-[64.8px] rounded-3xs [background:linear-gradient(225deg,_#ffef5e,_#f7936f)] [transform:_rotate(-50.34deg)] [transform-origin:0_0] z-[1]" />
          <div className="h-[6.6px] w-[34.5px] absolute !m-[0] bottom-[29.43px] left-[97.8px] rounded-3xs [background:linear-gradient(225deg,_#ffef5e,_#f7936f)] [transform:_rotate(126.94deg)] [transform-origin:0_0] z-[1]" />
          <div className="flex-1 flex flex-col items-start justify-start gap-[35.19999999999982px] mq450:gap-[18px_35.19999999999982px]">
            <div className="w-[7px] flex flex-row items-start justify-start relative">
              <div className="h-[6.6px] w-[34.5px] absolute !m-[0] bottom-[-16.52px] left-[-34.28px] rounded-3xs [background:linear-gradient(225deg,_#ffef5e,_#f7936f)] [transform:_rotate(-126.94deg)] [transform-origin:0_0] z-[1]" />
              <div className="h-[31.8px] w-[133.3px] flex flex-row items-start justify-start py-0 pr-0 pl-[126.3px] box-border">
                <div className="h-[7px] w-[31.8px] relative rounded-3xs [background:linear-gradient(225deg,_#ffef5e,_#f7936f)] [transform:_rotate(-90deg)] z-[1]" />
              </div>
            </div>
            <Button
              className="self-stretch h-[57px] z-[1]"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fafafa",
                fontSize: "18",
                background: "linear-gradient(225deg, #ffc656, #f16063)",
                borderRadius: "5px",
                "&:hover": {
                  background: "linear-gradient(225deg, #ffc656, #f16063)",
                },
                height: 57,
              }}
            >
              Hire Top Developers
            </Button>
            <div className="h-[31.8px] flex flex-row items-start justify-start py-0 pr-[101px] pl-[126.3px] box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="h-[7px] w-[31.8px] relative rounded-3xs [background:linear-gradient(225deg,_#ffef5e,_#f7936f)] [transform:_rotate(90deg)] z-[1]" />
            </div>
          </div>
          <div className="h-[6.6px] w-[34.9px] absolute !m-[0] right-[59.28px] bottom-[33.47px] rounded-3xs [background:linear-gradient(225deg,_#ffef5e,_#f7936f)] [transform:_rotate(50.34deg)] [transform-origin:0_0] z-[1]" />
        </div>
      </div>
    </section>
  );
};

export default FilterNode;
