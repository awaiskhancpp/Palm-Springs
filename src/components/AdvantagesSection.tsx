import Image from 'next/image'
export default function AdvantagesSection() {
  const advantages = [
    {
      id: 1,
      icon: '/customized_solution.png',
      title: 'Customized Solutions',
      description:
        "We understand that every business is unique. That's why we offer customized web design solutions tailored to your specific needs and goals",
    },
    {
      id: 2,
      icon: '/seo.png',
      title: 'SEO Optimization',
      description:
        'A beautiful website is only effective if people can find it. Our designs are SEO-optimized to ensure that your website ranks high in search engine results.',
    },
    {
      id: 3,
      icon: '/responsive_design.png',
      title: 'Responsive Design',
      description:
        'With the increasing use of mobile devices, having a responsive website is more important than ever. Our designs are fully responsive,',
    },
  ]

  return (
    <section className="relative w-full bg-[#0080801A] py-16 overflow-hidden">
      <Image
        src="/tree_right.png"
        alt=""
        width={200}
        height={240}
        className="absolute top-6 -right-2"
      />
      <div
        className="
    absolute
    bottom-0
    right-0
    translate-x-1/3
    translate-y-1/3
    w-[313px]
    h-[313px]
    rounded-full
    bg-[#008080]
    opacity-10
    blur-[234px]
    pointer-events-none
    z-0
  "
      />
      <div
        className="
          absolute
          right-0
          top-0
          -translate-y-1/2
          w-[313px]
          h-[313px]
          rounded-full
          bg-[#008080]
          opacity-10
          blur-[234px]
          pointer-events-none
          z-0
        "
      />
      <div className="relative max-w-[1240px] w-[95%] mx-auto">
        <div
          className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[400px]
          h-[400px]
          rounded-full
          bg-[#008080]/10
          blur-[120px]
          pointer-events-none
        "
        />
        <div
          id="advantage"
          className="absolute -left-10 top-0 xl:top-20 w-[53.18px] h-[73.36px] relative"
        >
          <div className="w-[40.77px] h-[40.77px] rounded-full bg-[linear-gradient(180deg,#FFA500_0%,#EA7000_100%)]" />
          <div className="w-[20.39px] h-[20.39px] mt-4 ml-10 rounded-full bg-[radial-gradient(circle_at_50%_50%,#00B8B8_0%,#008080_100%)]" />
        </div>
        <div className="text-center mb-16">
          <h2 className="font-futura-black font-normal text-[44px] leading-[100%] mb-4">
            The <span className="text-primary">1REALTOUR.com</span> Advantage
          </h2>
          <p className="font-avenir-lt text-[18px] tracking-normal leading-[28px] text-[#333333] max-w-[930px] mx-auto">
            As a leading web design company,{' '}
            <span className="font-bold text-primary">1REALTOUR.com</span> brings a wealth of
            experience and expertise to every project. Our team of skilled designers and developers
            is passionate about creating websites that not only look great but also deliver results.
            Here's what sets us apart:
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-8">
          {advantages.map((advantage) => (
            <div
              key={advantage.id}
              className={`
    flex flex-col h-full gap-2 pl-4 py-6 pr-6 rounded-2xl
    border border-[#0000004D] hover:border-opacity-40 transition-all
    ${advantage.id === 3 ? 'md:col-span-2 md:max-w-[50%] md:mx-auto lg:col-span-1 lg:max-w-none' : ''}
  `}
            >
              <div className="w-[57px] h-[54px] rounded-[5px] flex justify-center items-center bg-primary">
                <Image src={advantage.icon} alt="" width={36} height={37} />
              </div>

              <h3 className="font-futura-black text-[24px] text-[#232323]">{advantage.title}</h3>

              <p className="flex-grow font-gilroy font-normal  capitalize text-[16px] leading-7 text-[#333333]">
                {advantage.description}
              </p>

              <a
                href="#"
                className="font-gilroy font-normal flex gap-2 underline capitalize underline-offset-3 items-center text-[16px] text-[#FF2243] hover:text-[#E85A8E] font-semibold"
              >
                Learn more
                <Image src="/arrow_red.svg" alt="" width={14} height={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
