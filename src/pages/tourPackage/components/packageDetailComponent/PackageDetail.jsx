import "./packageDetail.css";

import React from "react";

const packageData = {
  id: 1,
  title: "Sample Tour Package",
  description:
    "This is a sample tour package that includes all the best destinations in the country. You will love it!",
  itinerary: [
    "Day 1: Arrival and check-in at the hotel",
    "Day 2: Visit to the famous landmark",
    "Day 3: Explore the beautiful beach",
    "Day 4: Visit to the ancient temple",
    "Day 5: Departure",
  ],
  inclusions: [
    "Accommodation in a 4-star hotel",
    "Breakfast and dinner",
    "Airport transfers",
    "Sightseeing tours",
  ],
  exclusions: ["Lunch", "Personal expenses", "Travel insurance"],
  termsAndConditions:
    "Please note that this tour package is non-refundable and non-transferable. All guests are required to have a valid passport and travel insurance. Please contact us for any further information.",
  price: 1000,
};

const PackageDetail = () => {
  const {
    id,
    title,
    description,
    itinerary,
    inclusions,
    exclusions,
    termsAndConditions,
    price,
  } = packageData;

  const [wishlist, setWishlist] = React.useState(false);

  const handleBooking = () => {
    // Implement booking logic here
    
  };

  const handleAddToWishlist = () => {
    setWishlist(!wishlist);
  };

  return (
    <div className="package-details">
      <h1 className="package-title">{title}</h1>
      <p className="package-description">{description}</p>
      <h2>Itinerary</h2>
      <ul>
        {itinerary.map((day, index) => (
          <li key={index}>{day}</li>
        ))}
      </ul>
      <h2>Inclusions</h2>
      <ul>
        {inclusions.map((inclusion, index) => (
          <li key={index}>{inclusion}</li>
        ))}
      </ul>
      <h2>Exclusions</h2>
      <ul>
        {exclusions.map((exclusion, index) => (
          <li key={index}>{exclusion}</li>
        ))}
      </ul>
      <h2>Terms and Conditions</h2>
      <p>{termsAndConditions}</p>
      <h2>Price: ${price}</h2>
      <button onClick={handleBooking}>Book Now</button>
      <button onClick={handleAddToWishlist}>
        {wishlist ? "Remove from Wishlist" : "Add to Wishlist"}
      </button>
    </div>
  );
};

export default PackageDetail;