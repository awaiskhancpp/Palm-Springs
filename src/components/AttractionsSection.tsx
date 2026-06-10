import Image from 'next/image'

export default function AttractionsSection() {
  const attractions = [
    {
      id: 1,
      img: '/resort.png',
      icon: '/resort_icon.png',
      title: 'Luxury Resorts and Boutique Hotels',
      description:
        'Palm Springs is home to some of the most luxurious resorts and boutique hotels in the country.',
    },
    {
      id: 2,
      img: '/dinning.png',
      icon: '/resort_icon.png',
      title: 'Fine Dining and Casual Eateries',
      description:
        'Palm Springs is home to some of the most luxurious resorts and boutique hotels in the country.',
    },
    {
      id: 3,
      img: '/shopping.png',
      icon: '/shopping_icon.png',
      title: 'Shopping Districts and Boutiques',
      description:
        'Palm Springs is home to some of the most luxurious resorts and boutique hotels in the country.',
    },
    {
      id: 4,
      img: '/tourist.png',
      icon: '/tour_icon.png',
      title: 'Notable Tourist Destinations',
      description:
        'Palm Springs is home to some of the most luxurious resorts and boutique hotels in the country.',
    },
  ]

  return (
    <section className="relative w-full bg-[#0080801A] py-16  overflow-hidden">
      {/* Palm tree decoration top left */}
      <div className="absolute top-3 left-0 w-20 sm:w-28 lg:w-32 opacity-40">
        <Image src="/tree.png" alt="" width={290} height={650} />
      </div>

      {/* Orange circle decoration bottom right */}
      <div
        className="absolute bottom-10 right-10 w-24 h-24 rounded-full"
        style={{ background: 'linear-gradient(180deg, #FFA500 0%, #EA7000 100%)' }}
        opacity-70
      ></div>

      <div className="max-w-[1441px] w-[95%] mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-futura-black text-[30px] sm:text-[36px] lg:text-[42px] mb-4">
            Showcasing <span className="text-secondary">Local Attractions</span>
          </h2>
          <p className="font-avenir-lt text-[16px] text-[#787878] leading-[26px] max-w-4xl mx-auto">
            Palm Springs is a haven for tourists, offering a plethora of attractions and activities.
            Our web design services highlight these features, ensuring that potential visitors can
            easily discover what makes this city special.
          </p>
        </div>

        {/* Cards Grid - 2x2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {attractions.map((attraction) => (
            <div
              key={attraction.id}
              className="flex items-stretch bg-white rounded-[20px] overflow-hidden"
            >
              {/* Image with curved border left */}
              <div className="relative w-[40%] sm:w-1/2 min-h-[260px]">
                <Image
                  src={attraction.img}
                  alt=".."
                  width={280}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="w-[60%] sm:w-1/2 p-5 sm:p-6 flex flex-col justify-center">
                <div className="w-13 h-13 rounded-lg bg-[#0080801A] flex items-center justify-center">
                  <Image src={attraction.icon} alt="icon" width={32} height={32} />
                </div>
                <h3 className="font-futura-black-bold text-[20px] lg:text-[24px] mb-3 mt-3 text-primary leading-tight">
                  {attraction.title}
                </h3>
                <p className="font-avenir-lt text-[14px] lg:text-[16px] leading-[24px] lg:leading-[26px] text-[#666666]">
                  {attraction.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
