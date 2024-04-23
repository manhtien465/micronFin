import React from 'react';
import Title from '../Title';
import Image from 'next/image';
import Contairner from '@/app/contairner';

const Insurance = () => {
  // Mảng chứa thông tin của các hình ảnh
  const images = [
    { src: "/images/image 26.png", alt: "MSIG" },
    { src: "/images/image 27.png", alt: "igloo" },
    { src: "/images/image 28.png", alt: "BHS" },
    { src: "/images/image 29.png", alt: "PVI" },
    { src: "/images/image 30.png", alt: "OPES" }
  ];

  return (
    <div className="bg-[#fff7f2]">
        <Contairner>
            <div className="text-center flex flex-col justify-center items-center">
                <Title title="Partners" titlecustom="Insurance" />
                <div className="grid grid-cols-3 gap-24 md:grid-cols-5 lg:grid-cols-5">
                    {images.map((image, index) => (
                    <div key={index}>
                        <Image
                        src={image.src}
                        alt={image.alt}
                        width={182}
                        height={96}
                        />
                    </div>
                    ))}
                </div>
            </div>
        </Contairner>
    </div>


  );
};

export default Insurance;
