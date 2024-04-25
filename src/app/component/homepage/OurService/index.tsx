'use client'

import React from 'react';
import Image from 'next/image';
import Title from '../../Title';
import ServiceItem from './ServiceItem';
import Contairner from '@/app/contairner';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const OurService = ({data}) => {
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
            <div className="text-center flex flex-col ">
                <Title title="Our Services" titlecustom="" align="items-center"/>
                <Slider {...settings} className="mt-10 sm:mt-14">
                    <div className="mr-8 sm:!w-[calc(100%-32px)]">
                        <div className="flex flex-col items-center w-full py-16 px-7 text-[#404040] border border-[#F5F5F5] bg-[#FFFFFF] rounded-lg">
                            <Image
                                src="/images/Service_Setting.svg"
                                alt="ADMINISTRATION" 
                                width={104}
                                height={104}
                            />
                            <div className="text-2xl font-semibold leading-9 text-center mb-4 mt-8">ADMINISTRATION</div>
                            <div className="leading-8 text-center">get and he</div>
                        </div>
                    </div>

                    <div className="mr-8 sm:!w-[calc(100%-32px)]">
                        <div className="flex flex-col items-center w-full py-16 px-7 text-[#404040] border border-[#F5F5F5] bg-[#FFFFFF] rounded-lg">
                            <Image
                                src="/images/Service_Setting.svg"
                                alt="ADMINISTRATION" 
                                width={104}
                                height={104}
                            />
                            <div className="text-2xl font-semibold leading-9 text-center mb-4 mt-8">ADMINISTRATION</div>
                            <div className="leading-8 text-center">get and he</div>
                        </div>
                    </div>

                    <div className="mr-8 sm:!w-[calc(100%-32px)]">
                        <div className="flex flex-col items-center w-full py-16 px-7 text-[#404040] border border-[#F5F5F5] bg-[#FFFFFF] rounded-lg">
                            <Image
                                src="/images/Service_Setting.svg"
                                alt="ADMINISTRATION" 
                                width={104}
                                height={104}
                            />
                            <div className="text-2xl font-semibold leading-9 text-center mb-4 mt-8">ADMINISTRATION</div>
                            <div className="leading-8 text-center">get and he</div>
                        </div>
                    </div>
                    
 
                </Slider>
            </div>
        </Contairner>
                           {/* </div> */}
                    {/* <div className="mr-8 !w-[calc(100%-32px)]">
                        <ServiceItem 
                        imageUrl="/images/Service_Setting.svg"
                        altImg = "ADMINISTRATION" 
                        title="THIRD PARTY ADMINISTRATION (TPA)" 
                        detail="For gadget and health products"
                        />
                    </div>
                    <div className="mr-8 !w-[calc(100%-32px)]">
                        <ServiceItem 
                        imageUrl="/images/Service_Setting.svg"
                        altImg = "ADMINISTRATION" 
                        title="THIRD PARTY ADMINISTRATION (TPA)" 
                        detail="For gadget and health products"
                        />
                    </div> */}
    );
};

export default OurService;
