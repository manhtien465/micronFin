import React from 'react';
import Image from 'next/image';
import Title from '../../Title';
import ServiceItem from './ServiceItem';
import Contairner from '@/app/contairner';
const OurService = () => {
  return (
    <Contairner>
        <div className="text-center flex flex-col justify-center items-center">
            <Title title="Our Services" titlecustom=""/>
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
