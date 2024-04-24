import Header from './component/header';
import Footer from './component/footer';
import AboutUs from './component/homepage/AboutUs';
import Banner from './component/homepage/Banner';
import OurService from './component/homepage/OurService';
import Insurance from './component/homepage/Insurance';
import Commercial from './component/homepage/Commercial';
import Experience from './component/homepage/Experience';
import Products from './component/homepage/Products';
import OurTeam from './component/homepage/OurTeam';

import { getDataHomePage } from '@/app/service/homepage';
import Head from 'next/head';
// import SeoHomePage from './component/seo/homepage';
// import { DefaultSeo } from 'next-seo';
export default async function Home() {
  return (
    <>
      <main>
        {/* <SeoHomePage></SeoHomePage> */}
        <Header></Header>
        <Banner />
        <AboutUs />
        {/* <OurService /> */}
        <Insurance />
        <Commercial />
        <Experience/>
        {/* <Products/> */}
        <OurTeam/>
        <Footer></Footer>
      </main>
    </>
  );
}
