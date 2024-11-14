import Navbar from '../components/Navbar';
import Profile from '../assets/images/primary/profile.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import {Helmet} from "react-helmet";
import Icon1 from '../assets/svg/fb.svg';
import Icon2 from '../assets/svg/insta.svg';
import Icon3 from '../assets/svg/gmail.svg';
import { Link } from 'react-router-dom';

const About = () => {
    useEffect(()=>{
    AOS.init();
  },[])

  return (
    <>
    <Helmet>
      <title>About | Vicky Art Station</title>
      <meta property="og:url" content='https://www.vickyartstation.com.np/about' />
      <meta property="og:title" content='About | Vicky Art Station - Stickers, own of your choice'/>
      <meta name="twitter:title" content="About | Vicky Art Station - Stickers, own of your choice" />
    </Helmet>

    <Navbar/>

    {/* About content starts here */}
    <section className='wrapper'>

      <section className='flex justify-between items-center gap-5 xs:flex-col-reverse md:flex-row' data-aos="fade-down">

        <section className='xs:w-full md:w-[70%]'>
          <small className='font-textFont text-2xl font-bold dark:text-lightColor uppercase'>About</small>
          <h1 className='font-primaryFont xs:text-5xl md:text-7xl lg:text-8xl text-primaryColor uppercase'>Vicky Art Station</h1>
          <p className='my-5 font-textFont leading-9 dark:text-lightColor text-xl xs:text-left'>Welcome to Vicky Art Station. We believe in converting your ideas into reality with the motto <b>Stickers, own of your choice</b>.
          Whether you are looking for custom stickers, your face stickers, or vehicle number plates, we have got you covered. <br /> <br />

          Beyond stickers and number plates, we offer a range of personalized services, including flex board, self stamp, name plates, visiting cards all crafted with care and attention to detail. At Vicky Art Station, it is all about adding that personal touch – just the way you want it.

          So come explore, create, and let us help express your style in ways that make a statement.</p>

        </section>

        <section className='mt-5 text-center'>

          {/* owner details */}
          <img src={Profile} alt="Owner pic" className='w-52 h-52 object-cover rounded-lg' loading='lazy' />
          <h3 className='font-primaryFont text-3xl text-darkColor dark:text-lightColor tracking-wide'>Vicky Bajracharya</h3>
          <small className='font-textFont text-xl dark:text-lightColor'>Owner</small>

          {/* owner social media links */}
          <section className='flex gap-3 justify-center items-center'>
            <Link to='https://www.facebook.com/vicky.bajracharya' target='_blank'>
              <figure>
                <img src={Icon1} alt="Owner Facebook Link" className='socials' />
              </figure>
            </Link>

            <Link to='https://www.instagram.com/vicky_bajracharya/' target='_blank'>
              <figure>
                <img src={Icon2} alt="Owner Instagram Link" className='socials' />
              </figure>
            </Link>

            <a href="mailto:vickyart1133@gmail.com" target='_blank'>
              <figure>
                <img src={Icon3} alt="Owner Gmail Link" className='socials' />
              </figure>
            </a>
          </section>
        </section>

      </section>

      {/* Gallery section starts here */}
      <section className='mt-7 text-left'>
          <h3 className='font-textFont text-2xl font-bold dark:text-lightColor uppercase' data-aos="fade-down">Gallery</h3>
          <p className='font-textFont text-xl my-4 dark:text-lightColor leading-9' data-aos="fade-down">Explore our Gallery for an inside look at what Vicky Art Station is all about. Presenting some examples of our work, from custom stickers to finest number plates each reflecting to quality and creativity.</p>

          {/* Images */}
          <Gallery/>
      </section>
    </section>
    <Footer/>
    </>
  )
}

export default About