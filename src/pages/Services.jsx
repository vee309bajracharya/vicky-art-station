import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img1 from "../assets/images/stickers/stickers1.jpg";
import img2 from "../assets/images/primary/numberPlates.jpg";
import img3 from "../assets/images/flexBoard/flexBoard1.jpg";
import img4 from "../assets/images/selfStamp/selfStamp1.jpg";
import img5 from "../assets/images/visitingCard/visitingCard1.jpg";
import img6 from "../assets/images/faceStickers/faceStickers1.jpg";
import img7 from "../assets/images/ranjanaLipiStickers/ranjanaLipiStickers1.jpg";
import img8 from "../assets/images/calligraphyPens/calligraphyPens1.jpg";
import { useNavigate } from "react-router-dom"; 
import { Helmet } from "react-helmet";

const Services = () => {
  const navigate = useNavigate();

  const handleServiceClick = (serviceName) => {
    navigate(`/services/${serviceName}`);
  };

  const services = [
    { id: 1, name: "Stickers", images: img1 },
    { id: 2, name: "Number Plate", images: img2 },
    { id: 3, name: "Flex Board", images: img3 },
    { id: 4, name: "Self Stamp", images: img4 },
    { id: 5, name: "Visiting Card", images: img5 },
    { id: 6, name: "Face Stickers", images: img6 },
    { id: 7, name: "Ranjana Lipi Stickers", images: img7 },
    { id: 8, name: "Calligraphy Pens", images: img8 },
  ];

  return (
    <>
      <Helmet>
            <title>Services | Vicky Art Station</title>
            <meta property="og:url" content='https://www.vickyartstation.com.np/services' />
            <meta property="og:title" content='Services | Vicky Art Station - Stickers, own of your choice'/>
            <meta name="twitter:title" content="Services | Vicky Art Station - Stickers, own of your choice" />

      </Helmet>
      <Navbar />
      <section className="wrapper">
        <small className="font-textFont text-2xl font-bold dark:text-lightColor uppercase">
          Services
        </small>
        <p className="xs:text-left md:text-justify font-textFont text-xl my-4 dark:text-lightColor leading-9">
          Discover the services of Vicky Art Station!
        </p>
        <section className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative h-64 w-full bg-cover bg-center rounded-md overflow-hidden group cursor-pointer transform transition-transform duration-300 ease-out translate-y-3 group-hover:translate-y-0"
              style={{ backgroundImage: `url(${service.images})` }} // Display the first image as background
              loading="lazy"
              onClick={() => handleServiceClick(service.name)} // Handle click event
            >
              <div className="absolute inset-0 bg-darkColor bg-opacity-70 transition-opacity duration-300 group-hover:opacity-75"></div>
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-lightColor text-2xl font-semibold">
                  {service.name}
                </h3>
              </div>
            </div>
          ))}
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Services;
