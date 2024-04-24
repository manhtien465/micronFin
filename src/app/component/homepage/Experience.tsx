import React from 'react';
import Image from 'next/image';
import Title from '../Title';
import Contairner from '@/app/contairner';
const Experience = () => {
  return (
    <Contairner>
      <div className="flex flex-col sm:flex-row  justify-center items-center mt-12 sm:mt-36">
        <div className="w-full sm:w-1/2 relative">
            <Image
                src="/images/Experience_Img.png"
                alt="Experience"
                layout="responsive"
                width="150"
                height="50"
            />
            <span className="absolute bottom-6 right-9 sm:bottom-11 sm:right-[60px] bg-[#2D64F0] text-[#fff] px-[18px] py-[14px] sm:px-8 sm:py-6 font-bold text-2xl leading-[34px] sm:text-4xl sm:leading-10 text-center ">+16 years</span>
        </div>
        <div className="relative w-full sm:w-1/2 flex flex-col items-start rounded-r-lg bg-[#fff6f3] pt-8 px-5 pb-11 sm:pt-16 sm:pr-[67px] sm:pl-[76px] sm:pb-[86px]">
            <Title titlecustom="" title="Experience" align="items-start"/>
            <p className="text-base leading-7 sm:text-2xl sm:leading-9 text-left mt-6 sm:mt-14 text-[#404040]">Since our establishment, we have diversified into several lines of business, encompassing non-life insurance agency services, technology enablement solutions, and expert consultation services.</p>
            <Image className="absolute top-0 right-0 w-[64px] h-[64px] sm:w-[88px] sm:h-[88px]"
                src="/images/Experience_Icon.svg"
                alt="ExperienceIcon"
                width="88"
                height="88"
            />
        </div>
      </div>
    </Contairner>
  );
};

export default Experience;
