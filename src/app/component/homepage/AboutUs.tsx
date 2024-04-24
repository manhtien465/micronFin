import React from 'react';
import Image from 'next/image';
import Title from '../Title';
import Contairner from '@/app/contairner';
const AboutUs = () => {
  return (
    <Contairner>
      <div className="text-center flex flex-col justify-center items-center mt-10 mb-16 sm:mt-[120px] sm:mb-[80px]">
        <Title title="About Us"  titlecustom="" align="items-center"/>
        <div className="flex flex-col gap-10 sm:gap-12 mt-6 text-[#404040] font-normal text-base leading-7 sm:text-lg sm:leading-8 max-w-[840px]">
          <p>
            MicroFin is a new insurtech firm from Vietnam. With a mission of
            making insurance and financial services accessible for all players in
            the field.
          </p>
          <p>
            Our services enable companies to eliminate their exposure to
            operational risk, create new revenue streams, and optimize and enhance
            existing products and services
          </p>
        </div>
      </div>
    </Contairner>
  );
};

export default AboutUs;
