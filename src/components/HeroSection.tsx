import Image from 'next/image'
export default function HeroSection() {
  return (
    <section className="relative w-full h-[100vh] bg-[#F5F5DC]">
      {/* Decorative Circles */}
      {/* Large Orange Circle - Bottom Left */}
      <div className="absolute -bottom-16 md:-bottom-20 -left-16 md:-left-24 w-40 h-40 md:w-64 md:h-64 bg-[#FFA500] rounded-full opacity-70 -z-10" />

      {/* Small Orange Circle - Top Center-Right */}
      <div className="absolute top-12 md:top-20 right-32 md:right-40 w-8 h-8 md:w-12 md:h-12 bg-[#FFA500] rounded-full opacity-80" />

      {/* Small Teal Circle - Top Right */}
      <div className="absolute top-16 md:top-24 right-24 md:right-32 w-6 h-6 md:w-8 md:h-8 bg-primary rounded-full opacity-70" />

      <div className="max-w-[1441px] w-[95%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-4 pt-8 md:pt-0">
            {/* Welcome Badge */}
            <div className="inline-flex items-center gap-2 border border-[#232323] rounded-full px-6 md:px-8 py-2 md:py-2.5 w-fit">
              <span className="font-avenir-lt font-semibold text-[13px] md:text-[16px] text-[#232323]">
                Welcome to 1REALTOUR.com
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-futura-black text-[36px] sm:text-[48px] md:text-[56px] leading-tight">
              <span className="text-primary">Your </span>
              <span className="text-secondary uppercase">PREMIER</span>
              <span className="text-primary"> Web</span>
              <br className="hidden sm:block" />
              <span className="text-primary">Design Partner in </span>
              <br className="hidden sm:block" />
              <span className="text-[#FF8394]">PALM </span>
              <span className="text-secondary uppercase">SPRINGS</span>
            </h1>

            {/* Subheading */}
            <p className="font-avenir-lt font-light text-[15px] md:text-[18px] text-[#333333] leading-[24px] md:leading-[28px] max-w-xl">
              At 1REALTOUR.com, we understand the unique charm and vibrant culture of Palm Springs,
              California.
            </p>

            {/* Button */}
            <button className="bg-primary hover:bg-[#006666] text-white font-avenir-lt font-semibold text-[15px] md:text-[16px] px-8 md:px-10 py-3 md:py-3.5 rounded transition-colors w-fit">
              Read More →
            </button>
          </div>

          {/* Right Illustration */}
          <div className="relative flex justify-center items-center mt-8 lg:mt-0">
            <Image src="/tropical.png" alt="" width={580} height={500} />
          </div>
        </div>
      </div>
    </section>
  )
}
