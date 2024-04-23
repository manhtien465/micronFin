import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div className="h-20">
      <div className="flex justify-between items-center px-20">
        <Link href={'/'}>
          <Image
            src="/images/logo_full.svg"
            alt="MicroFin"
            width={167}
            height={49}
          />
        </Link>
        <Link href={'/'} className="bg-[#2D64F0] max-w-[136px] text-base leading-6 rounded px-5 py-2 ;
">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
