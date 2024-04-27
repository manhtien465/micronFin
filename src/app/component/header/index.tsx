import Contairner from '@/app/contairner';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div className="h-20">
      <Contairner>
        <div className="flex justify-between items-center py-[14px]">
          <Link href={'/'}>
            <Image
              src="/images/Header_logo.svg"
              alt="MicroFin"
              layout="responsive"
              width={167}
              height={49}
            />
          </Link>
          <Link
            href={'/'}
            className="hidden sm:flex bg-[#2D64F0] max-w-[136px] text-base leading-6 rounded px-5 py-2 text-white"
          >
            Contact
          </Link>
          <Image
            className="flex sm:hidden"
            src="/images/Header_navbaricon.svg"
            alt="navbav"
            width={24}
            height={24}
          />
        </div>
      </Contairner>
    </div>
  );
};

export default Header;
