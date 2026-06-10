import Image from 'next/image'
export default function Testimonials() {
  return (
    <section className="relative w-full bg-[#F5F5DC] py-16 lg:py-24 overflow-hidden">
      {/* Decorative palm trees background */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#FEF5E7] to-transparent opacity-50"></div>

      <div className="max-w-[1441px] w-[95%] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Illustration */}
          <div className="hidden md:flex justify-center">
            <div className="w-full h-[400px] bg-gradient-to-br from-pink-100 to-orange-50 rounded-3xl flex items-center justify-center">
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
          <div className="relative flex flex-col items-start">
            {/* Speech Bubble with Tail */}
            <div className="relative w-full max-w-[450px] sm:max-w-[550px] xl:max-w-[654px] mx-auto">
              <Image
                src="/message_bubble.png"
                alt=""
                width={654}
                height={300}
                className="w-full h-auto"
              />

              <p className="absolute inset-0 flex items-center justify-center px-8 sm:px-12 lg:px-10  xl:px-12 text-center text-white font-normal text-[14px] sm:text-[16px] md:text-[18px]  xl:text-[24px] leading-[1.3]">
                Providing local information can enhance the guest experience. Our web designs
                include detailed sections on nearby attractions, events, and dining options.
                Additionally, we highlight positive reviews and testimonials, building trust and
                encouraging new guests to choose your property
              </p>
            </div>
            <div className="absolute left-2 md:left-[14%] lg:left-2 xl:left-5 2xl:left-10 bottom-1 md:bottom-0 lg:-bottom-1 w-16 h-16 sm:w-20 sm:h-20 xl:w-24 xl:h-24 rounded-full overflow-hidden border-4 border-white">
              <Image
                src="/person.png"
                alt="author"
                width={118}
                height={118}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center justify-center w-full mr-4">
              <div className="flex gap-2 items-center pt-4">
                <div className="w-5 h-5 bg-[#008080] rounded-full"></div>
                <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
