import Image from 'next/image'

const premierShadow = { textShadow: '0 4px 0 #0a5858' } as const

export default function Hero() {
  return (
    <section id="home" className="bg-beige overflow-hidden">
      {/*
        Figma hero frame (node 8:74): 1440 × 722px including nav.
        Navbar is a separate component (~60px), so hero min-height ≈ 662px at 1440.
      */}
      <div className="relative min-h-[clamp(520px,50.14vw,760px)] flex flex-col">
        {/* ── Decorative circles (Figma nodes 8:266, 8:274, 8:275, 8:273, 8:832) ── */}

        {/* Large orange — bleeds off top-left (8:266: 99px @ left -38, top 108) */}
        <div
          className="absolute -left-[5%] top-[8%] w-[clamp(72px,6.9vw,99px)] h-[clamp(72px,6.9vw,99px)] rounded-full
                     bg-gradient-to-b from-[#FFA500] to-[#EA7000]"
          aria-hidden="true"
        />

        {/* Large orange — bleeds up from section below (8:832: 313px glow @ left 36%, top 848) */}
        <div
          className="absolute left-[36%] -bottom-[6%] w-[83px] h-[83px] rounded-full
                     bg-gradient-to-b from-[#FFA500] to-[#EA7000] opacity-90"
          aria-hidden="true"
        />

        {/* Orange dot — center-top (8:274: 41px @ 47.5%, top 98) */}
        <div
          className="absolute right-20 lg:left-[42.5%] top-[6%] lg:top-[13.5%] w-[clamp(28px,2.83vw,41px)] h-[clamp(28px,2.83vw,41px)] rounded-full
                     bg-gradient-to-b from-[#FFA500] to-[#EA7000]"
          aria-hidden="true"
        />

        {/* Teal dot — upper-mid (8:275: 20px @ 49.8%, top 151) */}
        <div
          className="absolute right-20 lg:left-[44.8%] top-[10%] lg:top-[20.9%] w-[clamp(14px,1.42vw,20px)] h-[clamp(14px,1.42vw,20px)] rounded-full
                     bg-[radial-gradient(circle,_#00B8B8_0%,_#008080_100%)]"
          aria-hidden="true"
        />

        {/* Teal dot — mid (8:273: 28px @ 54%, top 424) */}
        <div
          className="absolute left-[54%] top-[58.7%] w-[clamp(20px,1.98vw,28px)] h-[clamp(20px,1.98vw,28px)] rounded-full
                     bg-[radial-gradient(circle,_#00B8B8_0%,_#008080_100%)]"
          aria-hidden="true"
        />

        <div className="relative w-full max-w-[1440px] mx-auto flex-1 flex flex-col">
          <div
            className="absolute top-20 -right-6
                       w-8 h-8 md:w-12 md:h-12 2xl:w-16 2xl:h-16
                       bg-gradient-to-b from-[#FFA500] to-[#EA7000] rounded-full"
          />
          <div className="grid grid-cols-1 lg:grid-cols-12 flex-1">
            {/* Text column — Figma content x ≈ 102px (7.07% of 1440) */}
            <div className="order-1 lg:col-span-6 flex items-center justify-center">
              <div
                className="relative z-10 flex flex-col justify-center items-center lg:items-start
                           text-center lg:text-left
                           gap-[clamp(18px,2.1vw,30px)]
                           px-6 pt-8 pb-6
                           lg:py-0 lg:pl-[7.07%] lg:pr-8"
              >
                {/* Badge (8:81): px 40, py 10, radius 90, text 24px */}
                <div
                  className="inline-flex items-center border border-[#232323] rounded-full
                             px-[clamp(20px,2.78vw,40px)] py-[clamp(6px,0.69vw,10px)] w-fit"
                >
                  <span
                    className="font-avenir-lt font-extralight text-[#232323]
                               text-[clamp(13px,1.67vw,24px)] leading-[clamp(18px,1.94vw,28px)]"
                  >
                    Welcome to 1REALTOUR.com
                  </span>
                </div>

                {/*
                  H1 (8:83–8:88): 66px / 79px lh at 1440.
                  Premier & Springs are orange layers over #0a5858 shadow offset.
                */}
                <h1
                  className="font-futura-black text-[clamp(32px,4.58vw,66px)]
                             leading-[clamp(38px,5.49vw,79px)]"
                >
                  <span className="whitespace-nowrap">
                    <span className="text-primary">Your </span>
                    <span className="text-secondary uppercase" style={premierShadow}>
                      PREMIER
                    </span>
                    <span className="text-primary"> Web</span>
                  </span>
                  <br />
                  <span className="text-primary">Design Partner in</span>
                  <br />
                  <span className="text-[#FF8394]">PALM </span>
                  <span className="text-secondary uppercase" style={premierShadow}>
                    SPRINGS
                  </span>
                </h1>

                {/* Body (8:89): 18px / 28px lh, max 636px */}
                <p
                  className="font-avenir-lt font-extralight text-[#333333]
                             text-[clamp(14px,1.25vw,18px)] leading-[clamp(22px,1.94vw,28px)]
                             max-w-[636px]"
                >
                  At 1REALTOUR.com, we understand the unique charm and vibrant culture of Palm
                  Springs, California.
                </p>

                {/* CTA (8:90): px 40, py 14, gap 10, radius 5, text 18px */}
                <button
                  type="button"
                  className="bg-primary flex items-center gap-[10px]
                             hover:bg-[#006666] text-white font-avenir-lt font-semibold
                             text-[clamp(15px,1.25vw,18px)] leading-[28px]
                             px-[clamp(24px,2.78vw,40px)] py-[clamp(10px,0.97vw,14px)]
                             rounded-[5px] transition-colors w-fit mb-2 lg:mb-0"
                >
                  Read More <Image src="/arrow_white.svg" alt="" width={17} height={14} />
                </button>
              </div>
            </div>

            {/*
              Illustration (8:258): 617 × 605px, right-aligned, top ≈ 108px in Figma frame.
              Mobile: aspect-ratio spacer; desktop: fill column, anchor bottom.
            */}
            <div className="order-2 lg:col-span-6 relative">
              <div className="w-full aspect-[617/605] lg:hidden" aria-hidden="true" />
              <Image
                src="/tropical.png"
                alt="Tropical Palm Springs illustration"
                fill
                className="object-contain object-bottom lg:object-right-bottom"
                sizes="(max-width: 1023px) 100vw, 617px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
