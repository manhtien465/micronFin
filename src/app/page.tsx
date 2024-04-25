
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

async function getData() {
  const res = await getDataHomePage

  if (!res) {
    throw new Error('Failed to fetch data')
  }
 
  return res()
}

export default async function Home() {
  const data = await getData()
  const dataHome = data.data.attributes

  return (
    <>
      <main>
        {/* <SeoHomePage></SeoHomePage> */}
        <Header></Header>
        <Banner />
        <AboutUs data={dataHome}/>
        <OurService data={dataHome} />
        <Insurance />
        <Commercial />
        <Experience/>
        <Products/>
        <OurTeam/>
        <Footer></Footer>
      </main>
    </>
  );
}


