import type { NextPage } from "next";

export type BlogPostType = {
  constantNode?: string;
};

const BlogPost: NextPage<BlogPostType> = ({ constantNode }) => {
  return (
    <div className="w-[254px] shrink-0 flex flex-col items-end justify-start gap-[20px] text-left text-base text-gray-gray-800 font-footer-footer-sm">
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
        <img
          className="self-stretch h-[175px] relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src={constantNode}
        />
        <div className="self-stretch flex flex-row items-start justify-start">
          <div className="flex-1 relative leading-[25px] font-medium">
            How to Build a Scalable Application up to 1 Million Users on AWS
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 pr-0 pl-5 gap-[15px] text-brand-primary-bg">
        <div className="relative leading-[25px] font-medium">Read More</div>
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          alt=""
          src="/Software-company-website/arrowrightline.svg"
        />
      </div>
    </div>
  );
};

export default BlogPost;
