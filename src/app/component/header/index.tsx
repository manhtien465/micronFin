'use client';

import { MdOutlineClose } from 'react-icons/md';
import { HiOutlineMenu } from 'react-icons/hi';
import Contairner from '@/app/contairner';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const menuItems = [
    { label: 'About Us', href: '/#about' },
    { label: 'Service', href: '/#service' },
    { label: 'Insurance', href: '/#insurance' },
    { label: 'Commercial', href: '/#commercial' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Products', href: '/#products' },
    { label: 'Team', href: '/#team' },
  ];

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

          <div className="hidden lg:flex items-center justify-center gap-4">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                replace
                scroll={true}
                prefetch={true}
                className="hover:text-[#fd5701]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <ul className="flex lg:hidden lg:gap-10 ml-auto text-16 font-semibold">
            {openMenu ? (
              <MdOutlineClose
                size={'24px'}
                className="cursor-pointer"
                onClick={handleMenu}
              />
            ) : (
              <HiOutlineMenu
                size={'24px'}
                className="cursor-pointer"
                onClick={handleMenu}
              />
            )}
          </ul>

          {openMenu && (
            <div className="absolute flex flex-col items-start gap-4 min-w-52 right-10 top-10 bg-[#ccc] p-8 text-center z-10 text-black text-13">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="hover:text-[#fd5701] cursor-pointer"
                  replace
                  scroll={true}
                  prefetch={true}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          <div className="hidden lg:flex">
            <Link
              href={'/'}
              className="block bg-[#2D64F0] max-w-[136px] text-base leading-6 rounded px-5 py-2 text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </Contairner>
    </div>
  );
};

export default Header;
