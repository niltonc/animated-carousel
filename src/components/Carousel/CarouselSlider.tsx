import { LegacyRef } from 'react';
import './styles.css';

type Array = { id?: number; url?: string; desc?: string; name?: string };

interface CarouselSliderProps {
  options: Array[];
  ref?: LegacyRef<HTMLDivElement> | undefined;
}

export function CarouselSlider({ options, ref }: CarouselSliderProps) {
  return (
    <div id="slide" ref={ref}>
      {options.map((item) => (
        <div
          key={item.id}
          className="item"
          style={{ backgroundImage: `url(${item.url})` }}
        >
          <div className="content">
            <div className="name">{item.name}</div>
            <div className="des">{item.desc}</div>
            <button>See more</button>
          </div>
        </div>
      ))}
    </div>
  );
}
