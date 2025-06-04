'use client';

import { useEffect, useRef, useState } from 'react';

interface Viewer360Props {
  images: string[];
  autoPlay?: boolean;
  speed?: number;
}

const Viewer360: React.FC<Viewer360Props> = ({ images, autoPlay = true, speed = 100 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const frameCount = images.length;

  const animationRef = useRef<number | null>(null);
  const lastFrameTime = useRef<number>(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const getClientX = (e: MouseEvent | TouchEvent): number => {
    if ('touches' in e && e.touches.length > 0) {
      return e.touches[0].clientX;
    } else if ('clientX' in e) {
      return (e as MouseEvent).clientX;
    }
    return 0;
  };

  const handleStart = (e: MouseEvent | TouchEvent) => {
    isDragging.current = true;
    startX.current = getClientX(e);
    setIsPlaying(false);
  };

  const handleMove = (e: MouseEvent | TouchEvent) => {
    if (!isDragging.current) return;
    const clientX = getClientX(e);
    const dx = clientX - startX.current;

    if (Math.abs(dx) > 5) {
      const newIndex = (currentIndex + (dx > 0 ? -1 : 1) + frameCount) % frameCount;
      setCurrentIndex(newIndex);
      startX.current = clientX;
    }
  };

  const handleEnd = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onMouseDown = (e: MouseEvent) => handleStart(e);
    const onTouchStart = (e: TouchEvent) => handleStart(e);
    const onMouseMove = (e: MouseEvent) => handleMove(e);
    const onTouchMove = (e: TouchEvent) => handleMove(e);
    const onMouseUp = () => handleEnd();
    const onTouchEnd = () => handleEnd();

    // Только старт на контейнере
    container.addEventListener('mousedown', onMouseDown);
    container.addEventListener('touchstart', onTouchStart, { passive: true });

    // Движение и завершение — глобально
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('touchend', onTouchEnd);

    return () => {
      container.removeEventListener('mousedown', onMouseDown);
      container.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [currentIndex]);

  useEffect(() => {
    const animate = (time: number) => {
      if (isPlaying) {
        if (time - lastFrameTime.current >= speed) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % frameCount);
          lastFrameTime.current = time;
        }
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    if (isPlaying) {
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, speed, frameCount]);

  return (
    <div className="relative w-full max-w-xl mx-auto select-none">
      <div className="absolute top-2 left-2 z-10">
        <img src="/icons/icons-360.png" alt="360" width={32} height={24} />
      </div>

      <div ref={containerRef} className="w-full h-auto cursor-ew-resize">
        <img
          src={images[currentIndex]}
          alt="360 view"
          className="w-full h-auto object-contain"
        />
      </div>

      <button
        onClick={() => setIsPlaying((prev) => !prev)}
        className="absolute bottom-2 right-2 bg-black text-white text-sm px-3 py-1 rounded"
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default Viewer360;


