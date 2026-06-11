import Image from 'next/image'

export default function MidCenturySection() {
  return (
    <section className="relative w-full bg-[#0080801A] py-16 pb-0 lg:py-30 overflow-hidden z-10">
      <Image
        src="/tree_right.png"
        alt=""
        width={250}
        height={407}
        className="absolute -right-10 -top-2"
      />

      <div className="relative max-w-[1441px] w-[95%] mx-auto">
        <div className="2xl:hidden absolute -right-20 top-[70%] w-[77.72px] h-[77.72px] rounded-full bg-[radial-gradient(circle,_#00B8B8_0%,_#008080_100%)]" />
        <div className="2xl:hidden absolute top-[84%] -left-3 md:left-10 lg:left-4 lg:top-[70%] w-[99px] h-[99px] rounded-full bg-gradient-to-b from-[#FFA500] to-[#EA7000]" />
        <div className="grid grid-cols-1 lg:max-w-[1234px] mx-auto lg:grid-cols-2 items-center">
          {/* Left Image Section */}
          <div className="order-2 lg:order-1 relative w-full flex justify-end">
            <div className="relative w-full max-w-[560px] h-[320px] sm:h-[420px] lg:h-[520px]">
              {/* Border Frame */}
              <div className="absolute left-4 sm:left-1 md:left-2 lg:-left-2 xl:left-8 top-8 sm:top-8 md:top-10 lg:top-12 xl:top-14 w-[70%] sm:w-[90%] md:w-[400px] lg:w-[490px] xl:w-[500px] h-[75%] sm:h-[85%] md:h-[340px] lg:h-[420px] xl:h-[460px] rounded-3xl border-[5px] border-[#FFA500] z-0" />
              {/* Image */}
              <div className="relative z-10 -ml-2 sm:-ml-4 lg:-ml-8">
                <Image
                  src="/person-drawing.png"
                  alt="person working"
                  width={560}
                  height={500}
                  className="w-full max-w-[280px] sm:max-w-[380px] md:max-w-[480px] lg:max-w-[560px] h-auto rounded-2xl"
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

            <p className="font-avenir-lt text-[16px] lg:text-[18px] leading-[28px] text-[#333333]">
              Palm Springs is renowned for its mid-century modern architecture, a style
              characterized by clean lines, geometric shapes, and a blend of indoor and outdoor
              living. This aesthetic is not just a visual treat but a part of the city's identity.
              At 1REALTOUR.com, we bring this style to life in our web designs, using a color
              palette that includes warm neutrals, earthy tones, and vibrant teals and oranges.
            </p>

            <button className="bg-[#F29AA7] flex gap-2 items-center hover:bg-[#E85A8E] text-white font-avenir-lt font-semibold px-8 py-3 rounded transition-colors w-fit">
              Read More{' '}
              <Image src="/arrow_white.svg" alt="" width={17} height={14} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
