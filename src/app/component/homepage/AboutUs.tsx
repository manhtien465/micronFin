import React from 'react';
import Image from 'next/image';
import Title from '../Title';
import Contairner from '@/app/contairner';
const AboutUs = ( {data} ) => {
  console.log(data)
  return (
    <Contairner>
      <div className="text-center flex flex-col justify-center items-center mt-10 mb-16 sm:mt-[120px] sm:mb-[162px]">
        <Title title="About Us"  titlecustom="" align="items-center"/>
        <div className="flex flex-col gap-10 sm:gap-12 mt-6 text-[#404040] font-normal text-base leading-7 sm:text-lg sm:leading-8 max-w-[840px]">
          <p>
            {data.aboutTitle}
          </p>
          <p>
            {data.aboutDesc}
          </p>
        </div>
      </div>
    </Contairner>
  );
};

export default AboutUs;
