import { ReactNode, useRef } from 'react';
import Image from 'next/image';
import ArrowLeft from '@/assets/chevron-circle-left.svg';
import ArrowRight from '@/assets/chevron-circle-right.svg';
import './styles.css';

interface CarouselActionsProps {
  children?: ReactNode;
}
export function CarouselActions({ children }: CarouselActionsProps) {
  return <div className="buttons">{children}</div>;
}
