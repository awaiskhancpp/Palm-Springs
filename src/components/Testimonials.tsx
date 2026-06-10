import Image from 'next/image'
export default function Testimonials() {
  return (
    <section className="relative w-full bg-[#F5F5DC] py-16 lg:py-24 overflow-hidden">
      {/* Decorative palm trees background */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#FEF5E7] to-transparent opacity-50"></div>

      <div className="max-w-[1441px] w-[95%] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Illustration */}
          <div className="hidden lg:flex justify-center">
            <div className="w-full h-[400px] bg-gradient-to-br from-pink-100 to-orange-50 rounded-3xl flex items-center justify-center">
              <Image src="/falmingo.png" alt="" width={620} height={590} />
            </div>
          </div>

          {/* Right Testimonial */}
          <div className="flex flex-col items-start">
            {/* Speech Bubble with Tail */}
            <div
              className="relative bg-[#F29AA7] rounded-lg px-10 py-8  text-white max-w-[520px]"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 48% 100%, 45% 115%, 42% 100%, 0 100%)',
              }}
            >
              <p className="text-center leading-relaxed">
                Providing local information can enhance the guest experience. Our web designs
                include detailed sections on nearby attractions, events, and dining options.
                Additionally, we highlight positive reviews and testimonials, building trust and
                encouraging new guests to choose your property
              </p>
            </div>

            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white">
                <Image
                  src="/person.png"
                  alt="author"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-2 items-center pt-4">
                <div className="w-3 h-3 bg-[#008080] rounded-full"></div>
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
