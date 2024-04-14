"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '/ravi-kumar-sKZYPerA5s0-unsplash.jpg',
    '/piotr-makowski-27LH_0jXKYI-unsplash.jpg',
    '/chess (1).jpg',
    '/chess (2).jpg'
  ];
  const autoSlideDelay = 8000; // Delay in milliseconds between slides

  useEffect(() => {
    const intervalId = setInterval(nextSlide, autoSlideDelay);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <main className="bg-white">
      <div className="h-screen bg-[#11111f] p-5 ">
        <div className="w-full h-screen flex items-center">
          <div className="w-1/2 bg-[#fff] mx-3 p-7 py-24 bg-opacity-0 hover:bg-opacity-20 rounded-lg duration-700 items-center flex flex-col justify-center shadow-lg shadow-white/20 ">
            <p className="anim mb-4 text-6xl font-extrabold tracking-[0.2em]">welcome</p>
            <p className="text-white protest text-center font-extrabold text-5xl">"Join Us Today and Let's Play <span className="text-[#F4CE14]">Chess</span>"</p>
            <div className="flex space-x-4 mt-5 font-bold">
              <button className="tracking-wide bg-[#F4CE14] px-4 py-1 rounded">Join A Club</button>
            </div>
          </div>

          <div className=" w-1/2">
            <img src={images[currentIndex]} alt="Slide" className="rounded-lg w-full object-cover h-[450px] shadow-sm shadow-white/20" />
          </div>
        </div>
      </div>
      <div className="bg-[#F5F6EA] h-screen mt-16">
        <h1 className="text-4xl tracking-wider flex justify-center pt-3 font-bold uppercase mb-5">Explore Chess Clubs</h1>
        <div>
          <Image src="/ravi-kumar-sKZYPerA5s0-unsplash.jpg" alt="Explore Chess Clubs" width={500} height={500} />
        </div>
      </div>
     
    </main>
  );
};

export default Home;
