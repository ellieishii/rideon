/* eslint-disable @next/next/no-img-element */

'use client';

import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import './glow.css';

export default function Home() {
  const [zoom, setZoom] = useState(0.4);
  const [position, setPosition] = useState({ x: -500, y: -200 }); // Default position
  const [dragging, setDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

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

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setStartPos({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    const deltaX = touch.clientX - startPos.x;
    const deltaY = touch.clientY - startPos.y;
    setStartPos({ x: touch.clientX, y: touch.clientY });
    setPosition((prev) => ({ x: prev.x + deltaX, y: prev.y + deltaY }));
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    const zoomFactor = e.deltaY > 0 ? 0.95 : 1.05;
    setZoom((prev) => Math.min(3, Math.max(1, prev * zoomFactor)));
  };

  return (
    <main className="map-container">
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div
        className="movable-map"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onWheel={handleWheel}
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
        }}
      >
        <img src="/map.png" alt="Map" className="map-image" />

        {/* 📍 Pin: Stays at the intersection */}
        <div
          className="glowing-pin"
          style={{
            position: 'absolute',
            top: '32%',
            left: '55.5%',
            transform: `scale(${1 / zoom})`, // ✅ Keeps the pin size consistent
            transformOrigin: 'center center',
          }}
        />
      </div>

      {/* Footer stays fixed at bottom */}
      <Footer />
    </main>
  );
}
