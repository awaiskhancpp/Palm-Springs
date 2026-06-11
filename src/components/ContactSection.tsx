'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section className="w-full bg-[#0080801A] py-16 ">
      <div className="relative max-w-[1441px] w-[95%] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-futura-black-bold text-[#232323] text-[46px] leading-[48px] mb-4">
            Let Us Know <span className="text-secondary">What You Think!</span>
          </h2>
          <p className="text-[#666666] text-[16px] leading-[24px] tracking-normal">
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit
            aliquam sit nullam.
          </p>
        </div>

        {/* Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:max-w-[1254px] mx-auto gap-3 items-center">
          {/* Left Illustration */}
          <div className="order-2 lg:order-1 flex justify-center w-full lg:w-auto">
            <div className="w-full lg:max-w-[611px] rounded-3xl">
              <Image
                src="/contact_us.png"
                alt=""
                width={611}
                height={511}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Form */}
          <form
            onSubmit={handleSubmit}
            className="order-1 lg:order-2 flex flex-col gap-6 mb-3 w-full"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label
                  id="name"
                  className="font-avenir-lt font-semibold text-[18px] leading-[20px] text-[#232323]"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="font-avenir-lt bg-white px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#008080] focus:ring-2 focus:ring-[#008080] focus:ring-opacity-20"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="font-avenir-lt font-semibold text-[18px] leading-[20px] text-[#232323]"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="www.com@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="font-avenir-lt bg-white px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#008080] focus:ring-2 focus:ring-[#008080] focus:ring-opacity-20"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="phone"
                  className="font-avenir-lt font-semibold text-[18px] leading-[20px] text-[#232323]"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="00000000"
                  value={formData.phone}
                  onChange={handleChange}
                  className="font-avenir-lt px-4 bg-white py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#008080] focus:ring-2 focus:ring-[#008080] focus:ring-opacity-20"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="company"
                  className="font-avenir-lt  font-semibold text-[18px] leading-[20px] text-[#232323]"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleChange}
                  className="font-avenir-lt bg-white px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#008080] focus:ring-2 focus:ring-[#008080] focus:ring-opacity-20"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="font-avenir-lt font-semibold text-[18px] leading-[20px] text-[#232323]"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Type Your Message Here..."
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="font-avenir-lt px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#008080] focus:ring-2 focus:ring-[#008080] focus:ring-opacity-20 resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-primary hover:bg-[#006666] text-white font-avenir-lt font-semibold px-8 py-3 rounded transition-colors w-full"
            >
              Submit
            </button>
          </form>
        </div>
        <div className=" absolute right-0 -bottom-12 xl:-bottom-10">
          <div className="bg-radial from-[#00B8B8] to-[#008080] rounded-full ml-8 w-5 h-5" />
          <div className="bg-gradient-to-b from-[#FFA500] to-[#EA7000] rounded-full w-10 h-10 mt-2" />
        </div>
        <div className=" absolute -bottom-30 left-[20%] bg-gradient-to-b from-[#FFA500] to-[#EA7000] rounded-full w-20 h-20" />
      </div>
    </section>
  )
}
