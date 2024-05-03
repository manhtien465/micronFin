'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Image from 'next/image';
import Title from '../Title';
import Contairner from '@/app/contairner';

interface AboutUsProps {
  data: any;
}

const AboutUs: React.FC<AboutUsProps> = ({ data }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="relative">
      <Image
        className="z-10 hidden xl:flex absolute bottom-[-80px] left-0 w-[226px] h-[226px]"
        src="/images/DotsViews.svg"
        alt="dots"
        width={226}
        height={226}
      />
      <Image
        className="z-10 flex xl:hidden absolute bottom-[-66px] left-[-68px] w-[144px] h-[104px] "
        src="/images/DotsViewsResponsive.svg"
        alt="dots"
        width={226}
        height={226}
      />
      <Contairner>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-anchor-placement="top-bottom"
          className="text-center flex flex-col justify-center items-center mt-10 mb-16 sm:mt-[120px] sm:mb-[162px]"
        >
          <Title title="About Us" titlecustom="" align="items-center" />
          <div className="flex flex-col gap-10 sm:gap-12 mt-6 text-[#404040] font-normal text-base leading-7 sm:text-lg sm:leading-8 max-w-[840px]">
            <p>{data.aboutTitle}</p>
            <p>{data.aboutDesc}</p>
          </div>
        </div>
      </Contairner>
    </div>
  );
};

export default AboutUs;
