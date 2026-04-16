import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandPromise from './components/BrandPromise';
import ExperiencePillars from './components/ExperiencePillars';
import SignatureJourneys from './components/SignatureJourneys';
import WhyElevated from './components/WhyElevated';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-ivory-100 text-charcoal">
      <Navbar />
      <Hero />
      <BrandPromise />
      <ExperiencePillars />
      <SignatureJourneys />
      <WhyElevated />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}
