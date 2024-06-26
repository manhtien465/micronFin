'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

import Title from '../Title';
import Contairner from '@/app/contairner';

const Commercial = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, 
      once: true, 
      anchorPlacement: 'top-bottom' 
    });
    AOS.refresh();
  }, []);

  const images = [
    { src: '/images/image 31.png', alt: 'TNEX' },
    { src: '/images/image 32.png', alt: 'FARM' },
    { src: '/images/image 33.png', alt: 'FFCOM' },
    { src: '/images/image 34.png', alt: 'MOBIFONE' },
    { src: '/images/image 35.png', alt: 'AURORA' },
  ];

  return (
      <div 
        id="commercial"
        className="text-center flex flex-col justify-center items-center mt-10 sm:mt-20"
        data-aos="fade-up"
      >
          <Title titlecustom="Commercial " title="Partners" align="items-center"/>
          <div className="bg-[#f4f7fe] w-full py-8 px-20 mt-8 sm:mt-16">
            <Contairner>
            <div className=" w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-center items-center gap-24 ">
                      {images.map((image, index) => (
                      <div key={index}>
                          <Image
                          src={image.src}
                          alt={image.alt}
                          layout="responsive"
                          width={182}
                          height={96}
                          />
                      </div>
                      ))}
                  </div>
            </Contairner>
        </div>
    </div>
  );
};

export default Commercial;
