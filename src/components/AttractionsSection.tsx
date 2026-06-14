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
        <div
          className="absolute rounded-full bg-primary top-[15%] left-1/2 opacity-2"
          style={{
            width: '312.72px',
            height: '312.72px',
            backdropFilter: 'blur(234px)',
          }}
        />
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
                <svg width="0" height="0" className="absolute overflow-hidden">
                  <defs>
                    <clipPath id={`img-clip-${attraction.id}`} clipPathUnits="objectBoundingBox">
                      <path d="M0.8707,0.0998 C0.8901,0.0577 0.9652,0 0.9652,0 L0,0 L0,1 L0.9672,1 C0.7942,0.8895 0.9222,0.7327 0.9542,0.5938 C0.9934,0.4255 0.8815,0.3943 0.8452,0.2969 C0.8088,0.1996 0.8578,0.1274 0.8707,0.0998 Z" />
                    </clipPath>
                  </defs>
                </svg>

                {/* ↓ inline SVG replaces <Image src="/image.svg"> — preserveAspectRatio="none" is the fix */}
                <svg
                  viewBox="0 0 274 315"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 w-full h-full z-5 hidden lg:block"
                >
                  <path
                    d="M246.679 31.4243C252.176 18.1731 273.515 4.24733e-05 273.515 4.24733e-05L20 4.76514e-05C8.95433 4.7877e-05 1.33777e-05 8.95435 1.28949e-05 20L8.7424e-07 295C3.91418e-07 306.046 8.95428 315 20 315L274 315C225.005 280.168 261.287 230.787 270.418 187.031C281.48 134.027 249.776 124.183 239.454 93.5157C229.133 62.8486 243.067 40.1323 246.679 31.4243Z"
                    fill="#008080"
                  />
                </svg>

                <Image
                  src={attraction.imgMobile}
                  alt=".."
                  width={260}
                  height={200}
                  className="relative z-10 w-full h-full object-cover "
                  style={!isMobile ? { clipPath: `url(#img-clip-${attraction.id})` } : undefined}
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
