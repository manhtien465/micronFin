'use client'

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Image from 'next/image';
import Title from '../Title';
import Contairner from '@/app/contairner';

interface OurServiceProps {
    data: any;
}

const OurService: React.FC<OurServiceProps> = ({ data }) => {
    useEffect(() => {
        AOS.init();
      }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            }
          ]
    };

    return (
        <Contairner>
            <div className="text-center flex flex-col" 
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom">
                <Title title="Our Services" titlecustom="" align="items-center"/>
                <Slider {...settings} className="mt-10 sm:mt-14">
                    {data.services.map((service: { id: React.Key; icon:any; name: string; description: string }) =>
                      <div key={service.id} className="mr-8 sm:!w-[calc(100%-32px)] ">
                        <div className="flex flex-col items-center justify-between w-full py-16 px-7 text-[#404040] border border-[#F5F5F5] bg-[#FFFFFF] rounded-lg">
                            <Image
                                src={service.icon.data.attributes.url}
                                alt={service.icon.data.attributes.alternativeText}
                                width={104}
                                height={104}
                            />
                            <div className="md:min-h-[72px] text-2xl font-semibold leading-9 text-center mb-4 mt-8">{service.name}</div>
                            <div className="leading-8 text-center">{service.description}</div>
                        </div>
                    </div>
                        
                    )}
                </Slider>
            </div>
        </Contairner>
    )
};

export default OurService;
