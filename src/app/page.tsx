import Image from 'next/image';
import Header from './component/header';
import Footer from './component/footer';
import AboutUs from './component/homepage/AboutUs';

export default function Home() {
  return (
    <main>
      <Header></Header>
      <AboutUs />
      <Footer></Footer>
    </main>
  );
}
