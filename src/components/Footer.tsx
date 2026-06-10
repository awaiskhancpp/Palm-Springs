import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative w-full py-6 md:py-12 rounded-t-3xl overflow-hidden">
      <Image
        src="/footer-bg.jpg"
        alt="Footer Background"
        fill
        className="object-cover rounded-t-3xl absolute inset-0"
        priority
      />

      <div className="absolute inset-0 bg-[rgba(245,245,220,0.86)] rounded-t-3xl" />

      {/* Content wrapper - sits on top of background */}
      <div className="relative z-10 max-w-[1441px] w-[95%] mx-auto px-4 md:px-0">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          <div className="flex flex-col items-center w-full md:w-auto gap-4 md:gap-6">
            {/* Heading - scales from 32px to 46px */}
            <h2 className="font-futura-black text-[32px] sm:text-[40px] md:text-[46px] leading-tight uppercase text-center">
              <span className="text-primary">Palm </span>
              <span className="text-secondary">Springs</span>
            </h2>

            {/* Contact label - scales from 18px to 24px */}
            <p className="font-avenir-lt text-[18px] sm:text-[20px] md:text-[24px] font-semibold text-[#232323]">
              Contact us
            </p>

            {/* Email link - scales from 18px to 24px */}
            <a
              href="mailto:hello@company.com"
              className="font-avenir-lt text-[18px] sm:text-[20px] md:text-[24px] font-semibold text-[#232323] hover:underline transition-all"
            >
              hello@company.com
            </a>

            {/* Social Links */}
            <div className="flex gap-4 md:gap-6">
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10  bg-[#F29AA7] hover:bg-[#E87B8F] rounded-md flex items-center justify-center transition-colors"
              >
                <Image src="/social/twitter.png" alt="twitter" width={40} height={40} />
              </a>
              <a
                href="#"
                aria-label="Discord"
                className="w-10 h-10  bg-[#F29AA7] hover:bg-[#E87B8F] rounded-md flex items-center justify-center transition-colors"
              >
                <Image src="/social/discord.png" alt="discord" width={40} height={40} />
              </a>
              <a
                href="#"
                aria-label="Telegram"
                className="w-10 h-10 bg-[#F29AA7] hover:bg-[#E87B8F] rounded-md flex items-center justify-center transition-colors"
              >
                <Image src="/social/telegram.png" alt="telegram" width={40} height={40} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width divider - outside constraints */}
      <div className="relative z-10 w-full h-[1px] md:h-[2px] bg-[#1E1E1E] mt-4 md:mt-6" />

      {/* Copyright - also on top */}
      <div className="relative z-10 text-center mt-4 md:mt-6 px-4">
        <p className="font-avenir-lt text-[12px] sm:text-[13px] md:text-[14px] font-normal text-[#232323]">
          Copyright © {currentYear} 1REALTOUR.com - All rights reserved
        </p>
      </div>
    </footer>
  )
}
