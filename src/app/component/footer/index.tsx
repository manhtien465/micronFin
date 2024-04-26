import React from 'react';
import Image from 'next/image';
import Contairner from '@/app/contairner';
interface FooterProps {
  data: any;
}

const Footer: React.FC<FooterProps> = ({ data }) => {
  return (
    <div className="">
        <div className='bg-[#F5F5F5]'>
          <Contairner>
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-36 py-12 sm:pt-[75px] sm:pb-[125px]">

              <div className="flex flex-col items-center sm:items-start justify-center sm:justify-start w-full sm:w-1/2">
                <Image className="w-[80px] h-[90px] sm:w-[136px] sm:h-[136px]"
                  src="/images/logo_icon.png"
                  alt="MicroFin"
                  width={136}
                  height={136}
                ></Image>
                <p className="text-center sm:text-start text-sm leading-6 sm:text-lg sm:leading-8 text-[#404040] mt-6">Lorem ipsum dolor sit amet consectetur. Sapien faucibus integer nulla vestibulum vivamus. In nulla volutpat varius blandit sit pharetra tellus. Ut etiam amet facilisi ipsum porttitor.</p>
              </div>
              <div className="flex flex-col justify-center gap-6 w-full sm:w-1/2">
                <div className="flex">
                  <Image className="mr-4"
                      src="/images/Footer_phone.svg"
                      alt="Experience"
                      width="24"
                      height="24"
                  />
                  <span className="text-[#431805] text-lg font-semibold leading-[27px]">{data.phone}</span>
                </div>
                <div className="flex">
                  <Image className="mr-4"
                      src="/images/Footer_mail.svg"
                      alt="Experience"
                      width="24"
                      height="24"
                  />
                  <span className="text-[#431805] text-lg font-semibold leading-[27px]">{data.email}</span>
                </div>
                <div className="flex">
                  <Image className="mr-4"
                      src="/images/Footer_location.svg"
                      alt="Experience"
                      width="24"
                      height="24"
                  />
                  <span className="text-[#431805] text-lg font-semibold leading-[27px]">{data.address}</span>
                </div>
                <div className="flex">
                  <Image className="mr-4"
                      src="/images/Footer_web.svg"
                      alt="Experience"
                      width="24"
                      height="24"
                  />
                  <span className="text-[#431805] text-lg font-semibold leading-[27px]">{process.env.NEXT_PUBLIC_DOMAIN_URL}</span>
                </div>
              </div>
            </div>

          </Contairner>
        </div>
      <div className="bg-[#431805] text-[#F5F5F5] py-[18px] sm:py-4 text-sm font-bold leading-5 sm:text-lg sm:font-semibold sm:leading-7 text-center">© 2024 - MicroFin Company</div>
    </div>
  
  );
};

export default Footer;
