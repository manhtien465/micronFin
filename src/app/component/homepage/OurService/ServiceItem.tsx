import React from 'react';
import Image from 'next/image';

interface ServiceItemProps {
    imageUrl: string;
    altImg: string;
    title: string;
    detail:string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({imageUrl, altImg, title, detail }) => {
  return (
    <div className="flex flex-col items-center w-1/3 py-16 px-7 text-[#404040] border border-[#F5F5F5] bg-[#FFFFFF] rounded-lg">
        <Image
            src={imageUrl}
            alt={altImg}
            width={104}
            height={104}
        />
        <div className="text-2xl font-semibold leading-9 text-center mb-4 mt-8">{title}</div>
        <div className="leading-8 text-center">{detail}</div>
    </div>
  );
};

export default ServiceItem;