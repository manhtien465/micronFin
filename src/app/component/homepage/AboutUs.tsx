import React from 'react';
import Image from 'next/image';
import Title from '../Title';
import Contairner from '@/app/contairner';
const AboutUs = () => {
  return (
    <Contairner>
      <div className="text-center flex flex-col justify-center items-center pt-[120px] pb-[80px]">
        <Title title="About Us"  titlecustom=""/>
        <div className="flex flex-col gap-12 mt-6 text-[#404040] font-normal text-lg leading-8 max-w-[840px]">
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
