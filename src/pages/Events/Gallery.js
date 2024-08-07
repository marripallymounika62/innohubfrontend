import React from 'react';

function Gallery() {
  const images = [
    { src: "instructor1.jpg", label: "Conference", position: "below" },
    { src: "instructor1.jpg", label: "Webinar", position: "above" },
    { src: "instructor1.jpg", label: "Workshop", position: "below" },
    { src: "instructor1.jpg", label: "Hackathon", position: "above" },
  ];

  return (
    <section id="gallery" className="my-8 px-4 sm:px-6 md:px-8 lg:px-14">
      <h2 className="text-2xl sm:text-13xl md:text-5xl lg:text-17xl font-bold mb-4 text-white">Gallery</h2>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 text-white">Check out some of our past events and see for yourself the amazing experience</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {images.map((image, index) => (
          <div key={index} className="text-left">
            {image.position === "above" && <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 text-white">{image.label}</p>}
            <div className="overflow-hidden rounded shadow border-2 border-black bg-white w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
              <img src={image.src} alt="Gallery" className="w-full h-full object-cover" />
            </div>
            {image.position === "below" && <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2 text-white">{image.label}</p>}
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-10 mb-10">
        <button className="bg-blue-500 text-base sm:text-lg md:text-xl lg:text-2xl text-black font-bold py-2 px-4 rounded-lg">View Archive</button>
      </div>
    </section>
  );
}

export default Gallery;
