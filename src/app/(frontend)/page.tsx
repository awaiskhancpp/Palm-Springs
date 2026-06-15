import HeroSection from '@/components/HeroSection'
import './styles.css'
import Navbar from '@/components/Navbar'
import MidCenturySection from '@/components/MidCenturySection'
import AttractionsSection from '@/components/AttractionsSection'
import Testimonials from '@/components/Testimonials'
import AdvantagesSection from '@/components/AdvantagesSection'
import ServingCitiesSection from '@/components/ServingCitiesSection'
import ContactSection from '@/components/ContactSection'
import Testimonial from '@/components/Testimonial2'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Hero from '@/components/HeroSection2'
export default async function HomePage() {
  return (
    <div>
      <Navbar />
      {/* <Hero /> */}
      <HeroSection />
      <div className="relative">
        <MidCenturySection />
        <div className="absolute top-[40%] left-0 z-10 pointer-events-none ">
          <Image src="/tree_2.png" alt="" width={290} height={600} className="rotate-4" />
        </div>
        <AttractionsSection />
      </div>
      {/* <Testimonial /> */}
      <Testimonials />
      <AdvantagesSection />
      <ServingCitiesSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
