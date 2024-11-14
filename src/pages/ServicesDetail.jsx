import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import PageNotFound from '../components/PageNotFound';

const ServicesDetail = () => {
  const { serviceName } = useParams();
  const [serviceImages, setServiceImages] = useState([]);
  const [selectedImgIndex, setSelectedImgIndex] = useState(null);

  // import.meta.glob to load images dynamically
  const images = import.meta.glob('../assets/images/**/*.{jpg,png}');

  const serviceDetailsMap = {
    "Stickers": Array.from({ length: 8 }, (_, i) => `../assets/images/stickers/stickers${i + 1}.jpg`),
    "Number Plate": Array.from({ length: 7 }, (_, i) => `../assets/images/numberPlate/numberPlate${i + 1}.jpg`),
    "Flex Board": [`../assets/images/flexBoard/flexBoard1.jpg`],
    "Self Stamp": [`../assets/images/selfStamp/selfStamp1.jpg`],
    "Visiting Card": Array.from({ length: 3 }, (_, i) => `../assets/images/visitingCard/visitingCard${i + 1}.jpg`),
    "Face Stickers": Array.from({ length: 7 }, (_, i) => `../assets/images/faceStickers/faceStickers${i + 1}.jpg`),
    "Ranjana Lipi Stickers": Array.from({ length: 7 }, (_, i) => `../assets/images/ranjanaLipiStickers/ranjanaLipiStickers${i + 1}.jpg`),
    "Calligraphy Pens": Array.from({ length: 8 }, (_, i) => `../assets/images/calligraphyPens/calligraphyPens${i + 1}.jpg`),
  };

  const isValidService = !!serviceDetailsMap[serviceName];

  const loadImages = async (imagePaths) => {
    const loadedImages = await Promise.all(
      imagePaths.map(async (path) => {
        const image = images[path];
        return image ? (await image()).default : null;
      })
    );
    setServiceImages(loadedImages.filter(Boolean));
  };

  useEffect(() => {
    if (isValidService) {
      const imagePaths = serviceDetailsMap[serviceName];
      loadImages(imagePaths);
    }
  });

  if (!isValidService) {
    return <PageNotFound />;
  }

  const handleLeftArrow = () => {
    setSelectedImgIndex(selectedImgIndex > 0 ? selectedImgIndex - 1 : serviceImages.length - 1);
  };

  const handleRightArrow = () => {
    setSelectedImgIndex(selectedImgIndex < serviceImages.length - 1 ? selectedImgIndex + 1 : 0);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'ArrowLeft') {
      handleLeftArrow();
    } else if (e.key === 'ArrowRight') {
      handleRightArrow();
    } else if (e.key === 'Escape') {
      setSelectedImgIndex(null);
    }
  };

  return (
    <>
      <Helmet>
        <title>Services | Vicky Art Station </title>
        <meta property="og:url" content='https://www.vickyartstation.com.np/services/:serviceName' />
        <meta property="og:title" content='Services Details | Vicky Art Station - Stickers, own of your choice'/>
        <meta name="twitter:title" content="Services Details | Vicky Art Station - Stickers, own of your choice" />
      </Helmet>
      <Navbar />
      <section className="wrapper">
        <h2 className="font-textFont text-2xl font-bold dark:text-lightColor text-center mb-3">
          {serviceName.charAt(0).toUpperCase() + serviceName.slice(1)}
        </h2>

        <section className="xs:columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {serviceImages.map((img, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden group cursor-pointer rounded-lg"
              onClick={() => setSelectedImgIndex(index)}
            >
              <img 
                src={img} 
                alt={`${serviceName} ${index + 1}`} 
                loading="lazy" 
                className="rounded-lg w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 blur-md group-hover:blur-0"
                onLoad={(e) => e.target.classList.remove('blur-md')} 
              />
            </div>
          ))}
        </section>
      </section>

      {selectedImgIndex !== null && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-darkColor bg-opacity-90"
          onClick={() => setSelectedImgIndex(null)}
          onKeyDown={handleKeyPress}
          tabIndex="0"
          autoFocus
        >
          <button
            className="absolute left-8 text-lightColor text-3xl p-2 rounded-full bg-opacity-70 bg-toggleBg"
            onClick={(e) => {
              e.stopPropagation();
              handleLeftArrow();
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <img
            src={serviceImages[selectedImgIndex]}
            alt="Full Image view"
            className="max-w-full max-h-full rounded-2xl p-4"
          />

          <button
            className="absolute right-8 text-lightColor text-3xl p-2 rounded-full bg-opacity-70 bg-toggleBg"
            onClick={(e) => {
              e.stopPropagation();
              handleRightArrow();
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      )}

      <Footer />
    </>
  );
};

export default ServicesDetail;
