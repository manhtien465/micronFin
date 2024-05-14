'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

import Title from '../Title';
import Contairner from '@/app/contairner';

const Insurance = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const images = [
    { src: '/images/image 26.png', alt: 'MSIG' },
    { src: '/images/image 27.png', alt: 'igloo' },
    { src: '/images/image 28.png', alt: 'BHS' },
    { src: '/images/image 29.png', alt: 'PVI' },
    { src: '/images/image 30.png', alt: 'OPES' },
  ];

  return (

            <div 
              id="insurance"
              className="text-center flex flex-col justify-center items-center mt-[68px] sm:mt-36"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
                <Title title="Partners" titlecustom="Insurance" align="items-center"/>
        
                <div className="bg-[#fff7f2] w-full py-10 px-20 mt-8 sm:mt-16">
                  <Contairner>
                    <div className=" w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-center items-center gap-24 ">
                        {images.map((image, index) => (
                        <div key={index}>
                            <Image
                            src={image.src}
                            alt={image.alt}
                            // layout="fill"
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

export default Insurance;
