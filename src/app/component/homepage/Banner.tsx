import React from 'react';
import Image from 'next/image';
import Contairner from '@/app/contairner';


const Banner = () => {
  return (
    <div  
      style={{background: "url(public/images/Background.png"}}
      className="w-full  bg-no-repeat bg-center"
    >
      {/* bg-[#fff6f3] */}
      <Contairner>
        <div className="h-screen flex sm:flex-row flex-col justify-end pt-[72px] gap-10 sm:gap-3">
          <div className="w-full sm:w-1/2 h-full sm:mt-24">
            <h2 className="font-medium text-3xl leading-[42px] sm:text-[40px] sm:leading-[60px] mb-4 sm:mb-6">Insurance, <span className="font-bold">Investment</span> and All</h2>
            <p className="text-base leading-7 sm:text-lg sm:leading-8">Lorem ipsum dolor sit amet consectetur. Sapien faucibus integer nulla vestibulum vivamus. In nulla volutpat varius blandit sit pharetra tellus. Ut etiam amet facilisi ipsum porttitor.</p>
          </div>
          <Image className="w-full sm:!w-1/2"
            src="/images/Banner_Img.png"
            alt="Member"
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
