import { useState, useRef, useCallback, useEffect } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'UNCONTROLLED',
  afterLabel = 'DESIGNED',
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percent);
  }, []);

  useEffect(() => {
    if (!isDragging) return;
    const onMove = (e: MouseEvent) => updatePosition(e.clientX);
    const onUp = () => setIsDragging(false);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [isDragging, updatePosition]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (e.touches.length) updatePosition(e.touches[0].clientX);
    },
    [updatePosition]
  );

  return (
    <div className="max-w-3xl mx-auto">
      <div
        ref={containerRef}
        className="relative aspect-[4/3] overflow-hidden select-none touch-none cursor-ew-resize"
        onMouseDown={handleMouseDown}
        onTouchMove={handleTouchMove}
        onTouchStart={(e) => e.touches.length && updatePosition(e.touches[0].clientX)}
      >
        {/* Base: Before (uncontrolled) */}
        <div className="absolute inset-0">
          <img
            src={beforeImage}
            alt="Uncontrolled light"
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* Overlay: After (designed) - clipped by position */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 0 0 ${position}%)` }}
        >
          <img
            src={afterImage}
            alt="Designed light control"
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* Slider handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-paper z-10"
          style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 border-paper bg-transparent flex items-center justify-center shadow-sm">
            <div className="flex gap-0.5">
              <span className="w-0.5 h-3 bg-paper/80" />
              <span className="w-0.5 h-3 bg-paper/80" />
            </div>
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="flex justify-between mt-4 px-1">
        <span className="label-micro text-stone">{beforeLabel}</span>
        <span className="label-micro text-stone">{afterLabel}</span>
      </div>
    </div>
  );
}
