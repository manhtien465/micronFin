'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Contairner from '@/app/contairner';
import Title from '../Title';

interface ProductsProps {
  data: any;
}

const Products: React.FC<ProductsProps> = ({ data }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000, 
      once: true, 
      anchorPlacement: 'top-bottom' 
    });
    AOS.refresh();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <Contairner>
      <div
        id="products"
        className=" flex flex-col mt-16 sm:mt-32"
        data-aos="fade-up"
      >
        <Title title="Core Products" titlecustom="" align="items-center" />
        <Slider {...settings} className="mt-8 sm:mt-20">
          {data.products.map(
            (product: {
              id: React.Key;
              icon: any;
              name: string;
              description: string;
            }) => (
              <div
                key={product.id}
                className="h-full mr-8 sm:!w-[calc(100%-32px)]"
              >
                <div className=" flex flex-col items-start justify-between w-full py-8 px-6 sm:py-10 sm:px-8 text-[#404040] border border-[#F5F5F5] bg-[#FFFFFF] rounded-lg">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_URL}${product.icon.data.attributes.url}`}
                    alt={product.icon.data.attributes.alternativeText}
                    width={80}
                    height={80}
                  />
                  <div className="md:min-h-16 text-[#2D64F0] text-xl sm:text-2xl font-semibold sm:font-medium my-6 sm:my-8">
                    {product.name}
                  </div>
                  <div className="text-[#404040] text-sm leading-6 sm:text-base sm:leading-7">
                    {product.description}
                  </div>
                </div>
              </div>
            )
          )}
        </Slider>
      </div>
    </Contairner>
  );
};

export default Products;
