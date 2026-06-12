import Image from 'next/image'

export default function MidCenturySection() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#0080801A] py-16  lg:py-30 overflow-hidden z-10"
    >
      <Image
        src="/tree_right.png"
        alt=""
        width={250}
        height={407}
        className="absolute -right-10 top-4"
      />

      <div className="relative max-w-[1240px] w-[95%] mx-auto">
        <div className="2xl:hidden block absolute -right-32 bottom-0 w-[77.72px] h-[77.72px] rounded-full bg-[radial-gradient(circle,_#00B8B8_0%,_#008080_100%)]" />
        <div className=" absolute top-[84%] -left-3 md:left-10 lg:-left-10 lg:bottom-12 w-[99px] h-[99px] rounded-full bg-gradient-to-b from-[#FFA500] to-[#EA7000]" />
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-0 lg:gap-5 xl:gap-0">
          {/* Left Image Section */}
          <div className="order-2 lg:order-1 relative w-full">
            <div className="relative w-full ">
              {/* Border Frame */}
              <div className="hidden lg:block absolute left-4 sm:left-1 md:left-2 lg:left-18 xl:left-16 top-8 sm:top-8 md:top-10 lg:top-12 xl:top-14 w-[70%] sm:w-[90%] md:w-[400px] lg:w-[400px] xl:w-[500px] h-[75%] sm:h-[85%] md:h-[340px] lg:h-[400px] xl:h-[460px] rounded-3xl border-[5px] border-[#FFA500] z-0" />
              {/* Image */}
              <div className="relative z-10 ">
                <Image
                  src="/person-drawing.png"
                  alt="person working"
                  width={560}
                  height={500}
                  className="w-full lg:max-w-[560px] h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2 flex flex-col lg:max-w-[560px] gap-6">
            <h2 className="font-futura-black text-[32px] sm:text-[38px] lg:text-[42px] leading-tight">
              Embracing the Mid-
              <br />
              Century
              <span className="text-[#008080]"> Modern Aesthetic</span>
            </h2>

            <p className="font-avenir-lt text-[16px] lg:text-[18px] justify-start font-extralight leading-7  text-[#333333]">
              Palm Springs is renowned for its mid-century modern architecture, a style
              characterized by clean lines, geometric shapes, and a blend of indoor and outdoor
              living. This aesthetic is not just a visual treat but a part of the city's identity.
              At 1REALTOUR.com, we bring this style to life in our web designs, using a color
              palette that includes warm neutrals, earthy tones, and vibrant teals and oranges.
            </p>

            <button className="bg-[#F29AA7] flex gap-2 text-center items-center hover:bg-[#E85A8E] text-white font-avenir-lt font-medium px-10 py-4 rounded transition-colors w-fit">
              Read More{' '}
              <Image src="/arrow_white.svg" alt="" width={17} height={14} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
