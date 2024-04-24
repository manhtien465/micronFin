import React from 'react';
import Image from 'next/image';

import Contairner from '@/app/contairner';
import Title from '../Title';
const Products = () => {
  return (
    <Contairner>
        <div className="text-center flex flex-col justify-center items-center mt-32">
            <Title title="Core Products" titlecustom="" align="items-center"/>
            <div className="flex gap-8 mt-20">
                hi
            </div>
        </div>
    </Contairner>
  );
};

export default Products;
