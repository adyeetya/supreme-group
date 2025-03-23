
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SecondSection from './components/CarouselSection';
import MobileCarousel from './components/MobileCarousel';
import ContactForm from './components/ConnectForm';
import Footer from './components/Footer';
function App() {
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <Navbar />
      <Hero />
      {/* <main className=" min-h-screen overflow-y-auto max-w-screen-2xl mx-auto"> */}

      <section className='hidden lg:block h-screen '><SecondSection /></section>
      <section className='lg:hidden'>   <MobileCarousel /></section>

      {/* </main> */}
      <ContactForm />
      <Footer />
      {/* <ContactForm /> */}

    </div>
  );
}

export default App;
