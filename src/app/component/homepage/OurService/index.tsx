import React from 'react';
import Image from 'next/image';
import Title from '../../Title';
import ServiceItem from './ServiceItem';
import Contairner from '@/app/contairner';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const OurService = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <Contairner>
            <div className="text-center flex flex-col justify-center items-center">
                <Title title="Our Services" titlecustom="" align="items-center"/>
                <div className="flex gap-8 mt-14">
                    <ServiceItem 
                        imageUrl="/images/Service_Setting.svg"
                        altImg = "ADMINISTRATION" 
                        title="THIRD PARTY ADMINISTRATION (TPA)" 
                        detail="For gadget and health products"
                    />
                    <ServiceItem 
                        imageUrl="/images/Service_Solution.svg"
                        altImg = "SOLUTION" 
                        title="INSURANCE SOLUTION PROVIDER" 
                        detail="Brokerage, design and tech development"
                    />
                    <ServiceItem 
                        imageUrl="/images/Service_Network.svg" 
                        altImg = "NETWORK"
                        title="AGENCY NETWORK" 
                        detail="Strategize and digitalize"
                    />
                </div>
            </div>
        </Contairner>
    );
};

export default OurService;
