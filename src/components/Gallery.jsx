import { useState, useEffect } from 'react';
import Img1 from '../assets/images/primary/gallery1.jpg';
import Img2 from '../assets/images/primary/gallery2.jpg';
import Img3 from '../assets/images/primary/gallery3.jpg';
import Img4 from '../assets/images/primary/gallery4.jpg';
import Img5 from '../assets/images/primary/gallery5.jpg';
import Img6 from '../assets/images/primary/gallery6.jpg';
import Img7 from '../assets/images/primary/gallery7.jpg';
import Img8 from '../assets/images/primary/gallery8.jpg';
import Img9 from '../assets/images/primary/gallery9.jpg';
import Img10 from '../assets/images/primary/gallery10.jpg';
import Img11 from '../assets/images/primary/gallery11.jpg';

const Gallery = () => {
  const [selectedImgIndex, setSelectedImgIndex] = useState(null);

  const images = [
    { id: 1, src: Img1 },
    { id: 2, src: Img2 },
    { id: 3, src: Img3 },
    { id: 4, src: Img4 },
    { id: 5, src: Img5 },
    { id: 6, src: Img6 },
    { id: 7, src: Img7 },
    { id: 8, src: Img8 },
    { id: 9, src: Img9 },
    { id: 10, src: Img10 },
    { id: 11, src: Img11 },
  ];

  const handleLeftArrow = () => {
    setSelectedImgIndex(
      selectedImgIndex > 0 ? selectedImgIndex - 1 : images.length - 1
    );
  };

  const handleRightArrow = () => {
    setSelectedImgIndex(
      selectedImgIndex < images.length - 1 ? selectedImgIndex + 1 : 0
    );
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        handleLeftArrow();
      } else if (event.key === 'ArrowRight') {
        handleRightArrow();
      } else if (event.key === 'Escape') {
        setSelectedImgIndex(null);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <>
      {/* Grid layout */}
      <section className="xs:columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="relative overflow-hidden cursor-pointer rounded-lg break-inside-avoid group"
            data-aos="fade-down"
            onClick={() => setSelectedImgIndex(index)}
          >
            <img
              src={image.src}
              alt="Gallery Image"
              loading="lazy"
              className="w-full h-auto rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-105 blur-md group-hover:blur-0"
              onLoad={(e) => e.target.classList.remove('blur-md')}
            />
          </div>
        ))}
      </section>

      {/* Full-screen image with navigation */}
      {selectedImgIndex !== null && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-darkColor bg-opacity-90"
          onClick={() => setSelectedImgIndex(null)}
        >
          <button
            className="absolute left-8 text-lightColor text-3xl p-2 rounded-full hover:bg-opacity-70 bg-toggleBg"
            onClick={(e) => {
              e.stopPropagation();
              handleLeftArrow();
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>

          </button>

          <img
            src={images[selectedImgIndex].src}
            alt="Full Image view"
            className="max-w-full max-h-full rounded-md p-4"
          />

          <button
            className="absolute right-8 text-white text-3xl p-2 rounded-full hover:bg-opacity-70 bg-toggleBg"
            onClick={(e) => {
              e.stopPropagation();
              handleRightArrow();
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>

          </button>
        </div>
      )}
    </>
  );
};

export default Gallery;
