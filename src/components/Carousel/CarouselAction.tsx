import { ButtonHTMLAttributes } from 'react';
import Image from 'next/image';
import './styles.css';

type CarouselActionProps = {
  icon?: any;
} & ButtonHTMLAttributes<HTMLButtonElement>;
export function CarouselAction({ icon }: CarouselActionProps) {
  return (
    <button>
      <Image src={icon} width={30} height={30} alt={''} />
    </button>
  );
}
