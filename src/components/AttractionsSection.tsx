'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function AttractionsSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024)
    const handleResize = () => setIsMobile(window.innerWidth < 1024)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const attractions = [
    {
      id: 1,
      img: '/resort.png',
      imgMobile: '/resort_full.png',
      icon: '/resort_icon.png',
      title: 'Luxury Resorts and Boutique Hotels',
      description:
        'Palm Springs is home to some of the most luxurious resorts and boutique hotels in the country.',
    },
    {
      id: 2,
      img: '/dinning.png',
      imgMobile: '/dining_full.png',
      icon: '/resort_icon.png',
      title: 'Fine Dining and Casual Eateries',
      description:
        'Palm Springs is home to some of the most luxurious resorts and boutique hotels in the country.',
    },
    {
      id: 3,
      img: '/shopping.png',
      imgMobile: '/shopping_full.png',
      icon: '/shopping_icon.png',
      title: 'Shopping Districts and Boutiques',
      description:
        'Palm Springs is home to some of the most luxurious resorts and boutique hotels in the country.',
    },
    {
      id: 4,
      img: '/tourist.png',
      imgMobile: '/tourist_full.png',
      icon: '/tour_icon.png',
      title: 'Notable Tourist Destinations',
      description:
        'Palm Springs is home to some of the most luxurious resorts and boutique hotels in the country.',
    },
  ]

  return (
    <section id="services" className="relative w-full bg-[#0080801A] py-16 overflow-hidden z-20">
      <div className="relative max-w-[1240px] w-[95%] mx-auto relative z-10">
        <div className="2xl:hidden absolute -left-40 top-1/2 w-30 h-30 rounded-full bg-[radial-gradient(circle,_#00B8B8_0%,_#008080_100%)]" />
        <div
          className="2xl:hidden absolute bottom-10 -right-30 w-10 h-10 rounded-full"
          style={{ background: 'linear-gradient(180deg, #FFA500 0%, #EA7000 100%)' }}
        ></div>
        <div className="text-center mb-16">
          <h2 className="font-futura-black text-[30px] sm:text-[36px] lg:text-[46px] font-bold mb-4">
            Showcasing <span className="text-secondary">Local Attractions</span>
          </h2>
          <p className="font-avenir-lt text-[16px] text-[#787878] leading-[26px] max-w-4xl mx-auto">
            Palm Springs is a haven for tourists, offering a plethora of attractions and activities.
            Our web design services highlight these features, ensuring that potential visitors can
            easily discover what makes this city special.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {attractions.map((attraction) => (
            <div
              key={attraction.id}
              className="flex lg:flex-row flex-col items-stretch bg-white rounded-[20px] overflow-hidden"
            >
              <div className="relative w-full lg:w-1/2  h-[180px] sm:h-[220px] md:h-[240px] lg:h-auto ">
                <Image
                  src={isMobile ? attraction.imgMobile : attraction.img}
                  alt=".."
                  width={280}
                  height={200}
                  className="w-full h-full object-cover "
                />
              </div>

              <div className="w-full lg:w-1/2  p-5 sm:p-6 flex lg:flex-col flex-row gap-3 items-start z-20">
                <div className="w-13 h-13 rounded-[10px] bg-[#0080801A] flex items-center justify-center flex-shrink-0">
                  <Image src={attraction.icon} alt="icon" width={32} height={32} />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-futura-black-bold text-[20px] lg:text-[24px] text-primary leading-tight">
                    {attraction.title}
                  </h3>
                  <p className="font-avenir-lt text-[14px] lg:text-[16px] leading-[24px] lg:leading-[26px] text-[#666666]">
                    {attraction.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
