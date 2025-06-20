import React, { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const Parallex = () => {

  useEffect(() => {
    let sections = gsap.utils.toArray('.section');

    sections.forEach(section => {
      gsap.to(section, {
        yPercent: 100,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: "bottom bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <div className='text-white overflow-hidden'>
      <div>
        <img 
          src="https://images.unsplash.com/photo-1722259038066-539cdb043330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          className='w-full lg:h-screen section' 
          alt="" 
        />
      </div>
      <div>
        <img 
          src="https://images.unsplash.com/photo-1721897922028-9042704f182f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          className='w-full lg:h-screen section' 
          alt="" 
        />
      </div>
      <div>
        <img 
          src="https://images.unsplash.com/photo-1722259038066-539cdb043330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          className='w-full lg:h-screen section' 
          alt="" 
        />
      </div>
      <div>
        <img 
          src="https://images.unsplash.com/photo-1721897922028-9042704f182f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          className='w-full lg:h-screen section' 
          alt="" 
        />
      </div>
      <div>
        <img 
          src="https://images.unsplash.com/photo-1722259038066-539cdb043330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          className='w-full lg:h-screen section' 
          alt="" 
        />
      </div>
      <div>
        <img 
          src="https://images.unsplash.com/photo-1721897922028-9042704f182f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          className='w-full lg:h-screen section' 
          alt="" 
        />
      </div>
    </div>
  );
}

export default Parallex;
