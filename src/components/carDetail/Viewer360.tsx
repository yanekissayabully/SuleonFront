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
    e.preventDefault();
    isDragging.current = true;
    startX.current = getClientX(e);
    setIsPlaying(false); // При начале перетаскивания — стопаем
  };

  const handleMove = (e: MouseEvent | TouchEvent) => {
    if (!isDragging.current) return;
    const clientX = getClientX(e);
    const dx = clientX - startX.current;

    const sensitivity = 5; // Можно регулировать скорость смены
    if (Math.abs(dx) >= sensitivity) {
      const steps = Math.floor(dx / sensitivity);
      const newIndex = (currentIndex - steps + frameCount) % frameCount;
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

    container.addEventListener('mousedown', handleStart);
    container.addEventListener('touchstart', handleStart, { passive: false });

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('touchmove', handleMove, { passive: false });
    window.addEventListener('mouseup', handleEnd);
    window.addEventListener('touchend', handleEnd);

    return () => {
      container.removeEventListener('mousedown', handleStart);
      container.removeEventListener('touchstart', handleStart);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchend', handleEnd);
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
    <div className="relative w-full max-w-3xl mx-auto select-none">
      {/* Иконка 360 */}
      <div className="absolute top-4 left-4 z-10 bg-white rounded-full p-2 shadow">
        <img src="/icons/icons-360.png" alt="360" width={32} height={32} />
      </div>

      {/* Само изображение */}
      <div ref={containerRef} className="w-full h-auto cursor-grab active:cursor-grabbing">
        <img
          src={images[currentIndex]}
          alt="360 view"
          className="w-full h-auto object-contain rounded-lg shadow"
          draggable={false}
        />
      </div>

      {/* Кнопка Play/Pause */}
      <button
        onClick={() => setIsPlaying((prev) => !prev)}
        className="absolute bottom-4 right-4 bg-black bg-opacity-70 hover:bg-opacity-90 text-white text-sm px-4 py-2 rounded-full transition"
      >
        {isPlaying ? 'Пауза' : 'Воспроизвести'}
      </button>
    </div>
  );
};

export default Viewer360;
