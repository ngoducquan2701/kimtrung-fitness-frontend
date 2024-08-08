'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaCarouselType, EmblaEventType } from 'embla-carousel';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/Carousel';
import { testimonials } from '@/constants';

const TWEEN_FACTOR_BASE = 0.1;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

interface VideoPlayProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  onPlay: () => void;
  domNode: React.RefObject<HTMLDivElement>;
}

interface VideoOverlayProps {
  video: string | null;
  onClose: () => void;
}

const useClickOutside = (handler: () => void) => {
  const domNode = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const maybeHandler = (event: MouseEvent) => {
      if (domNode.current && !domNode.current.contains(event.target as Node)) {
        handler();
      }
    };

    document.addEventListener('mousedown', maybeHandler);

    return () => {
      document.removeEventListener('mousedown', maybeHandler);
    };
  }, [handler]);

  return domNode;
};

const VideoPlay: React.FC<VideoPlayProps> = ({
  image,
  onPlay,
  domNode,
  className,
  ...props
}) => {
  return (
    <section className={cn('w-full', className)}>
      <div ref={domNode} className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full">
            <div className="relative z-20 h-[300px] overflow-hidden rounded-lg md:h-[400px]">
              <div className="absolute left-0 top-0 h-full w-full">
                <img
                  src={image}
                  alt="bg"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div
                onClick={() => onPlay()}
                className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-opacity-10"
              >
                <div className="absolute z-20 flex h-16 w-16 items-center justify-center rounded-full bg-white text-primary dark:bg-dark-2 dark:text-white opacity-90">
                  <span className="absolute right-0 top-0 z-[-1] h-full w-full animate-ping rounded-full bg-white bg-opacity-20 delay-300 duration-1000"></span>
                  <svg
                    width="23"
                    height="27"
                    viewBox="0 0 23 27"
                    className="fill-current"
                  >
                    <path d="M22.5 12.634C23.1667 13.0189 23.1667 13.9811 22.5 14.366L2.25 26.0574C1.58333 26.4423 0.750001 25.9611 0.750001 25.1913L0.750002 1.80866C0.750002 1.03886 1.58334 0.557731 2.25 0.942631L22.5 12.634Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const VideoOverlay: React.FC<VideoOverlayProps> = ({ video, onClose }) => {
  if (!video) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 left-0 top-0 flex h-screen w-full items-center justify-center bg-black bg-opacity-70 ">
      <div className="mx-auto w-full max-w-[750px] bg-white">
        <iframe className="h-[420px] w-full" src={video} />
      </div>

      <button
        onClick={onClose}
        className="absolute right-0 top-0 flex h-20 w-20 cursor-pointer items-center justify-center text-body-color hover:bg-black"
      >
        <svg viewBox="0 0 16 15" className="h-8 w-8 fill-current">
          <path d="M3.37258 1.27L8.23258 6.13L13.0726 1.29C13.1574 1.19972 13.2596 1.12749 13.373 1.07766C13.4864 1.02783 13.6087 1.00141 13.7326 1C13.9978 1 14.2522 1.10536 14.4397 1.29289C14.6272 1.48043 14.7326 1.73478 14.7326 2C14.7349 2.1226 14.7122 2.24439 14.6657 2.35788C14.6193 2.47138 14.5502 2.57419 14.4626 2.66L9.57258 7.5L14.4626 12.39C14.6274 12.5512 14.724 12.7696 14.7326 13C14.7326 13.2652 14.6272 13.5196 14.4397 13.7071C14.2522 13.8946 13.9978 14 13.7326 14C13.6051 14.0053 13.478 13.984 13.3592 13.9375C13.2404 13.8911 13.1326 13.8204 13.0426 13.73L8.23258 8.87L3.38258 13.72C3.29809 13.8073 3.19715 13.8769 3.08559 13.925C2.97402 13.9731 2.85405 13.9986 2.73258 14C2.46737 14 2.21301 13.8946 2.02548 13.7071C1.83794 13.5196 1.73258 13.2652 1.73258 13C1.73025 12.8774 1.753 12.7556 1.79943 12.6421C1.84586 12.5286 1.91499 12.4258 2.00258 12.34L6.89258 7.5L2.00258 2.61C1.83777 2.44876 1.74112 2.23041 1.73258 2C1.73258 1.73478 1.83794 1.48043 2.02548 1.29289C2.21301 1.10536 2.46737 1 2.73258 1C2.97258 1.003 3.20258 1.1 3.37258 1.27Z" />
        </svg>
      </button>
    </div>
  );
};

export const VideoSection = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    containScroll: false,
    startIndex: 1,
  });
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const domNode = useClickOutside(() => {
    setActiveVideo(null);
  });

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.embla__slide__number') as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === 'scroll';

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }
          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const scale = numberWithinRange(tweenValue, 0, 1).toString();
          const tweenNode = tweenNodes.current[slideIndex];
          if (tweenNode) {
            tweenNode.style.transform = `scale(${scale})`;
          }
        });
      });
    },
    []
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    const onSelect = () => {
      setCurrentIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenScale)
      .on('scroll', tweenScale)
      .on('slideFocus', tweenScale)
      .on('select', onSelect);

    onSelect();

    return () => {
      if (emblaApi) {
        emblaApi
          .off('reInit', setTweenNodes)
          .off('reInit', setTweenFactor)
          .off('reInit', tweenScale)
          .off('scroll', tweenScale)
          .off('slideFocus', tweenScale)
          .off('select', onSelect);
      }
    };
  }, [emblaApi, setTweenNodes, setTweenFactor, tweenScale]);

  const currentItem = testimonials[currentIndex];

  return (
    <div className="w-full py-12 bg-primary">
      <div className="container">
        <h2
          className="text-3xl lg:text-5xl font-bold uppercase italic text-center mb-8"
          data-aos="fade-up"
        >
          Phản hồi khách hàng
        </h2>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="embla__slide flex-shrink-0 flex-grow-0 lg:basis-1/3 md:basis-1/2 basis-full"
              >
                <div className="flex flex-col justify-center items-center">
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
                </div>
                <VideoPlay
                  className="embla__slide__number"
                  image={item.avatar}
                  onPlay={() => setActiveVideo(item.video)}
                  domNode={domNode}
                />
              </div>
            ))}
          </div>
          {currentItem && (
            <div className="w-full mt-12 min-h-[170px]" data-aos="fade-up">
              <p className="text-xl">{currentItem.content}</p>
            </div>
          )}
        </div>
        <VideoOverlay
          onClose={() => setActiveVideo(null)}
          video={activeVideo}
        />
      </div>
    </div>
  );
};
