import Image from 'next/image'

export default function HeroSection() {
  return (
    <section id="home" className="bg-beige overflow-hidden">
      {/*
        OUTER: flex column, min-h kicks in at lg (not xl).
        Removed: max-h-screen (was fighting the min-h),
                 xl:min-h (started too late),
                 lg:pt-16 xl:pt-0 (hack replaced by proper flex alignment)
      */}
      <div className="relative lg:min-h-[calc(100vh-60px)] flex flex-col">
        {/* ── Decorative circles ─────────────────────────── */}
        <div
          className="absolute w-[84px] h-[84px] 2xl:w-[110px] 2xl:h-[110px]
                        left-[10%] md:left-[30%] lg:left-[20%] 2xl:left-[35%]
                        -bottom-6 rounded-full
                        bg-gradient-to-b from-[#FFA500] to-[#EA7000]"
        />

        <div className="absolute top-4 xl:top-[10%] right-[10%] lg:left-1/2 xl:left-[40%]">
          <div
            className="w-10 h-10 2xl:w-14 2xl:h-14 rounded-full
                          bg-gradient-to-b from-[#FFA500] to-[#EA7000]"
          />
          <div
            className="absolute top-14 left-8 w-5 h-5 2xl:w-7 2xl:h-7 rounded-full
                          bg-[radial-gradient(circle,_#00B8B8_0%,_#008080_100%)]"
          />
        </div>

        <div
          className="absolute top-[35%] left-1/2 md:top-[20%] md:left-[70%]
                        lg:top-1/2 lg:left-1/2
                        w-7 h-7 2xl:w-9 2xl:h-9 rounded-full
                        bg-[radial-gradient(circle,_#00B8B8_0%,_#008080_100%)]"
        />

        <div
          className="2xl:hidden absolute -left-16 xl:-left-10 top-2
                        w-24 h-24 md:w-[100px] md:h-[100px] rounded-full
                        bg-gradient-to-b from-[#FFA500] to-[#EA7000]"
        />

        {/* ── Inner max-width container ───────────────────
            flex-1: grows to fill the outer flex column's height
        */}
        <div className="relative w-full max-w-[1440px] mx-auto flex-1 flex flex-col">
          <div
            className="absolute top-20 -right-6
                          w-8 h-8 md:w-12 md:h-12 2xl:w-16 2xl:h-16
                          bg-gradient-to-b from-[#FFA500] to-[#EA7000] rounded-full"
          />

          {/*
            GRID: flex-1 → stretches to fill inner container height (= section height on lg+)
            Grid items default to align-self: stretch so both columns are full-height.
            Each column then uses its own flex alignment for content positioning.
          */}
          <div className="grid grid-cols-1 lg:grid-cols-12 flex-1">
            {/* ── Text content — vertically centered in its column ── */}
            <div className="order-1 lg:col-span-6 flex items-center justify-center">
              <div
                className="flex flex-col justify-center items-center  lg:items-start
                              text-center lg:text-left
                              gap-4 xl:gap-5 2xl:gap-6
                              px-6 pt-10 pb-6
                              lg:py-0 lg:pl-[8%] lg:pr-8"
              >
                <div className="inline-flex items-center border border-[#232323] rounded-full px-5 py-2 w-fit">
                  <span className="font-avenir-lt font-extralight text-[13px] xl:text-[14px] 2xl:text-[16px] text-[#232323]">
                    Welcome to 1REALTOUR.com
                  </span>
                </div>

                {/* Font scales: 36 → 44 → 50 → 60 → 74px */}
                <h1 className="font-futura-black text-[36px] sm:text-[44px] lg:text-[50px] xl:text-[60px] 2xl:text-[74px] leading-[1.15]">
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

                <p
                  className="font-avenir-lt font-extralight
                              text-[14px] md:text-[16px] xl:text-[17px] 2xl:text-[20px]
                              text-[#333333] leading-7 xl:leading-8 2xl:leading-9
                              max-w-[440px] xl:max-w-[500px] 2xl:max-w-[600px]"
                >
                  At 1REALTOUR.com, we understand the unique charm and vibrant culture of Palm
                  Springs, California.
                </p>

                <button
                  className="bg-primary mb-4 xl:mb-6 2xl:mb-10
                    flex gap-2 items-center
                    hover:bg-[#006666] text-white font-avenir-lt font-semibold
                    text-[15px] xl:text-[16px] 2xl:text-[18px]
                    px-8 py-3 xl:px-10 xl:py-4 2xl:px-12
                    rounded-[5px] transition-colors w-fit"
                >
                  Read More <Image src="/arrow_white.svg" alt="" width={17} height={14} />
                </button>
              </div>
            </div>
            <div className="order-2 lg:col-span-6 lg:flex lg:items-end">
              <Image
                src="/tropical.png"
                alt=""
                width={617}
                height={604}
                className="w-full 2xl:w-[full] 2xl:h-[780px] lg:h-[620px] 2xl:object-contain h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
// Image 1 (1024x824 at 100%):

// Layout switches to 2-column (lg breakpoint) ✓
// Content is on the left ✓
// But the image is too small and cut off at the bottom - it doesn't fill the height properly
// There's a lot of empty space at the top between nav and content

// Image 2 (2560x1177 at 50% = CSS 2560x1177):

// Content looks reasonable but image is still too small relative to screen
// Image doesn't touch the bottom
// The title wraps in an ugly way ("Your PREMIER" on line 1, "Web" on line 2, "Design Partner in" on line 3, "PALM SPRINGS" on line 4) - this is because at 2xl the font is 74px and the content column is only 7/12 of 1440px = 840px wide

// Image 3 (768x824 at 100%):

// Single column (md breakpoint)
// Content is NOT centered - it's left-aligned at md
// Image below is very large and looks decent but too wide/taking up too much space
// The content needs to be centered at md

// So the main issues are:

// Image too small - needs to be bigger, especially on larger screens
// Content not centered on md - needs text-center on md too
// Image doesn't fill height properly - the image anchor-to-bottom approach works but the image itself isn't large enough to visually fill the space
