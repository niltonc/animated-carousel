import { ReactNode } from 'react';
import './styles.css';

interface CarouselRootProps {
  children?: ReactNode;
}
export function CarouselRoot({ children }: CarouselRootProps) {
  return <div className="container">{children}</div>;
}
