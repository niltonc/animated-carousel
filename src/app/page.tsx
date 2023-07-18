'use client';
import { Carousel } from '@/components/Carousel';
import { data } from '@/mock/data';
import { useRef } from 'react';
import ArrowLeft from '@/assets/chevron-circle-left.svg';
import ArrowRight from '@/assets/chevron-circle-right.svg';
export default function Home() {
  const slideRef = useRef<HTMLDivElement>(null);
  const handleClickNext = () => {
    let items = slideRef?.current?.querySelectorAll('.item');
    if (items && items.length > 0) {
      slideRef?.current?.appendChild(items[0]);
    }
  };
  const handleClickPrev = () => {
    let items = slideRef?.current?.querySelectorAll('.item');
    if (items && items.length > 0) {
      slideRef?.current?.prepend(items[items.length - 1]);
    }
  };

  return (
    <main>
      <Carousel.Root>
        <Carousel.Slider options={data} ref={slideRef} />
        <Carousel.Actions>
          <Carousel.Action
            onClick={handleClickNext}
            icon={ArrowLeft}
            id="next"
          />
          <Carousel.Action
            onClick={handleClickPrev}
            icon={ArrowRight}
            id="prev"
          />
        </Carousel.Actions>
      </Carousel.Root>
    </main>
  );
}
