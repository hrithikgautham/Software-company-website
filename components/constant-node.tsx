import type { NextPage } from "next";
import { Button } from "@mui/material";

const ConstantNode: NextPage = () => {
  return (
    <div className="w-[1353px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-34xl text-gray-gray-900 font-footer-footer-sm">
      <div className="w-[1145px] flex flex-row items-center justify-center [row-gap:20px] max-w-full mq1050:flex-wrap">
        <div className="w-[531px] flex flex-col items-start justify-start py-5 px-0 box-border gap-[75px] min-w-[531px] max-w-full mq450:gap-[19px_75px] mq750:gap-[37px_75px] mq750:min-w-full mq1050:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[28px] max-w-full">
            <div className="relative leading-[71px] inline-block max-w-full mq450:text-8xl mq450:leading-[43px] mq750:text-17xl mq750:leading-[57px]">
              <p className="m-0">
                <span className="text-26xl">
                  <span className="font-light font-footer-footer-sm text-gray-gray-900">{`Great `}</span>
                  <b className="font-footer-footer-sm [background:linear-gradient(180deg,_#de4396,_rgba(13,_28,_159,_0))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Product
                  </b>
                </span>
                <span>
                  <span className="text-26xl">
                    <span className="font-light"> is</span>
                  </span>
                </span>
                <span>
                  <span>
                    <span className="font-light"></span>
                  </span>
                </span>
              </p>
              <p className="m-0">
                <span>
                  <span className="font-extrabold">
                    <span>{`built by great `}</span>
                    <span className="[background:linear-gradient(225deg,_#f7666f,_#406aff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      teams
                    </span>
                  </span>
                </span>
              </p>
            </div>
            <div className="self-stretch h-[58px] relative text-lg leading-[36px] text-gray-gray-700 inline-block shrink-0">
              We help build and manage a team of world-class developers to bring
              your vision to life
            </div>
          </div>
          <Button
            className="w-[175px] h-[52px]"
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fafafa",
              fontSize: "14",
              background: "#3d63ea",
              borderRadius: "5px",
              "&:hover": { background: "#3d63ea" },
              width: 175,
              height: 53,
            }}
          >
            Let’s get started!
          </Button>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start min-w-[399px] max-w-full mq750:min-w-full">
          <img
            className="self-stretch h-[546px] relative max-w-full overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src="/Software-company-website/herowrapper--imagecenter@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default ConstantNode;
