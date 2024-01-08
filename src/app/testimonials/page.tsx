import Image from 'next/image';
import Script from 'next/script';

export default function Testimonials() {
  return (
    <>
      <div className="bg-[url('/thumbnail-2.png')] w-full">
        <div className="container py-16 flex flex-col lg:flex-row items-center justify-between">
          <div className="flex-1 lg:basis-2/3 ">
            <h1 className="font-bold text-gray-300 text-xl sm:text-3xl md:text-5xl uppercase">
              Những Câu Chuyện Thành Công
            </h1>

            <p className="text-base sm:text-xl md:text-2xl text-gray-300 py-10">
              <span className="pb-2">
                Khám phá hành trình đầy cảm hứng của những người
              </span>
              <br />
              <span>đã cùng chúng tôi đạt được sự thay đổi vượt bậc.</span>
            </p>
          </div>
          <div className="flex-1 lg:basis-1/3 flex justify-end mx-auto md:mt-8 lg:mt-0">
            <Image
              alt="customer-testimonials"
              src="/coaching/testimonials-thumb.png"
              height={889}
              width={725.5}
              className="w-auto h-auto"
            />
          </div>
        </div>
      </div>
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        data-use-service-core
        defer
      ></Script>
      <div
        className="elfsight-app-f5be9c5d-b1cc-4245-b8df-49c6b0de8143 pt-8 container"
        data-elfsight-app-lazy
      ></div>
    </>
  );
}
