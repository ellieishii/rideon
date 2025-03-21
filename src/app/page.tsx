/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-use-before-define, jsx-a11y/no-static-element-interactions */

'use client';

import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import './glow.css';

export default function Home() {
  const [zoom, setZoom] = useState(0.4);
  const [position, setPosition] = useState({ x: -500, y: -200 }); // Default position
  const [dragging, setDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [lastTouchDist, setLastTouchDist] = useState<number | null>(null);

  // ✅ Fix: Set position AFTER the component mounts (Client-Side)
  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setPosition({ x: -1230, y: -70 });
    }
  }, []); // Runs once when component mounts

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setStartPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => setDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;
    const deltaX = e.clientX - startPos.x;
    const deltaY = e.clientY - startPos.y;
    setStartPos({ x: e.clientX, y: e.clientY });
    setPosition((prev) => ({ x: prev.x + deltaX, y: prev.y + deltaY }));
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 2) {
      const touchDist = getTouchDistance(e.touches as unknown as TouchList);
      if (touchDist !== null) {
        setLastTouchDist(touchDist);
      }
    } else {
      const touch = e.touches[0];
      setStartPos({ x: touch.clientX, y: touch.clientY });
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 2) {
      const touchDist = getTouchDistance(e.touches as unknown as TouchList);
      if (lastTouchDist !== null && touchDist !== null) {
        const diff = touchDist - lastTouchDist;
        const zoomChange = diff / 300;
        setZoom((prev) => clamp(prev + zoomChange, 0.3, 2));
        setLastTouchDist(touchDist);
      }
    } else {
      const touch = e.touches[0];
      const deltaX = touch.clientX - startPos.x;
      const deltaY = touch.clientY - startPos.y;
      setStartPos({ x: touch.clientX, y: touch.clientY });
      setPosition((prev) => ({ x: prev.x + deltaX, y: prev.y + deltaY }));
    }
  };

  const handleTouchEnd = () => setLastTouchDist(null);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    const zoomChange = e.deltaY > 0 ? -0.05 : 0.05;
    setZoom((prev) => clamp(prev + zoomChange, 0.3, 2));
  };

  const getTouchDistance = (touches: TouchList): number | null => {
    const touch1 = touches.item(0);
    const touch2 = touches.item(1);
    if (!touch1 || !touch2) return null;

    return Math.sqrt(
      (touch2.clientX - touch1.clientX) ** 2
      + (touch2.clientY - touch1.clientY) ** 2,
    );
  };

  const clamp = (value: number, min: number, max: number): number => Math.max(min, Math.min(max, value));

  return (
    <main className="map-container">
      <div
        className="movable-map"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onWheel={handleWheel}
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
          transformOrigin: 'top left',
        }}
      >
        <img src="/map.png" alt="Map" className="map-image" />

        {/* 📍 Red pin */}
        <div
          className="glowing-pin"
          style={{
            position: 'absolute',
            top: '32%',
            left: '55.5%',
            transform: `scale(${1 / zoom})`,
            transformOrigin: 'center center',
          }}
        />
      </div>

      <Footer />
    </main>
  );
}
