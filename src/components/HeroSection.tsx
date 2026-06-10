import Image from 'next/image'
export default function HeroSection() {
  return (
    <section className="relative z-0 w-full min-h-[calc(100vh-68px)] bg-beige flex items-center">
      {/* Decorative Circles */}
      {/* Large Orange Circle - Bottom Left */}
      <div className="absolute w-[83.9px] h-[83.9px] left-[302.21px] -bottom-3 rounded-full bg-gradient-to-b from-[#FFA500] to-[#EA7000]" />

      {/* Small Orange Circle - Top Center-Right */}
      <div className="absolute top-12 md:top-20 right-32 md:right-40 w-8 h-8 md:w-12 md:h-12 bg-gradient-to-b from-[#FFA500] to-[#EA7000] rounded-full" />

      {/* Small Teal Circle - Top Right */}
      <div className="absolute top-16 md:top-24 right-24 md:right-32 w-6 h-6 md:w-8 md:h-8 bg-primary rounded-full opacity-70" />

      <div className="max-w-[1441px] w-[95%] mx-auto pt-10 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-4">
            {/* Welcome Badge */}
            <div className="inline-flex items-center gap-2 border border-[#232323] rounded-full px-6 md:px-8 py-2.5 w-fit">
              <span className="font-avenir-lt font-semibold text-[13px] md:text-[16px] text-[#232323]">
                Welcome to 1REALTOUR.com
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-futura-black text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.1]">
              <span className="text-primary">Your </span>
              <span
                className="text-secondary uppercase "
                style={{ textShadow: '4px 4px 0 #008080' }}
              >
                PREMIER
              </span>
              <span className="text-primary"> Web</span>
              <br className="hidden sm:block" />
              <span className="text-primary">Design Partner in </span>
              <br className="hidden sm:block" />
              <span className="text-[#FF8394]">PALM </span>
              <span
                className="text-secondary uppercase"
                style={{ textShadow: '4px 4px 0 #008080' }}
              >
                SPRINGS
              </span>
            </h1>

            {/* Subheading */}
            <p className="font-avenir-lt font-light text-[18px] text-[#333333] tracking-normal leading-[28px] max-w-2xl">
              At 1REALTOUR.com, we understand the unique charm and vibrant culture of Palm Springs,
              California.
            </p>

            <button className="bg-primary flex gap-2 items-center hover:bg-[#006666] text-white font-avenir-lt font-semibold text-[15px] md:text-[16px] px-8 md:px-10 py-3 md:py-3.5 rounded transition-colors w-fit">
              Read More <Image src="/arrow_white.svg" alt="" width={17} height={14} />
            </button>
          </div>

          <div className="relative flex justify-center items-center mt-8 lg:mt-0">
            <Image
              src="/tropical.png"
              alt=""
              width={580}
              height={500}
              className="w-full max-w-[520px] xl:max-w-[620px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
