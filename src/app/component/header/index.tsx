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
        <Link href={'/'} className="">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
