'use client'

import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: 'Providing local information can enhance the guest experience. Our web designs include detailed sections on nearby attractions, events, and dining options. Additionally, we highlight positive reviews and testimonials, building trust and encouraging new guests to choose your property',
      image: '/person.png',
    },
    {
      id: 2,
      text: 'The team transformed our digital presence completely. Their attention to detail and understanding of our market made all the difference. We saw immediate improvements in bookings and customer engagement.',
      image: '/person.png',
    },
    {
      id: 3,
      text: 'Outstanding service and exceptional results. They took our vision and brought it to life in ways we never imagined. Highly recommend their expertise and professionalism.',
      image: '/person.png',
    },
  ]

  const [activeSlide, setActiveSlide] = useState(0)

  const startX = useRef(0)
  const endX = useRef(0)

  const next = () => {
    setActiveSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    endX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const diff = startX.current - endX.current

    if (Math.abs(diff) > 50) {
      if (diff > 0) next()
      else prev()
    }
  }

  return (
    <section id="testimonial" className="w-full bg-[#F5F5DC] pt-16 pb-28 lg:pb-0 overflow-hidden">
      <div className="relative max-w-[1440px] mx-auto">
        <div className="absolute -right-14 -top-15 md:top-2 md:-right-16 lg:top-8 lg:-right-14 xl:-right-12 xl:top-14 w-[80px] h-[80px] z-10 ">
          <div className="absolute w-[20.39px] h-[20.39px] -left-10 top-10 rounded-full rotate-[81.06deg] bg-[radial-gradient(circle_at_50%_50%,#00B8B8_0%,#008080_100%)]" />
          <div className="absolute w-[40.77px] h-[40.77px] rounded-full rotate-[81.06deg] bg-[linear-gradient(180deg,#FFA500_0%,#EA7000_100%)]" />
        </div>

        <div className="absolute -right-16 md:-right-12 bottom-0 lg:bottom-4 w-[88.25px] h-[88.25px] rounded-full bg-[linear-gradient(180deg,#FFA500_0%,#EA7000_100%)]" />

        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="order-1 lg:order-none lg:col-span-5 flex justify-center">
            <Image
              src="/falmingo.png"
              alt=""
              width={627}
              height={597}
              className="w-full max-w-[500px] lg:max-w-none h-auto block"
            />
          </div>

          <div className="order-2 lg:order-none lg:col-span-7 pl-4 md:pl-6 lg:pl-8 pr-4 md:pr-6 lg:pr-20 xl:pr-28">
            <div
              className="relative w-full"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Bubble */}
              <Image
                src="/testimonial_bubble.svg"
                alt=""
                width={654}
                height={300}
                className="w-full h-auto block"
              />

              {/* 3-CARD CAROUSEL VIEW */}
              <div className="absolute inset-0 flex items-center justify-center -translate-y-[8%] px-8 overflow-hidden">
                {testimonials.map((t, index) => {
                  const offset = index - activeSlide

                  return (
                    <div
                      key={t.id}
                      className="absolute w-[98%] transition-all duration-500 ease-in-out text-center text-white font-normal
        text-[14px] md:text-[24px] lg:text-[18px] xl:text-[24px]
        leading-[1.6]"
                      style={{
                        transform: `
            translateX(${offset * 100}%)
            scale(${index === activeSlide ? 1 : 0.85})
          `,
                        opacity: index === activeSlide ? 1 : 0.4,
                        zIndex: index === activeSlide ? 10 : 1,
                      }}
                    >
                      {t.text}
                    </div>
                  )
                })}
              </div>

              {/* Avatar + dots */}
              <div className="absolute bottom-0 translate-y-1/2 left-0 right-0 flex items-center pl-[3%] md:pl-[5%] lg:pl-[3%]  ">
                <div
                  key={`img-${activeSlide}`}
                  className="w-14 h-14 md:w-22 md:h-22 lg:w-18 lg:h-18 xl:w-26 xl:h-26
                    rounded-full overflow-hidden flex-shrink-0 animate-slideIn"
                >
                  <Image
                    src={testimonials[activeSlide].image}
                    alt="author"
                    width={118}
                    height={118}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 flex items-center justify-center gap-2 xl:gap-3 pr-[20%]">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSlide(index)}
                      className={`rounded-full transition-all duration-300 ${
                        activeSlide === index
                          ? 'w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6 bg-[#008080]'
                          : 'w-2.5 h-2.5 xl:w-3 xl:h-3 bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-slideIn {
          animation: slideIn 0.5s ease-in-out;
        }
      `}</style>
    </section>
  )
}
