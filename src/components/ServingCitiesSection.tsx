'use client'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function ServingCitiesSection() {
  const cities = [
    {
      id: 1,
      icon: '/palm.png',
      iconWhite: '/palm_white.png',
      name: 'Palm Desert',
      title: 'Palm Desert',
      description:
        'Palm Desert is known for its upscale shopping, fine dining, and beautiful golf courses. Our web design services help showcase the luxury lifestyle and vibrant community that defines this desert oasis.',
    },
    {
      id: 2,
      icon: '/roof.png',
      iconWhite: '/roof_white.png',
      name: 'Cathedral City',
      title: 'Cathedral City',
      description:
        'With its blend of suburban comfort and cultural attractions, Cathedral City is a great place to live and visit. Our web designs highlight the best of this community, from its theaters and parks to its family-friendly events.',
    },
    {
      id: 3,
      icon: '/mirage.png',
      iconWhite: '/mirage_white.png',
      name: 'Rancho Mirage',
      title: 'Rancho Mirage',
      description:
        'Rancho Mirage offers luxury resorts, championship golf, and stunning natural scenery. We create digital experiences that capture the elegance and exclusivity of this premier destination.',
    },
    {
      id: 4,
      icon: '/quinta.png',
      iconWhite: '/quinta_white.png',
      name: 'La Quinta',
      title: 'La Quinta',
      description:
        'La Quinta combines the tranquility of mountain living with resort amenities and world-class golf. Our designs celebrate the natural beauty and sophisticated lifestyle this community offers.',
    },
  ]

  const [selectedCity, setSelectedCity] = useState<number | null>(2)
  const sliderRef = useRef(null)
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1024)
    }
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dotsClass: 'slick-dots custom-dots',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
    ],
    afterChange: (index: number) => setCurrentSlide(index),
  }

  const selectedCityData = cities.find((city) => city.id === selectedCity) || cities[1]

  return (
    <section className="relative w-full bg-[#E8F5F8] py-16 lg:py-24 overflow-hidden">
      <Image
        src="/tree.png"
        alt="Palm tree decoration"
        width={200}
        height={300}
        className="absolute bottom-[40%] -left-2 "
      />
      <div className="relative max-w-[1441px] w-[95%] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-futura-black text-[36px] md:text-[46px] mb-4 leading-[55px]">
            Serving <span className="text-[#FFA500]">Surrounding Cities</span>
          </h2>
          <p className="font-avenir-lt text-[18px] text-[#333333] leading-[26px] max-w-4xl mx-auto">
            While our roots are in Palm Springs, we proudly serve the greater Coachella Valley and
            surrounding areas, including communities in our expanding service network.
          </p>
        </div>

        {/* Grid for Large Screens, Slider for Small Screens */}
        {isSmallScreen ? (
          <div className="mb-12 max-w-5xl mx-auto lg:hidden">
            <Slider ref={sliderRef} {...sliderSettings}>
              {cities.map((city) => (
                <div key={city.id} className="px-2">
                  <div
                    onClick={() => setSelectedCity(city.id)}
                    className={`${selectedCity === city.id ? 'bg-[#F29AA7]' : 'bg-white'} rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
                  >
                    <div className="flex flex-col gap-5 justify-center items-center">
                      <Image
                        src={selectedCity === city.id ? city.iconWhite : city.icon}
                        alt=""
                        width={58}
                        height={48}
                      />
                      <h3
                        className={`font-futura-black text-[14px] md:text-[18px] ${selectedCity === city.id ? 'text-white' : 'text-[#102039]'}`}
                      >
                        {city.name}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 max-w-5xl mx-auto">
            {cities.map((city) => (
              <div
                key={city.id}
                onMouseEnter={() => setSelectedCity(city.id)}
                className={`${selectedCity === city.id ? 'bg-[#F29AA7]' : 'bg-white'} rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
              >
                <div className="flex flex-col gap-5 justify-center items-center">
                  <Image
                    src={selectedCity === city.id ? city.iconWhite : city.icon}
                    alt=""
                    width={58}
                    height={48}
                  />
                  <h3
                    className={`font-futura-black text-[14px] md:text-[18px] ${selectedCity === city.id ? 'text-white' : 'text-[#102039]'}`}
                  >
                    {city.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Detail Section with Animation */}
        <div className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-[#F5F5DC] rounded-[20px] p-8 md:p-10 relative">
            {/* Left Content */}
            <div className="flex flex-col gap-4 md:gap-6 relative">
              <h2
                key={selectedCity}
                className="font-futura-black text-[28px] md:text-[38px] leading-[1.2] text-[#008080] animate-fadeIn"
              >
                {selectedCityData.title}
              </h2>

              <p
                key={`desc-${selectedCity}`}
                className="font-avenir-lt text-[14px] md:text-[16px] text-[#787878] leading-[24px] md:leading-[26px] animate-fadeIn"
              >
                {selectedCityData.description}
              </p>

              <button className="bg-[#008080] flex gap-2 hover:bg-[#006666] text-white font-avenir-lt font-semibold px-6 md:px-8 py-3 rounded transition-colors w-fit">
                Read More <Image src="/arrow_white.svg" alt="" width={17} height={12} />
              </button>
            </div>

            {/* Right Image */}
            <div className="flex justify-end relative w-full lg:w-auto">
              <div
                key={`img-${selectedCity}`}
                className="w-full lg:max-w-md rounded-3xl overflow-hidden animate-slideIn"
              >
                <Image
                  src="/cathedral.png"
                  alt={selectedCityData.title}
                  width={460}
                  height={360}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Small Orange Circle - Right Side */}
            <div className="2xl:hidden absolute top-8 md:top-12 right-4 md:-right-12 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-b from-[#FFA500] to-[#EA7000] rounded-full" />

            {/* Small Teal Circle - Right Side, Below Orange */}
            <div className="2xl:hidden absolute top-16 md:top-24 right-6 md:-right-6 w-4 h-4 md:w-5 md:h-5 bg-[#008080] rounded-full" />
          </div>
        </div>
        <div className="2xl:hidden absolute -bottom-12 -left-2 z-0 md:-left-20 w-24 h-24 bg-gradient-to-b from-[#FFA500] to-[#EA7000] rounded-full" />
      </div>

      <style>{`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .animate-fadeIn {
    animation: fadeIn 0.5s ease-in-out;
  }

  .animate-slideIn {
    animation: slideIn 0.5s ease-in-out;
  }

  .slick-dots {
    display: none !important;
  }

  .custom-dots {
    display: flex !important;
    justify-content: center;
    gap: 8px;
    margin-top: 20px;
    list-style: none;
    padding: 0;
  }

  .custom-dots li {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ccc;
    cursor: pointer;
    display: block;
  }

  .custom-dots li.slick-active {
    background-color: #008080;
  }

  .custom-dots li button {
    display: none;
  }
`}</style>
    </section>
  )
}
