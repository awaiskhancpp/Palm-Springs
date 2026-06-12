'use client'
import Image from 'next/image'
import { useState } from 'react'

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

  return (
    <section
      id="testimonial"
      className="w-full bg-[#F5F5DC] py-16  lg:py-26 lg:pt-40 overflow-hidden"
    >
      <div className="relative z-10">
        <div className="absolute xl:-right-10 -top-20 w-[80px] h-[80px] z-10">
          <div className="absolute w-[20.39px] h-[20.39px] mt-14 mr-7 rounded-full rotate-[81.06deg] bg-[radial-gradient(circle_at_50%_50%,#00B8B8_0%,#008080_100%)]" />
          <div className="absolute w-[40.77px] h-[40.77px]  rounded-full rotate-[81.06deg] bg-[linear-gradient(180deg,#FFA500_0%,#EA7000_100%)]" />
        </div>
        <div className="2xl:hidden absolute -right-20 bottom-0 w-[88.25px] h-[88.25px] rounded-full bg-[linear-gradient(180deg,#FFA500_0%,#EA7000_100%)]"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Illustration */}
          <div className="hidden md:flex justify-center">
            <div className="w-full h-[400px]  rounded-3xl flex items-center justify-center">
              <Image
                src="/falmingo.png"
                alt=""
                width={620}
                height={590}
                className="w-full max-w-[620px] h-auto"
              />
            </div>
          </div>

          {/* Right Testimonial */}
          <div className="relative flex flex-col items-start justify-start">
            {/* Speech Bubble with Tail */}
            <div className="relative w-full max-w-[450px] sm:max-w-[550px] xl:max-w-[654px] mx-auto">
              <Image
                src="/testimonial_bubble.svg"
                alt=""
                width={654}
                height={300}
                className="w-full h-auto"
              />

              <p
                key={activeSlide}
                className="absolute inset-0 -translate-y-4 flex items-center px-8 sm:px-12 lg:px-10  xl:px-12 text-center text-white font-normal text-[14px] sm:text-[16px] md:text-[18px]  xl:text-[24px] leading-[1.3] animate-fadeIn"
              >
                {testimonials[activeSlide].text}
              </p>
            </div>
            <div
              key={`img-${activeSlide}`}
              className="absolute left-2 md:left-[16%] lg:left-2 xl:left-8 2xl:left-[25%] bottom-1 md:bottom-0 lg:-bottom-1 xl:-bottom-6  w-16 h-16 sm:w-20 sm:h-20 xl:w-28 xl:h-28 rounded-full overflow-hidden  animate-slideIn"
            >
              <Image
                src={testimonials[activeSlide].image}
                alt="author"
                width={118}
                height={118}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center justify-center w-full mr-4">
              <div className="flex gap-3 items-center pt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSlide(index)}
                    className={
                      activeSlide === index
                        ? 'w-6 h-6 bg-[#008080] rounded-full'
                        : 'w-3 h-3 bg-gray-300 rounded-full'
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }

        .animate-slideIn {
          animation: slideIn 0.5s ease-in-out;
        }
      `}</style>
    </section>
  )
}
