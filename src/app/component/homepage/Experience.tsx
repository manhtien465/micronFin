'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

import Title from '../Title';
import Contairner from '@/app/contairner';

interface ExperienceProps {
  data: any;
}

const Experience: React.FC<ExperienceProps> = ({ data }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="experience" className="relative">
      <Image
        className="z-10 hidden xl:flex absolute bottom-[-80px] right-0 w-[226px] h-[226px]"
        src="/images/DotsViews.svg"
        alt="dots"
        width={226}
        height={226}
      />
      <Image
        className="z-10 flex xl:hidden absolute bottom-[-50px] right-0 w-[144px] h-[104px] "
        src="/images/DotsViewsResponsive.svg"
        alt="dots"
        width={226}
        height={226}
      />
      <Contairner>
        <div className="flex flex-col sm:flex-row  justify-center items-center mt-12 sm:mt-36">
          <div className="w-full sm:w-1/2 relative">
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}${data.experience.image.data.attributes.formats.thumbnail.url}`}
              alt={data.experience.image.data.attributes.alternativeText}
              layout="responsive"
              width="628"
              height="600"
            />
            <span className="absolute bottom-6 right-9 sm:bottom-11 sm:right-[60px] bg-[#2D64F0] text-[#fff] px-[18px] py-[14px] sm:px-8 sm:py-6 font-bold text-2xl leading-[34px] sm:text-4xl sm:leading-10 text-center ">
              {data.experience.title}
            </span>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-anchor-placement="top-bottom"
            className="relative w-full sm:w-1/2 flex flex-col items-start rounded-r-lg bg-[#fff6f3] pt-8 px-5 pb-11 sm:pt-16 sm:pr-[67px] sm:pl-[76px] sm:pb-[86px]"
          >
            <Title titlecustom="" title="Experience" align="items-start" />
            <p className="text-base leading-7 sm:text-2xl sm:leading-9 text-left mt-6 sm:mt-14 text-[#404040]">
              {data.experience.description}
            </p>
            <Image
              className="absolute top-0 right-0 w-[64px] h-[64px] sm:w-[88px] sm:h-[88px]"
              src="/images/Experience_Icon.svg"
              alt="ExperienceIcon"
              width="88"
              height="88"
            />
          </div>
        </div>
      </Contairner>
    </div>
  );
};

export default Experience;
