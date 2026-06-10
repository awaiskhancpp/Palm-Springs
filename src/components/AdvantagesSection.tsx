import Image from 'next/image'
export default function AdvantagesSection() {
  const advantages = [
    {
      id: 1,
      icon: '/customized_solution.png',
      title: 'Architectural Aesthetics',
      description:
        'Expert architects and designers with specialized knowledge of mid-century modern design principles and contemporary architectural trends.',
    },
    {
      id: 2,
      icon: '/seo.png',
      title: 'SEO Optimization',
      description:
        'Our team implements the latest SEO practices to ensure your digital presence ranks highly in search results and reaches your target audience.',
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
    <section className="w-full bg-[#0080801A] py-16">
      <div className="max-w-[1441px] w-[95%] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-futura-black text-[42px] leading-[100%] mb-4">
            The <span className="text-primary">1REALTOUR.com</span> Advantage
          </h2>
          <p className="font-avenir-lt text-[18px] tracking-normal leading-[28px] text-[#333333] max-w-4xl mx-auto">
            As a leading web design company,{' '}
            <span className="font-bold text-primary">1REALTOUR.com</span> brings a wealth of
            experience and expertise to every project. Our team of skilled designers and developers
            is passionate about creating websites that not only look great but also deliver results.
            Here's what sets us apart:
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((advantage) => (
            <div
              key={advantage.id}
              className="flex flex-col h-full gap-4 p-8 bg-gradient-to-br from-[#F0F8F8] to-white rounded-2xl border border-[#0000004D] hover:border-opacity-40 transition-all"
            >
              <div className="w-[57px] h-[54px] rounded-[5px] flex justify-center items-center bg-primary">
                <Image src={advantage.icon} alt="" width={36} height={37} />
              </div>

              <h3 className="font-futura-black text-[24px] text-[#232323]">{advantage.title}</h3>

              <p className="flex-grow font-avenir-lt text-[16px] leading-[28px] text-[#333333]">
                {advantage.description}
              </p>

              <a
                href="#"
                className="font-avenir-lt flex gap-2 items-center text-[14px] text-[#FF2243] hover:text-[#E85A8E] font-semibold"
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
