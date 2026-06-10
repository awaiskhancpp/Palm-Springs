'use client'
import Image from 'next/image'
import { useState } from 'react'
export default function ServingCitiesSection() {
  const cities = [
    {
      id: 1,
      icon: '/palm.png',
      iconWhite: '/palm_white.png',
      name: 'Palm Desert',
    },
    {
      id: 2,
      icon: '/roof.png',
      iconWhite: '/roof_white.png',
      name: 'Cathedral City',
    },
    {
      id: 3,
      icon: '/mirage.png',
      iconWhite: '/mirage_white.png',
      name: 'Rancho Mirage',
    },
    {
      id: 4,
      icon: '/quinta.png',
      iconWhite: '/quinta_white.png',
      name: 'La Quinta',
    },
  ]
  const [selectedCity, setSelectedCity] = useState<number | null>(2)
  return (
    <section className="relative w-full bg-[#E8F5F8] py-16 lg:py-24 overflow-hidden">
      {/* Palm Tree - Top Left */}
      <div className="absolute top-0 left-0 -z-10 opacity-40">
        <Image
          src="/tree.png"
          alt="Palm tree decoration"
          width={200}
          height={300}
          className="w-32 md:w-48 h-auto"
        />
      </div>

      <div className="relative max-w-[1441px] w-[95%] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-futura-black text-[36px] md:text-[46px] mb-4 leading-[55px]">
            Serving <span className="text-secondary">Surrounding Cities</span>
          </h2>
          <p className="font-avenir-lt text-[18px] text-[#333333] leading-[26px] max-w-4xl mx-auto">
            While our roots are in Palm Springs, we proudly serve the greater Coachella Valley and
            surrounding areas, including communities in our expanding service network.
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 max-w-5xl mx-auto">
          {cities.map((city) => (
            <div
              key={city.id}
              onClick={() => setSelectedCity(city.id)}
              className={`${selectedCity === city.id ? 'bg-[#F29AA7]' : 'bg-white'} rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-xl transition-shadow`}
            >
              <div className="flex flex-col gap-5 justify-center items-center w-50 h-50 ">
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

        {/* Detail Section */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-[#F5F5DC] rounded-[20px] p-8 md:p-10 relative z-20">
            {/* Left Content */}
            <div className="flex flex-col gap-4 md:gap-6 relative z-20">
              <h2 className="font-futura-black text-[28px] md:text-[38px] leading-[1.2] text-primary">
                Cathedral City
              </h2>

              <p className="font-avenir-lt text-[14px] md:text-[16px] text-[#787878] leading-[24px] md:leading-[26px]">
                With its blend of suburban comfort and cultural attractions, Cathedral City is a
                great place to live and visit. Our web designs highlight the best of this community,
                from its theaters and parks to its family-friendly events.
              </p>

              <button className="bg-primary flex gap-2 hover:bg-[#006666] text-white font-avenir-lt font-semibold px-6 md:px-8 py-3 rounded transition-colors w-fit">
                Read More <Image src="/arrow_white.svg" alt="" width={17} height={12} />
              </button>
            </div>

            {/* Right Image */}
            <div className="flex justify-center relative z-20">
              <div className="w-full max-w-md rounded-3xl overflow-hidden">
                <Image
                  src="/cathedral.png"
                  alt="Cathedral City"
                  width={460}
                  height={360}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Small Orange Circle - Right Side */}
            <div className="absolute top-8 md:top-12 right-4 md:-right-12 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-b from-[#FFA500] to-[#EA7000] rounded-full z-30" />

            {/* Small Teal Circle - Right Side, Below Orange */}
            <div className="absolute top-16 md:top-24 right-6 md:-right-6 w-4 h-4 md:w-5 md:h-5 bg-[#008080] rounded-full z-30" />
          </div>

          {/* Large Orange Circle - Bottom Left, Behind */}
          <div className="absolute bottom-0 -left-16 md:-left-20 w-24 h-24 bg-gradient-to-b from-[#FFA500] to-[#EA7000] rounded-full -z-10" />
        </div>
      </div>
    </section>
  )
}
