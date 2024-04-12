import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/Button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/Carousel';
import { testimonials } from '@/constants';

export default function Home() {
  return (
    <>
      <div className="w-full h-auto md:min-h-[80vh] banner-clip-path">
        <div className="bg-thumbnail bg-cover bg-right bg-no-repeat h-[500px] md:h-[80vh] flex items-center relative before:absolute before:top-0 before:right-0 before:left-0 before:bottom-0 before:bg-[#000] before:opacity-50 sm:before:hidden">
          <div className="container z-10 sm:text-gray-300 text-gray-200">
            <h1
              className="font-bold lg:text-5xl md:text-3xl text-xl uppercase"
              data-aos="fade-right"
            >
              <span className="block pb-2">Khám phá giới hạn bản thân</span>
              Đạt được kết quả về thể chất
            </h1>
            <p
              className="md:text-2xl text-xl py-10"
              data-aos="fade-right"
              data-aos-delay="150"
            >
              <span className="pb-2">
                Bạn muốn thay đổi lối sống healthy hơn? Thách thức chính mình?
              </span>
              <br />
              <span>Hoàn thiện bản thân thông qua tập thể dục</span>
            </p>
            <Button size={'lg'} data-aos="fade-right" data-aos-delay="300">
              <span className="text-black text-xl">Bắt đầu nào</span>
            </Button>
          </div>
        </div>
      </div>

      {/* 1/3: 2/3 */}
      <div className="container">
        <div className="flex flex-col md:flex-row">
          <div className="lg:basis-1/3 md:basis-1/2" data-aos="fade-right">
            <Image
              src="/book.png"
              width={400}
              height={400}
              alt="book"
              className="mx-auto"
              placeholder="blur"
              loading="lazy"
              blurDataURL="/book-blur.webp"
            />
          </div>
          <div
            className="lg:basis-2/3 md:basis-1/2 flex items-center justify-center text-gray-700"
            data-aos="fade-left"
          >
            <div>
              <h2 className="lg:text-5xl text-3xl font-bold uppercase italic text-center md:text-left">
                SPICECIAL GIF

              </h2>
              <p className="py-5 text-xl">
                Cuốn sách đặc biệt Trung dành cho khán giả của mình.
                <br />
                Khám phá thói quen ảnh hưởng thế nào đến cuộc sống của bạn?
              </p>

              <div className="flex justify-center md:justify-start">
                <Button size={'lg'} variant={'outline'}>
                  <a
                    href="https://forms.gle/vVzJuy2VvWiNSKNf9"
                    target="_blank"
                    className="text-xl text-gray-700"
                  >
                    Nhận Ebook
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[url('/bg-2.png')] bg-cover bg-[center_top_-1.5rem] bg-no-repeat min-h-full h-[474px] w-full flex items-center">
        <div className="container">
          <div className="flex flex-col items-center">
            <h2
              className="text-3xl lg:text-5xl font-bold uppercase sm:pb-2 whitespace-nowrap"
              data-aos="fade-up"
            >
              Bạn muốn cải thiện sức khỏe
            </h2>
            <h3
              className="text-2xl font-bold uppercase"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              Không biết bắt đầu từ đâu?
            </h3>
            <hr className="border border-dashed border-gray-700 w-3/5 my-8" />
            <p
              className="md:text-xl font-medium"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Sử dụng dịch vụ Coaching Online của chúng tôi để đạt được mục tiêu
              của bạn một cách khoa học và hiệu quả
            </p>
            <Button
              className="mt-6 uppercase"
              variant={'secondary'}
              size={'lg'}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Link href="/coaching" className="text-xl">
                Coaching online
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* About me */}
      <div className="container mt-8 text-gray-700">
        <div className="flex flex-col md:flex-row">
          <div className="lg:basis-1/3 md:basis-1/2">
            <Image
              src="/about.png"
              width={350}
              height={632}
              alt="about-me"
              className="mx-auto w-auto h-auto"
              placeholder="blur"
              loading="lazy"
              blurDataURL="/about-blur.webp"
              data-aos="fade-right"
            />
          </div>
          <div
            className="lg:basis-2/3 md:basis-1/2 flex items-center justify-center"
            data-aos="fade-left"
          >
            <div className="pl-8 pt-6 md:pt-0">
              <h2 className="text-3xl lg:text-5xl text-primary font-bold uppercase italic text-center md:text-left">
                Về tôi
              </h2>
              <h2 className="text-3xl lg:text-5xl font-bold uppercase italic text-center md:text-left">
                Trung sầu riêng
              </h2>
              <p className="py-5 xl:text-xl lg:text-lg">
                Chào mừng bạn đến với thế giới không chỉ hướng tới sự biến đổi
                thể chất mà còn là cuộc hành trình hướng tới sự hoàn thiện bản
                thân. Thay đổi về cả thể chất lẫn tinh thần.
                <br />
                <br />
                Với niềm đam mê sâu sắc về tập luyện và khoa học thể thao, Trung
                liên tục học hỏi và áp dụng những tiến bộ khoa học mới nhất vào
                hành trình tập luyện. Trung xem thể dục không chỉ giới hạn trong
                phòng tập nó là một phong cách sống, một lựa chọn bạn thực hiện
                mỗi ngày để sống khỏe mạnh và ý nghĩa hơn.
                <br />
                <br />
                Quan niệm của Trung rằng thể dục là một hành trình rèn luyện ý
                chí, sự kiên cường và kỷ luật. Tập thể dục chính là bước đầu
                tiên để bày tỏ tình yêu và tôn trọng chính mình. <br />
                <br />
                Huấn luyện viên không chỉ là người hướng dẫn mà còn là người bạn
                đồng hành, sẵn sàng cùng bạn khám phá và nuôi dưỡng phiên bản
                tốt nhất của mình.
              </p>

              <div className="flex- justify-center md:justify-start hidden">
                <Button
                  size={'lg'}
                  variant={'outline'}
                  className="mb-8 xl:mb-0"
                >
                  <span className="text-xl">Nhận Ebook</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* testimonials */}
      <div className="w-full py-12 bg-primary">
        <div className="container">
          <h2
            className="text-3xl lg:text-5xl font-bold uppercase italic text-center mb-8"
            data-aos="fade-up"
          >
            Phản hồi khách hàng
          </h2>
          <Carousel>
            <CarouselContent>
              {testimonials.map((item, idx) => (
                <CarouselItem key={idx}>
                  <div className="flex flex-col justify-center items-center">
                    <Image
                      src={item.avatart}
                      height={100}
                      width={100}
                      alt="avatart-testimonials"
                      className="rounded-full"
                      loading="lazy"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    />
                    <h3
                      className="font-bold text-xl uppercase mt-4"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      {item.name}
                    </h3>
                    <h4
                      className="uppercase mb-6"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      {item.position}
                    </h4>
                    <div
                      className="text-left max-w-5xl"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      {item.content.map((item, idx) => (
                        <p className="sm:text-xl text-lg" key={idx}>
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </>
  );
}
