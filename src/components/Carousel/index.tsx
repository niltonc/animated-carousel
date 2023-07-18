import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import ArrowLeft from '@/assets/chevron-circle-left.svg';
import ArrowRight from '@/assets/chevron-circle-right.svg';
import './styles.css';

interface SlideItem {
  id: number;
  imgUrl: string;
  desc: string;
  name: string;
}

const Slider: React.FC = () => {
  const slideRef = useRef<HTMLDivElement>(null);
  const [loadingProgress, setLoadingProgress] = useState<number>(0);

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

  const data: SlideItem[] = [
    {
      id: 1,
      imgUrl: 'https://i.postimg.cc/PrMGqZwx/pexels-m-venter-1659437.jpg',
      desc: 'Some beautiful roads cannot be discovered without getting loss.',
      name: 'EXPLORE NATURE'
    },
    {
      id: 2,
      imgUrl:
        'https://i.postimg.cc/bw6KxhLf/pexels-eberhard-grossgasteiger-1062249.jpg',
      desc: 'Some beautiful roads cannot be discovered without getting loss.',
      name: 'EXPLORE NATURE'
    },
    {
      id: 3,
      imgUrl:
        'https://i.postimg.cc/CMkTW9Mb/pexels-eberhard-grossgasteiger-572897.jpg',
      desc: 'Some beautiful roads cannot be discovered without getting loss.',
      name: 'EXPLORE NATURE'
    },
    {
      id: 5,
      imgUrl: 'https://i.postimg.cc/6qdkn4bM/pexels-joyston-judah-933054.jpg',
      desc: 'Some beautiful roads cannot be discovered without getting loss.',
      name: 'EXPLORE NATURE'
    },
    {
      id: 6,
      imgUrl:
        'https://i.postimg.cc/RVm59Gqy/pexels-roberto-nickson-2559941.jpg',
      desc: 'Some beautiful roads cannot be discovered without getting loss.',
      name: 'EXPLORE NATURE'
    }
  ];

  return (
    <div className="container">
      <div className="loadbar" style={{ width: `${loadingProgress}%` }}></div>
      <div id="slide" ref={slideRef}>
        {data.map((item) => (
          <div
            key={item.id}
            className="item"
            style={{ backgroundImage: `url(${item.imgUrl})` }}
          >
            <div className="content">
              <div className="name">{item.name}</div>
              <div className="des">{item.desc}</div>
              <button>See more</button>
            </div>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button id="prev" onClick={handleClickPrev}>
          <Image src={ArrowLeft} width={30} height={30} alt={''} />
        </button>
        <button id="next" onClick={handleClickNext}>
          <Image src={ArrowRight} width={30} height={30} alt={''} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
