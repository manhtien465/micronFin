import React from 'react';
import Image from 'next/image';
import Contairner from '@/app/contairner';

interface BannerProps {
  data: any;
}

const Banner: React.FC<BannerProps> = ({ data }) => {
  console.log(data.hero.image.data.attributes.url)

  return (
    <div  
      style={{
        backgroundImage: "url('public/images/Background.png')",
        backgroundSize: "cover", // Điều chỉnh kích thước ảnh nền
        backgroundPosition: "center", // Điều chỉnh vị trí của ảnh nền
      }}
    >
      {/* bg-[#fff6f3] */}
      <Contairner>
        <div className="h-screen flex sm:flex-row flex-col justify-end pt-[72px] gap-10 sm:gap-3">
          <div className="w-full sm:w-1/2 h-full sm:mt-24">
          {/* Insurance, <span className="font-bold">Investment</span> and All */}
            <h2 className="font-medium text-3xl leading-[42px] sm:text-[40px] sm:leading-[60px] mb-4 sm:mb-6">{data.hero.title}</h2>
            <p className="text-base leading-7 sm:text-lg sm:leading-8">{data.hero.description}</p>
          </div>
          <Image className="w-full sm:!w-1/2"
            src={data.hero.image.data.attributes.url}
            alt={data.hero.image.data.attributes.alternativeText}
            layout='responsive'
            width={123}
            height={100}
          ></Image>
        </div>
      </Contairner>
    </div>
  );
};

export default Banner;
