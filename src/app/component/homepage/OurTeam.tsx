'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

import Contairner from '@/app/contairner';
import Title from '../Title';
interface OurTeamProps {
  data: any;
}

const OurTeam: React.FC<OurTeamProps> = ({ data }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Contairner>
      <div
        className="text-center flex flex-col justify-center items-center mt-12 mb-28 sm:mt-[104px] sm:mb-[120px]"
        data-aos="fade-left"
        data-aos-duration="3000"
        data-aos-anchor-placement="top-bottom"
      >
        <Title title="Our Team" titlecustom="" align="items-center" />
        <div className="flex w-full flex-col sm:flex-row gap-8 mt-16">
          {data.teams.map(
            (team: {
              id: React.Key;
              image: any;
              name: string;
              position: string;
            }) => (
              <div
                key={team.id}
                className="flex flex-col w-full sm:w-1/3 rounded-lg border border-solid border-[#E5E5E5] "
              >
                <Image
                  src={team.image.data.attributes.url}
                  alt={team.image.data.attributes.alternativeText}
                  layout="responsive"
                  width={104}
                  height={104}
                />
                <div className="text-[#2D64F0] text-xl leading-[30px] font-semibold sm:text-[32px] sm:font-medium lg:leading-10 tracking-tight text-center mb-2 mt-4 sm:mt-6">
                  {team.name}
                </div>
                <div className="text-[#431805] font-bold text-base leading-7 sm:font-normal sm:leading-8 sm:text-lg text-center mb-4 sm:mb-6">
                  {team.position}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </Contairner>
  );
};

export default OurTeam;
