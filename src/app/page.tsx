/* eslint-disable @next/next/no-img-element */

'use client';

import { useState } from 'react';
import Footer from '@/components/Footer';
import './glow.css';

export default function Home() {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.buttons !== 1) return;
    setPosition({
      x: position.x + event.movementX,
      y: position.y + event.movementY,
    });
  };

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    const zoomFactor = event.deltaY > 0 ? 0.95 : 1.05;
    setZoom((prev) => Math.min(2.5, Math.max(1, prev * zoomFactor)));
  };

  return (
    <main className="map-container">
      <div
        className="movable-map"
        onMouseMove={handleMouseMove}
        onWheel={handleWheel}
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
        }}
      >
        <img src="/map.png" alt="Map" className="map-image" />
      </div>

      {/* Glowing pin in center */}
      <div className="glowing-pin" />

      {/* Fixed footer stays at bottom */}
      <Footer />
    </main>
  );
}
