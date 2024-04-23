import React from 'react';
import Title from '../Title';
import Image from 'next/image';
import Contairner from '@/app/contairner';

const Commercial = () => {
  // Mảng chứa thông tin của các hình ảnh
  const images = [
    { src: "/images/image 31.png", alt: "TNEX" },
    { src: "/images/image 32.png", alt: "FARM" },
    { src: "/images/image 33.png", alt: "FFCOM" },
    { src: "/images/image 34.png", alt: "MOBIFONE" },
    { src: "/images/image 35.png", alt: "AURORA" }
  ];

  return (
    <div className="bg-[#f4f7fe]">
        <Contairner>
            <div className="text-center flex flex-col justify-center items-center">
                <Title title="Commercial " titlecustom="Partners" />
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

export default Commercial;
