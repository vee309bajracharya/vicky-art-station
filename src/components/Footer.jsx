import { Link } from 'react-router-dom';
import FooterLogo from '../assets/logo/web_logo.png';

const Footer = () => {
  return (
    <footer className='bg-footerBg text-lightColor'>

        {/* main container */}
        <section className='wrapper'>

            {/* footer-top-content */}
            <section className='flex justify-between gap-3 xs:flex-col md:flex-row xs:items-start md:items-center'>

                {/* footer left */}

                <section className='xs:w-full md:w-96'>
                    <figure>
                        <Link to='/'>
                            <img src={FooterLogo} className='w-16 h-16' alt="Vicky Art Station Logo" />
                        </Link>

                        <figcaption className='font-primaryFont text-4xl tracking-wide xs:text-xl sm:text-3xl'>
                            Vicky Art Station
                        </figcaption>
                    </figure>
                    <p className='font-textFont leading-6 my-4'>We specialize in a wide variety of quality custom sticker printing services, paying attention to every detail according to our customers needs</p>
                </section>

                {/* footer mid */}
                <section className='flex justify-between items-center gap-16 xs:gap-10 font-textFont float-end xs:flex-col sm:flex-row mt-3'>

                    <div className='leading-6'>
                        <h3 className='font-bold mb-4 xs:text-xl sm:text-2xl'>Navigation</h3>
                        <li><Link to='/' className=''>Home</Link></li>
                        <li><Link to='/services' className=''>Services</Link></li>
                    </div>

                    <div className='leading-6'>
                        <h3 className='font-bold mb-4 xs:text-xl sm:text-2xl'>Quick Links</h3>
                        <li><Link to='/contact' className=''>Contact</Link></li>
                        <li><Link to='/faq' className=''>FAQs</Link></li>
                    </div>
                
                </section>

                {/* footer right */}
                <section className='flex justify-center gap-10 my-4 xs:flex-col xs:gap-5'>

                    <h3 className='uppercase font-textFont text-center text-2xl font-bold xs:text-left xs:text-xl'>Follow us on</h3>
                    {/* social medias */}
                    <section className='flex justify-center gap-4 xs:justify-start'>

                    <Link to='https://www.facebook.com/vickyart1133/' target='/blank'>
                    <svg viewBox="-5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" className='icons'>

                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="Dribbble-Light-Preview" transform="translate(-385.000000, -7399.000000)" fill="#fff">
                                <g id="icons" transform="translate(56.000000, 160.000000)">
                                    <path d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z" id="facebook-[#176]"></path>
                                </g>
                            </g>
                        </g>
                    </svg>
                    </Link>

                    <Link to='https://www.instagram.com/vickyartstation/' target='/blank'>
                    <svg viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" className='icons'>
                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                    </svg>
                    </Link>

                    </section>

                </section>

            </section>


    

            <hr className='mt-3' />

            <p className='text-center text-lightColor font-textFont mt-5 xs:text-[.9rem] md:text-[1.2rem]'>Copyright &copy; 2024 Vicky Art Station. All Rights Reserved | Developed by Veerin Bajracharya</p>

        </section>



    

    </footer>
  )
}

export default Footer