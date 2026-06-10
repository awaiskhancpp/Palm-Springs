import Image from 'next/image'

export default function MidCenturySection() {
  return (
    <section className="w-full bg-[#0080801A] py-16 lg:py-24">
      <div className="max-w-[1441px] w-[95%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-[520px]">
            <div className="relative w-full h-full flex items-center justify-start">
              {/* Border frame background */}
              <div className="absolute left-0 top-14 w-[540px] h-[460px]  rounded-3xl border-5 border-[#FFA500] z-0"></div>

              {/* Image positioned to overflow */}
              <div className="relative z-10 -ml-8">
                <Image
                  src="/person-drawing.png"
                  alt="person working"
                  width={560}
                  height={500}
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-6">
            <h2 className="font-futura-black text-[42px] leading-tight">
              Embracing the Mid-
              <br /> Century
              <span className="text-[#008080]"> Modern Aesthetic</span>
            </h2>

            <p className="font-avenir-lt text-[18px] leading-[28px] text-[#333333]">
              Palm Springs is renowned for its mid-century modern architecture, a style
              characterized by clean lines, geometric shapes, and a blend of indoor and outdoor
              living. This aesthetic is not just a visual treat but a part of the city's identity.
              At 1REALTOUR.com, we bring this style to life in our web designs, using a color
              palette that includes warm neutrals, earthy tones, and vibrant teals and oranges.
            </p>
            <button className="bg-[#F29AA7] hover:bg-[#E85A8E] text-white font-avenir-lt font-semibold px-8 py-3 rounded transition-colors w-fit">
              Learn More →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
