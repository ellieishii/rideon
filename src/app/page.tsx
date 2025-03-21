/* eslint-disable @next/next/no-img-element */

'use client';

import { useState } from 'react';
import Footer from '@/components/Footer';
import './glow.css';

export default function Home() {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

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
      </div>

      {/* Pin stays fixed */}
      <div className="glowing-pin" />

      {/* Footer stays fixed at bottom */}
      <Footer />
    </main>
  );
}
