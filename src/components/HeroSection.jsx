import {useEffect} from 'react';
import Img1 from '../assets/images/primary/main.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  useEffect(()=>{
    AOS.init();
  },[])

  return (
<section>
  {/* Hero Section starts here */}
  <div className="relative">
    <figure className="relative w-full xs:h-full lg:h-[40rem]">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-darkColor opacity-70"></div>

      {/* Responsive Image */}
      <img 
        className="w-full object-cover xs:h-[20rem] lg:h-[40rem] bg-cover bg-center" 
        src={Img1}
        alt="Entry Image of Vicky Art Station"
      />
    </figure>

    {/* Text on the main img */}
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center" data-aos="zoom-in-up" data-aos-duration="5000">
      <h1 
        className="xs:text-5xl md:text-7xl lg:text-9xl font-primaryFont font-extrabold tracking-wider uppercase text-lightColor"
        style={{ 
          textShadow: "0 0 4rem #0A30DA, 0 0 2rem #0A30DA" 
        }}
        >
        Vicky Art Station
      </h1>
      <p className='font-mainTitleFont xs:text-2xl md:text-4xl lg:text-6xl text-lightColor'>Stickers, own of your choice</p>
      <div className="mt-6">
        <Link to="/about">
          <button 
            className="mainBtn"
            id='explore'
          >
            Explore More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="ml-2 w-5 h-5 md:w-6 md:h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  </div>
</section>

  );
};

export default HeroSection;
