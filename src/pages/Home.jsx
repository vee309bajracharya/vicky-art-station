import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"
import Loader from "../components/Loader"
import { useState, useEffect } from "react"
import { Helmet } from "react-helmet"

const Home = () => {

  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  },[])


  return (
    <section>
          <Helmet>
            <title>Vicky Art Station | Stickers, own of your choice </title>
            <meta property="og:url" content='https://www.vickyartstation.com.np/' />
            <meta property="og:title" content='Vicky Art Station | Stickers, own of your Choice'/>
            <meta name="twitter:title" content="Vicky Art Station | Stickers, own of your Choice" />
          </Helmet>

          {loading ? (<Loader/>) : (
          <>
            <Navbar/>
            <HeroSection/>
            <Footer/>
          </>         
        )}

    </section>
  )
}

export default Home