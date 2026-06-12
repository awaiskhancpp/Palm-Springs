import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative w-full py-6 md:py-12 bg-[#0080801A]">
      <div className="absolute inset-0 rounded-t-3xl overflow-hidden">
        <Image src="/Footer_img.png" alt="Footer Background" fill className="  " priority />
      </div>

      <div className="relative z-10 px-4 md:px-0">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          <div className="flex flex-col items-center w-full md:w-auto gap-4 md:gap-6">
            {/* Heading - scales from 32px to 46px */}
            <h2 className="font-futura-black text-[32px] sm:text-[40px] md:text-[46px] leading-tight uppercase text-center">
              <span className="text-primary">Palm </span>
              <span className="text-secondary">Springs</span>
            </h2>

            <p className="font-avenir-lt text-[18px] sm:text-[20px] md:text-[24px] font-medium text-[#232323]">
              Contact us
            </p>

            <a
              href="mailto:hello@company.com"
              className="font-avenir-lt text-[18px] sm:text-[20px] md:text-[24px] font-medium text-[#232323] hover:underline transition-all"
            >
              hello@company.com
            </a>

            {/* Social Links */}
            <div className="flex gap-4 md:gap-6">
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10  bg-[#F29AA7] hover:bg-[#E87B8F] pt-1 rounded-md flex items-center justify-center transition-colors"
              >
                <Image src="/social/twitter.svg" alt="twitter" width={28} height={28} />
              </a>
              <a
                href="#"
                aria-label="Discord"
                className="w-10 h-10 flex items-center justify-center pt-1 bg-[#F29AA7] hover:bg-[#E87B8F] *: rounded-md flex items-center justify-center transition-colors"
              >
                <Image src="/social/discord.svg" alt="discord" width={28} height={28} />
              </a>
              <a
                href="#"
                aria-label="Telegram"
                className="w-10 h-10 bg-[#F29AA7] hover:bg-[#E87B8F] pt-1 rounded-md flex items-center justify-center transition-colors"
              >
                <Image src="/social/telegram.svg" alt="telegram" width={28} height={28} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-[98vw] mx-auto h-[1px] md:h-[2px] bg-[#1E1E1E] mt-4 md:mt-6" />

      <div className="relative z-10 text-center mt-4 md:mt-6 px-4">
        <p className="font-avenir-lt text-[12px] sm:text-[13px] md:text-[14px] font-normal text-[#232323]">
          Copyright © {currentYear} 1REALTOUR.com - All rights reserved
        </p>
      </div>
    </footer>
  )
}
