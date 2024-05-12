import React, { useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import "./featuredTours.css";
import ImageGallery from "react-image-gallery";
const FeaturedTours = () => {
  const images = [
    {
      id: 1,
      title: "Tour 1",
      description: "This is a tour of the most beautiful places in the world.",
      price: "$1000",
      image: "../../../assets/images/afar.jpg",
    },
    {
      id: 2,
      title: "Tour 2",
      description: "This is a tour of the most exciting adventure activities.",
      price: "$2000",
      image: "../../../assets/images/gonder.jpg",
    },
    {
      id: 3,
      title: "Tour 3",
      description:
        "This is a tour of the most historical landmarks in the world.",
      price: "$3000",
      image: "../../../assets/images/axum.jpg",
    },
    {
      id: 4,
      title: "Tour 4",
      description:
        "This is a tour of the most historical landmarks in the world.",
      price: "$3000",
      image: "../../../assets/images/birana.jpg",
    },
    {
      id: 5,
      title: "Tour 5",
      description:
        "This is a tour of the most historical landmarks in the world.",
      price: "$3000",
      image: "../../../assets/images/gedam.jpg",
    },
    {
      id: 6,
      title: "Tour 6",
      description:
        "This is a tour of the most historical landmarks in the world.",
      price: "$3000",
      image: "../../../assets/images/jungle.jpg",
    },
    {
      id: 7,
      title: "Tour 7",
      description:
        "This is a tour of the most historical landmarks in the world.",
      price: "$3000",
      image: "../../../assets/images/map.jpg",
    },
    {
      id: 8,
      title: "Tour 8",
      description:
        "This is a tour of the most historical landmarks in the world.",
      price: "$3000",
      image: "../../../assets/images/lalibela.jpg",
    },
    {
      id: 9,
      title: "Tour 9",
      description:
        "This is a tour of the most historical landmarks in the world.",
      price: "$3000",
      image: "../../../assets/images/miniliki.jpg",
    },
    {
      id: 10,
      title: "Tour 10",
      description:
        "This is a tour of the most historical landmarks in the world.",
      price: "$3000",
      image: "../../../assets/images/tewodros.jpg",
    },
    {
      id: 11,
      title: "Tour 11",
      description:
        "This is a tour of the most historical landmarks in the world.",
      price: "$3000",
      image: "../../../assets/images/sofomer.jpg",
    },
    {
      id: 12,
      title: "Tour 12",
      description:
        "This is a tour of the most historical landmarks in the world.",
      price: "$3000",
      image: "../../../assets/images/pyassa.jpg",
    },
    {
      id: 13,
      title: "Tour 13",
      description:
        "This is a tour of the most historical landmarks in the world.",
      price: "$3000",
      image: "../../../assets/images/zinjero.jpg",
    },
  ];

  return (
    <div className="featuredTours">
      <ImageGallery autoPlay={true} showIndex={true}  lazyLoad={true} slideOnThumbnailOver={true} 
        items={images.map((image) => {
          return {
            ...image,
            original: image.image,
            thumbnail: image.image,
            originalClass: "featuredTours-image",
            thumbnailClass: "featuredTours-image",
            description: (
              <div className="image-info" id={`image-${image.id}`}>
                <h3 className="image-title" id={`title-${image.id}`}>{image.title}</h3>
                <h2 className="image-description" id={`description-${image.id}`}>{image.description}</h2>
                <p className="price" id={`price-${image.id}`}>{image.price}</p>
              </div>

            ),
          };
        })}
      />
    </div>
  );
};

export default FeaturedTours;
