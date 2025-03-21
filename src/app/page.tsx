'use client';

import Image from 'next/image';
import './glow.css'; // create this file for the glowing pin
import Footer from '../components/Footer';

const Home = () => (
  <main style={{ position: 'relative', width: '100%', height: '100vh' }}>
    <Image
      src="/map.png" // make sure this file exists in your public/ folder
      alt="Map"
      layout="fill"
      objectFit="cover"
    />
    <div className="glowing-pin" />
    <Footer />
  </main>
);

export default Home;
