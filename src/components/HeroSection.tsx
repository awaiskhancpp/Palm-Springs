import Image from 'next/image'

export default function HeroSection() {
  return (
    <section id="home" className="bg-beige overflow-hidden">
      {/*
        Outer wrapper: flex-col + lg:min-h fills the viewport below the navbar.
        Children use flex-1 to grow into this height.
      */}
      <div className="relative lg:min-h-[calc(100vh-60px)] flex flex-col">
        {/* ── Decorative circles ───────────────────────────────────────── */}

        {/* Large orange — bleeds off bottom-left */}
        <div
          className="absolute w-[84px] h-[84px] 2xl:w-[110px] 2xl:h-[110px]
                     left-[10%] md:left-[30%] lg:left-[20%] 2xl:left-[35%]
                     -bottom-6 rounded-full
                     bg-gradient-to-b from-[#FFA500] to-[#EA7000]"
        />

        {/* Orange + teal duo — upper-center region */}
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

        {/* Small teal — mid-section */}
        <div
          className="absolute top-[35%] left-1/2
                     md:top-[20%] md:left-[70%]
                     lg:top-1/2 lg:left-1/2
                     w-7 h-7 2xl:w-9 2xl:h-9 rounded-full
                     bg-[radial-gradient(circle,_#00B8B8_0%,_#008080_100%)]"
        />

        {/* Large orange — bleeds off left edge; hidden at 2xl once container is centered */}
        <div
          className="2xl:hidden absolute -left-16 xl:-left-10 top-2
                     w-24 h-24 md:w-[100px] md:h-[100px] rounded-full
                     bg-gradient-to-b from-[#FFA500] to-[#EA7000]"
        />

        {/* ── Centered max-width container ─────────────────────────────── */}
        <div className="relative w-full max-w-[1440px] mx-auto flex-1 flex flex-col">
          {/* Small orange — top-right of container */}
          <div
            className="absolute top-20 -right-6
                       w-8 h-8 md:w-12 md:h-12 2xl:w-16 2xl:h-16
                       bg-gradient-to-b from-[#FFA500] to-[#EA7000] rounded-full"
          />

          {/*
            12-col grid. flex-1 makes it fill the full container height on lg+.
            Single column on mobile → stacks vertically.
            Both cells default to align-self:stretch → same row height.
          */}
          <div className="grid grid-cols-1 lg:grid-cols-12 flex-1">
            {/* ── LEFT: Text content ──────────────────────────────────── */}
            <div className="order-1 lg:col-span-6 flex items-center justify-center">
              <div
                className="flex flex-col justify-center items-center lg:items-start
                           text-center lg:text-left
                           gap-4 xl:gap-5 2xl:gap-6
                           px-6 pt-10 pb-6 lg:py-0 lg:pl-[8%] lg:pr-8"
              >
                {/* Welcome badge */}
                <div className="inline-flex items-center border border-[#232323] rounded-full px-5 py-2 w-fit">
                  <span className="font-avenir-lt font-extralight text-[13px] xl:text-[14px] 2xl:text-[16px] text-[#232323]">
                    Welcome to 1REALTOUR.com
                  </span>
                </div>

                {/*
                  HEADING — always exactly 3 lines via <br />.

                  Font: clamp(34px, 4.2vw, 62px)  ← fluid, no breakpoint gaps.

                  Why this works without soft-wrapping "Your PREMIER Web":
                  ┌──────────┬──────────┬──────────────┬───────────────────┐
                  │ Viewport │ Font     │ Col text-area │ "Your PREMIER Web" │
                  ├──────────┼──────────┼──────────────┼───────────────────┤
                  │ 1024 lg  │ ≈ 43 px  │ ≈ 439 px     │ ≈ 425 px  ✓       │
                  │ 1280 xl  │ ≈ 54 px  │ ≈ 557 px     │ ≈ 534 px  ✓       │
                  │ 1440 2xl │ ≈ 60 px  │ ≈ 630 px     │ ≈ 593 px  ✓       │
                  └──────────┴──────────┴──────────────┴───────────────────┘
                  Col text-area = col_width − pl(8% of col) − pr(2rem).
                  "Your PREMIER Web" width estimated from Futura Black glyph metrics.
                */}
                <h1 className="font-futura-black leading-[1.15] text-[clamp(34px,4.2vw,62px)]">
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

                {/* Body copy */}
                <p
                  className="font-avenir-lt font-extralight
                             text-[14px] md:text-[16px] xl:text-[17px] 2xl:text-[20px]
                             text-[#333333] leading-7 xl:leading-8 2xl:leading-9
                             max-w-[440px] xl:max-w-[500px] 2xl:max-w-[600px]"
                >
                  At 1REALTOUR.com, we understand the unique charm and vibrant culture of Palm
                  Springs, California.
                </p>

                {/* CTA */}
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
            <div className="">
              <div className="w-full aspect-[617/604] lg:hidden" aria-hidden="true" />
              <Image
                src="/tropical.png"
                alt="Tropical Palm Springs illustration"
                fill
                className="object-contain object-bottom"
                sizes="(max-width: 1023px) 100vw, (max-width: 1440px) 50vw, 720px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
