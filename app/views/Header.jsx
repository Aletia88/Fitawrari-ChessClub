"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Navigation = () => {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState(router.asPath);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('nav');
      if (header) {
        header.classList.toggle('stickyy', window.scrollY > 0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>

  
    <nav className={`p-2 fixed bg-[#11111F] w-screen top-0 left-0 duration-500 z-50 ${currentPath !== '/' ? 'stickyy' : ''}`}>
      <div className="flex justify-between mx-5 bg-mainc items-center">
        <a href="#/" className="text-white font-bold relative duration-500 tracking-wider">FIT AWRARI</a>
        <ul className="flex gap-7 h-fit text-white p-2 px-14 rounded-lg items-center tracking-wide">
          <li><a href="/">Home</a></li>
          <li><a href="/Membership">Membership</a></li>
          <li><a href="/Activity">Events</a></li>
          <li><a href="/Support">Supports</a></li>
          <li><a href="/Contact">Contact Us</a></li>
        </ul>
      </div>
      <div className="border-b-2 border-b-[#f4ce14] hor max-w-[50%] left-[59%] overflow-hidden hidden absolute animate-animate text-[#f4ce14] mr-2"></div>
    </nav>
    </>
  );
};

export default Navigation;
