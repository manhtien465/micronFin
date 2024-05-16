'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

import Contairner from '@/app/contairner';

interface BannerProps {
  data: any;
}

const Banner: React.FC<BannerProps> = ({ data }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000, 
      once: true, 
      anchorPlacement: 'top-bottom' 
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-[url(/images/Background.png)] bg-cover bg-center">
      <Contairner>
        <div className=" flex sm:flex-row flex-col justify-end pt-[72px] gap-10 sm:gap-3">
          <div
            className="w-full sm:w-1/2 h-full sm:mt-24"
            data-aos="fade-up"
          >
            <h2 className="font-medium text-3xl leading-[42px] sm:text-[40px] sm:leading-[60px] mb-4 sm:mb-6">
              {data.hero.title}
            </h2>
            <p className="text-base leading-7 sm:text-lg sm:leading-8">
              {data.hero.description}
            </p>
          </div>
          <Image
            className="w-full sm:!w-1/2"
            src={`${process.env.NEXT_PUBLIC_API_URL}${data.hero.image.data.attributes.url}`}
            alt={data.hero.image.data.attributes.alternativeText}
            layout="responsive"
            width={123}
            height={632}
          ></Image>
        </div>
      </Contairner>
    </div>
  );
};

export default Banner;
