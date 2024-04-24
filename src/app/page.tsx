import Header from './component/header';
import Footer from './component/footer';
import AboutUs from './component/homepage/AboutUs';
import Banner from './component/homepage/Banner';
import OurService from './component/homepage/OurService';
import Insurance from './component/homepage/Insurance';
import Commercial from './component/homepage/Commercial';
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
        <OurService />
        <Insurance />
        <Commercial />
        <Footer></Footer>
      </main>
    </>
  );
}
