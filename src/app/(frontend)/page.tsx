import HeroSection from '@/components/HeroSection'
import './styles.css'
import Navbar from '@/components/Navbar'
import MidCenturySection from '@/components/MidCenturySection'
import AttractionsSection from '@/components/AttractionsSection'
import Testimonials from '@/components/Testimonials'
import AdvantagesSection from '@/components/AdvantagesSection'
import ServingCitiesSection from '@/components/ServingCitiesSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
export default async function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <MidCenturySection />
      <AttractionsSection />
      <Testimonials />
      <AdvantagesSection />
      <ServingCitiesSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
