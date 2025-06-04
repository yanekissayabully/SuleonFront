// components/Viewer360.tsx
'use client';

import { useEffect, useRef, useState } from 'react';

interface Viewer360Props {
  images: string[];
}

const Viewer360: React.FC<Viewer360Props> = ({ images }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const frameCount = images.length;

  const handleMouseDown = (e: MouseEvent | TouchEvent) => {
    isDragging.current = true;
    startX.current = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
  };

  const handleMouseMove = (e: MouseEvent | TouchEvent) => {
    if (!isDragging.current) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
    const dx = clientX - startX.current;

    if (Math.abs(dx) > 5) {
      const newIndex = (currentIndex + (dx > 0 ? -1 : 1) + frameCount) % frameCount;
      setCurrentIndex(newIndex);
      startX.current = clientX;
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('mousedown', handleMouseDown as any);
    container.addEventListener('touchstart', handleMouseDown as any);
    container.addEventListener('mousemove', handleMouseMove as any);
    container.addEventListener('touchmove', handleMouseMove as any);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);

    return () => {
      container.removeEventListener('mousedown', handleMouseDown as any);
      container.removeEventListener('touchstart', handleMouseDown as any);
      container.removeEventListener('mousemove', handleMouseMove as any);
      container.removeEventListener('touchmove', handleMouseMove as any);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [currentIndex]);

  return (
    <div className="relative w-full max-w-xl mx-auto select-none">
      <div className="absolute top-2 left-2 z-10">
        <img
          src="/catalog/view/theme/ncars4/images/icons-360.png"
          alt="360"
          width={32}
          height={24}
        />
      </div>
      <div ref={containerRef} className="w-full h-auto cursor-ew-resize">
        <img
          src={images[currentIndex]}
          alt="360 view"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Viewer360;
