import Image from 'next/image'
export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[calc(100vh-68px)] xl:min-h-auto bg-beige flex items-center overflow-hidden">
      <div className="relative max-w-[1441px] w-[95%] mx-auto pt-10 lg:pt-0 pb-0">
        <div className="absolute w-[83.9px] h-[83.9px] left-1/2 md:left-[30%] lg:left-[20%] -bottom-6 rounded-full bg-gradient-to-b from-[#FFA500] to-[#EA7000]" />

        <div className="absolute top-17 -right-17 w-8 h-8 md:w-12 md:h-12 bg-gradient-to-b from-[#FFA500] to-[#EA7000] rounded-full" />
        <div className="absolute lg:top-10 top-1 left-1/2 lg:left-[40%]">
          <div className="w-10 h-10 rounded-full bg-gradient-to-b from-[#FFA500] to-[#EA7000]" />
          <div className="absolute top-9 left-8 w-5 h-5 rounded-full bg-[radial-gradient(circle,_#00B8B8_0%,_#008080_100%)]" />
        </div>
        <div className="absolute top-[35%] left-1/2 md:top-[20%] md:left-[70%] lg:top-1/2 lg:left-1/2 w-7 h-7 rounded-full bg-[radial-gradient(circle,_#00B8B8_0%,_#008080_100%)]" />
        <div className="2xl:hidden absolute -left-26 top-20 w-24 h-24 md:w-[100px] md:h-[100px] rounded-full bg-gradient-to-b from-[#FFA500] to-[#EA7000]" />

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center p-10 lg:p-0">
          {/* Left Content */}
          <div className="order-2 lg:order-1 flex flex-col gap-4">
            {/* Welcome Badge */}
            <div className="inline-flex items-center gap-2 mt-2  border border-[#232323] rounded-full px-4 md:px-8 py-2 md:py-2.5 w-fit">
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

            <button className="bg-primary flex gap-2 items-center mb-4 hover:bg-[#006666] text-white font-avenir-lt font-semibold text-[15px] md:text-[16px] px-8 md:px-10 py-3 md:py-3.5 rounded transition-colors w-fit">
              Read More <Image src="/arrow_white.svg" alt="" width={17} height={14} />
            </button>
          </div>

          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end items-center ">
            <Image
              src="/tropical.png"
              alt="tropical scene"
              width={517}
              height={504}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
