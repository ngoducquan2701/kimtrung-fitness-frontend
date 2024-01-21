import Image from 'next/image';

import { Icons } from '@/components/Icons';
import { Button } from '@/components/ui/Button';
import { features } from '@/constants';

export default function Coaching() {
  return (
    <div>
      <div className="bg-[url('/thumbnail-2.png')] w-full">
        <div className="container py-16 flex flex-col lg:flex-row items-center justify-between min-h-[70vh]">
          <div className="flex-1 lg:basis-1/2 ">
            <h1 className="font-bold text-gray-300 text-xl sm:text-3xl md:text-5xl uppercase">
              TẠO RA SỰ THỊNH VƯỢNG THỂ CHẤT
              <br />
              CỦA BẠN CÙNG CHÚNG TÔI
            </h1>

            <p className="text-base sm:text-xl md:text-2xl text-gray-300 py-10">
              <span className="pb-2">
                Xây dựng sức mạnh và sự tự tin của bạn từng bước
              </span>
              <br />
              <span>bằng các bài tập luyện được thiết kế riêng cho bạn</span>
              <br />
              <span>bởi một huấn luyện viên chuyên nghiệp.</span>
            </p>
          </div>
          <div className="flex-1 lg:basis-1/2 flex justify-end mx-auto md:mt-8 lg:mt-0">
            <Image
              alt="customer-testimonials"
              src="/coaching/coaching-thumb.png"
              height={889}
              width={725.5}
              placeholder="blur"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      {/* feature */}
      <div className="container mt-12">
        <div className="text-center text-gray-700 text-3xl sm:text-5xl font-bold pb-12 pt-8 uppercase">
          tại sao chọn chúng tôi
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <div key={idx} className="rounded-sm overflow-hidden mb-12">
              <Image
                src={item.thumb}
                height={424}
                width={424}
                className="rounded"
                alt="feature"
                placeholder="blur"
                loading="lazy"
              />
              <div className="mt-4 px-1">
                <h4 className="text-black font-semibold lg:text-xl sm:text-lg">
                  {item.title}
                </h4>
                <p className="text-gray-700 md:text-lg">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* That's why */}
      <div className="w-full bg-primary pb-12 pt-6">
        <div className="container">
          <h2 className="text-center text-3xl sm:text-5xl font-bold pb-14 pt-8 uppercase">
            Một phiên bản mới mạnh hơn, khỏe hơn và tự tin hơn
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="rounded-sm flex flex-col items-center justify-center overflow-hidden mb-8">
              <Icons.calendar width={50} height={50} />
              <div className="mt-6">
                <p className="text-gray-700 text-xl max-w-56">
                  Tập luyện cùng huấn luyện viên giúp bạn nhất quán hơn trong
                  việc tập luyện
                </p>
              </div>
            </div>
            <div className="rounded-sm flex flex-col items-center justify-center overflow-hidden mb-8">
              <Icons.dumbbell width={50} height={50} />
              <div className="mt-6">
                <p className="text-gray-700 text-xl max-w-56">
                  Tập luyện khoa học. Phát triển sức mạnh của bạn không chỉ là
                  mục tiêu mà là điều chắc chắn
                </p>
              </div>
            </div>
            <div className="rounded-sm flex flex-col items-center justify-center overflow-hidden mb-8">
              <Icons.hear width={50} height={50} />
              <div className="mt-6">
                <p className="text-gray-700 text-xl max-w-56">
                  Một cơ thể khỏe mạnh, một tâm trí vững chắc là nền tảng để bạn
                  tự tin hơn.
                </p>
              </div>
            </div>
          </div>
          <p className="italic pt-12 text-center">
            &quot;Khi bạn có sức khỏe bạn có cả ngàn ước mơ nhưng khi mất đi sức
            khỏe bạn chỉ có một ước mơ duy nhất&quot;
          </p>
        </div>
      </div>

      {/* Operating process */}
      <div className="container py-12">
        <h2 className="text-center text-3xl sm:text-5xl font-bold pb-14 pt-8 uppercase text-gray-700">
          Một phiên bản mới mạnh hơn, khỏe hơn và tự tin hơn
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="">
            <div className="flex flex-col mb-8">
              <Image
                src="/coaching/1.png"
                height={50}
                width={50}
                alt="number"
                placeholder="blur"
                loading="lazy"
              />
              <h4 className="text-black font-semibold lg:text-xl sm:text-lg py-4">
                Nhận tư vấn
              </h4>
              <p className="text-gray-700 md:text-lg">
                Nhận tư vấn từ chúng tôi để chúng tôi có thể hiểu rõ hơn về bạn
                và ghép đôi có thể giúp bạn huấn luyện viên phù hợp.
              </p>
            </div>
            <Image
              src="/coaching/phone-1.jpg"
              height={427}
              width={240}
              alt="process"
              className="mx-auto pt-4"
              placeholder="blur"
              loading="lazy"
            />
          </div>
          <div className="">
            <div className="flex flex-col mb-8">
              <Image
                src="/coaching/2.png"
                height={50}
                width={50}
                alt="number"
                placeholder="blur"
                loading="lazy"
              />
              <h4 className="text-black font-semibold lg:text-xl sm:text-lg py-4">
                Gọi Cho Huấn luyện Viên
              </h4>
              <p className="text-gray-700 md:text-lg">
                Gặp huấn luyện viên của bạn để hiểu hơn về nhau, làm đánh giá
                sức khỏe, xác định mục tiêu, hướng đi của bạn.
              </p>
            </div>
            <Image
              src="/coaching/phone-2.jpg"
              height={427}
              width={240}
              alt="process"
              className="mx-auto pt-4"
              placeholder="blur"
              loading="lazy"
            />
          </div>
          <div className="">
            <div className="flex flex-col mb-8">
              <Image
                src="/coaching/3.png"
                height={50}
                width={50}
                alt="number"
                placeholder="blur"
                loading="lazy"
              />
              <h4 className="text-black font-semibold lg:text-xl sm:text-lg py-4">
                Thiết Kế Chương Trình
              </h4>
              <p className="text-gray-700 md:text-lg">
                Nhận tư vấn từ chúng tôi để chúng tôi có thể hiểu rõ hơn về bạn
                và ghép đôi có thể giúp bạn huấn luyện viên phù hợp.
              </p>
            </div>
            <Image
              src="/coaching/phone-3.jpg"
              height={427}
              width={240}
              alt="process"
              className="mx-auto pt-4"
              placeholder="blur"
              loading="lazy"
            />
          </div>
          <div className="">
            <div className="flex flex-col mb-8">
              <Image
                src="/coaching/4.png"
                height={50}
                width={50}
                alt="number"
                placeholder="blur"
                loading="lazy"
              />
              <h4 className="text-black font-semibold lg:text-xl sm:text-lg py-4">
                Điều Chỉnh Và Cải Thiện
              </h4>
              <p className="text-gray-700 md:text-lg">
                Trong quá trình luyện tập, huấn luyện viên sẽ kiểm tra tiến độ
                và điều chỉnh chương trình để giúp bạn tiến về phía trước.
              </p>
            </div>
            <Image
              src="/coaching/phone-4.jpg"
              height={427}
              width={240}
              alt="process"
              className="mx-auto pt-4"
              placeholder="blur"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* other */}
      <div className="container border-8 border-primary py-12 mt-4 mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <Image
            src="/coaching/other.png"
            height={384}
            width={683}
            alt="other coaching"
            placeholder="blur"
            loading="lazy"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl sm:text-5xl font-bold py-8 text-gray-700 uppercase">
              Không chỉ là một dịch vụ.
              <br /> Không chỉ là huấn luyện viên.
            </h2>
            <p className="text-gray-700 md:text-lg">
              Chúng tôi kết hợp khả năng cá nhân hóa, trách nhiệm, động lực với
              sức mạnh của khoa học thể thao và công nghệ. Tạo ra một cộng đồng
              hướng tới lối sống thịnh vượng.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-black py-8">
        <div className="container flex flex-col text-white justify-center items-center">
          <h2 className="text-3xl sm:text-5xl font-bold py-8 uppercase">
            Bắt đầu hành trình tập luyện của bạn
          </h2>
          <p className="md:text-lg mb-12 text-center">
            Bạn đã sẵn sàng cho hành trình tập thể dục dành riêng cho mình chưa?
            Tham gia 3K và trải nghiệm thể dục thực sự được cá nhân hóa.
            <br /> Hãy cùng nhau xây dựng một phiên bản mạnh mẽ hơn, khỏe mạnh
            hơn và tự tin hơn của bạn.
          </p>
          <div className="pb-12">
            <Button size={'lg'}>
              <span className="text-xl text-black">
                Bắt đầu hành trình của bạn
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
