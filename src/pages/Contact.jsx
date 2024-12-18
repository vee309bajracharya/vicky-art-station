import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const Contact = () => {

  const detailsData = [
    {
      id: 1,
      iconPath: (
        <>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </>
      ),
      text: 'Madhyapur Thimi, Bhaktapur',
      type: 'address',
    },
    {
      id: 2,
      iconPath: (
        <>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </>
      ),
      text: '9841824880',
      type: 'phone',
    },
    {
      id: 3,
      iconPath: (
        <>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </>
      ),
      text: 'vickyartstation@gmail.com',
      type: 'email',
    },
  ];

  return (
    <section>
      <Helmet>
        <title>Contact | Vicky Art Station</title>
        <meta property="og:url" content='https://www.vickyartstation.com.np/contact' />
        <meta property="og:title" content='Contact | Vicky Art Station - Stickers, own of your choice'/>
        <meta name="twitter:title" content="Contact | Vicky Art Station - Stickers, own of your choice" />

      </Helmet>

      <Navbar />

      {/* Container */}
      <section className='wrapper'>

        <small className='font-textFont text-2xl font-bold dark:text-lightColor uppercase'>Contact</small>

        {/* details container */}
        <section className='flex justify-start items-center gap-10 my-7 cursor-pointer xs:flex-col md:flex-row'>
          {detailsData.map((detail) => (
            <div
              key={detail.id}
              className='bg-secondaryColor p-5 text-lightColor rounded-lg gap-3 hover:bg-hoverColor hover:duration-300 transition-all h-28 w-full sm:w-64 md:w-full'
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.9} stroke="currentColor" className="size-7" fill='none'>
                {detail.iconPath}
              </svg>
              {detail.type === 'phone' ? (
                <a href={`tel:${detail.text}`} className='font-textFont text-[1rem] font-medium tracking-wide mt-2'>
                  {detail.text}
                </a>
              ) : detail.type === 'email' ? (
                <a href={`mailto:${detail.text}`} className='font-textFont text-[1rem] font-medium tracking-wide mt-2'>
                  {detail.text}
                </a>
              ) : (
                <p className='font-textFont text-[1rem] font-medium tracking-wide mt-2'>{detail.text}</p>
              )}
            </div>
          ))}
        </section>

        {/* google maps */}
        <section className='pt-6'>
          <h3 className='text-center font-textFont font-bold text-5xl text-darkColor dark:text-lightColor my-6 xs:text-xl sm:text-3xl md:text-5xl'>Find Us on Google Maps</h3>
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.1224069867003!2d85.3834962754665!3d27.68261137619674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b000396e681%3A0x161a5c9b8668904b!2sVicky%20Art%20Station!5e0!3m2!1sen!2snp!4v1729852642287!5m2!1sen!2snp"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className='w-full h-[30rem] rounded-lg shadow-lg'>
          </iframe>
        </section>

      </section>

      <Footer />
    </section>
  );
};

export default Contact;
