import Header from './component/header';
import Footer from './component/footer';
import AboutUs from './component/homepage/AboutUs';
import Banner from './component/homepage/Banner';
import OurService from './component/homepage/OurService';
import Insurance from './component/homepage/Insurance';
import Commercial from './component/homepage/Commercial';

export default function Home() {
  return (
    <main>
      <Header></Header>
      <Banner/>
      <AboutUs />
      <OurService/>
      <Insurance/>
      <Commercial/>
      <Footer></Footer>
    </main>
  );
}
