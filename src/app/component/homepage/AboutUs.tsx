import React from 'react';
import Image from 'next/image';
const AboutUs = () => {
  return (
    <div className="text-center">
      <h2 className="font-bold line-h">About Us</h2>
      <Image
        src="/images/border.svg"
        alt="MicroFin"
        width={123}
        height={10}
      ></Image>
      <div className="text-[#404040] text-[18px]">
        <p>
          MicroFin is a new insurtech firm from Vietnam. With a mission of
          making insurance and financial services accessible for all players in
          the field.
        </p>
        <p>
          Our services enable companies to eliminate their exposure to
          operational risk, create new revenue streams, and optimize and enhance
          existing products and services
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
