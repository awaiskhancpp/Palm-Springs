import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-beige overflow-hidden"
      style={{
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 60px 100%, 0% calc(100% - 60px))',
      }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row min-h-[480px] lg:min-h-[560px] xl:min-h-[620px]">
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center gap-5 w-full md:w-[46%] px-6 py-12 sm:px-10 md:pl-16 md:pr-6 lg:pl-20">
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
              At 1REALTOUR.com, we understand the unique charm and vibrant culture of Palm Springs,
              California.
            </p>

            <button className="bg-primary flex gap-2 items-center hover:bg-[#006666] text-white font-avenir-lt font-semibold text-[15px] px-8 py-3 rounded-[5px] transition-colors w-fit">
              Read More <Image src="/arrow_white.svg" alt="" width={17} height={14} />
            </button>
          </div>

          {/* Right: Image */}
          <div className="w-full md:flex-1 flex items-end">
            <Image
              src="/tropical.png"
              alt=""
              width={617}
              height={604}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
