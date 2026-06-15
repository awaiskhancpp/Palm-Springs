import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="bg-beige overflow-hidden">
      {/* Full-width: positioning context for circles. flex-col only, no justify-center */}
      <div className="relative min-h-[calc(100vh-64px)] lg:min-h-0 xl:min-h-[calc(100vh-64px)] md:pt-16 lg:pt-0 2xl:min-h-0 2xl:pt-20 flex flex-col justify-end">
        <div className="absolute w-[83.9px] h-[83.9px] left-[10%] md:left-[30%] lg:left-[20%] -bottom-6 2xl:-bottom-10 2xl:left-[35%] rounded-full bg-gradient-to-b from-[#FFA500] to-[#EA7000]" />

        <div className="absolute top-4 xl:top-[10%] left-1/2 xl:left-[40%]">
          <div className="w-10 h-10 rounded-full bg-gradient-to-b from-[#FFA500] to-[#EA7000]" />
          <div className="absolute top-9 left-8 w-5 h-5 rounded-full bg-[radial-gradient(circle,_#00B8B8_0%,_#008080_100%)]" />
        </div>

        <div className="absolute top-[35%] left-1/2 md:top-[20%] md:left-[70%] lg:top-1/2 lg:left-1/2 w-7 h-7 rounded-full bg-[radial-gradient(circle,_#00B8B8_0%,_#008080_100%)]" />

        <div className="2xl:hidden absolute -left-16 xl:-left-10 top-2 w-24 h-24 md:w-[100px] md:h-[100px] rounded-full bg-gradient-to-b from-[#FFA500] to-[#EA7000]" />

        {/* Wrapper */}
        <div className="relative w-full max-w-[1440px] mx-auto lg:flex-1 flex flex-col justify-center lg:justify-end xl:justify-center">
          <div className="absolute top-20 -right-6 w-8 h-8 md:w-12 md:h-12 bg-gradient-to-b from-[#FFA500] to-[#EA7000] rounded-full" />

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:h-full items-center">
            {/* Image */}
            <div className="order-2 lg:order-2 lg:col-span-5 lg:self-end">
              <Image
                src="/tropical.png"
                alt=""
                width={617}
                height={604}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-1 lg:col-span-7">
              <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-4 px-6 lg:pb-0 lg:pl-[8%] lg:pr-8 pt-12  lg:pt-0">
                <div className="inline-flex items-center border border-[#232323] rounded-full px-5 py-2 w-fit">
                  <span className="font-avenir-lt font-extralight text-[13px] text-[#232323]">
                    Welcome to 1REALTOUR.com
                  </span>
                </div>

                <h1 className="font-futura-black text-[36px] sm:text-[42px] lg:text-[50px] xl:text-[56px] leading-[1.2]">
                  <span className="text-primary">Your </span>
                  <span
                    className="text-secondary uppercase"
                    style={{ textShadow: '4px 4px 0 #008080' }}
                  >
                    PREMIER
                  </span>
                  <span className="text-primary"> Web</span>
                  <br />
                  <span className="text-primary">Design Partner in</span>
                  <br />
                  <span className="text-[#FF8394]">PALM </span>
                  <span
                    className="text-secondary uppercase"
                    style={{ textShadow: '4px 4px 0 #008080' }}
                  >
                    SPRINGS
                  </span>
                </h1>

                <p className="font-avenir-lt font-extralight text-[14px] md:text-[16px] text-[#333333] leading-7 max-w-[440px]">
                  At 1REALTOUR.com, we understand the unique charm and vibrant culture of Palm
                  Springs, California.
                </p>

                <button className="bg-primary mb-4 xl:mb-10 flex gap-2 items-center hover:bg-[#006666] text-white font-avenir-lt font-semibold text-[15px] px-8 py-3 rounded-[5px] transition-colors w-fit">
                  Read More
                  <Image src="/arrow_white.svg" alt="" width={17} height={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
