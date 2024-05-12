import { useState } from "react";
import "./packageBooking.css";

const PackageBooking = ({ packageData }) => {
  const [bookingData, setBookingData] = useState({
    name: "",
    contact: "",
    travelers: [
      {
        name: "",
        age: "",
      },
    ],
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBookingData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTravelerChange = (index, event) => {
    const { name, value } = event.target;
    setBookingData((prevData) => {
      const travelers = [...prevData.travelers];
      travelers[index][name] = value;
      return {
        ...prevData,
        travelers,
      };
    });
  };

  const handleAddTraveler = () => {
    setBookingData((prevData) => ({
      ...prevData,
      travelers: [...prevData.travelers, { name: "", age: "" }],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <form className="package-booking-form" onSubmit={handleSubmit}>
      <label className="package-booking-name-label" htmlFor="name">
        Name:
      </label>
      <input
        className="package-booking-name-input"
        type="text"
        id="name"
        name="name"
        value={bookingData.name}
        onChange={handleInputChange}
      />
      <label className="package-booking-contact-label" htmlFor="contact">
        Contact Details:
      </label>
      <input
        className="package-booking-contact-input"
        type="text"
        id="contact"
        name="contact"
        value={bookingData.contact}
        onChange={handleInputChange}
      />
      <h2 className="package-booking-traveler-title">Traveler Details:</h2>
      {bookingData.travelers.map((traveler, index) => (
        <div key={index} className="package-booking-traveler-item">
          <label
            className="package-booking-traveler-name-label"
            htmlFor={`traveler-name-${index}`}
          >
            Name:
          </label>
          <input
            className="package-booking-traveler-name-input"
            type="text"
            id={`traveler-name-${index}`}
            name="name"
            value={traveler.name}
            onChange={(event) => handleTravelerChange(index, event)}
          />
          <label
            className="package-booking-traveler-age-label"
            htmlFor={`traveler-age-${index}`}
          >
            Age:
          </label>
          <input
            className="package-booking-traveler-age-input"
            type="number"
            id={`traveler-age-${index}`}
            name="age"
            value={traveler.age}
            onChange={(event) => handleTravelerChange(index, event)}
          />
        </div>
      ))}
      <button
        type="button"
        className="package-booking-add-button"
        onClick={handleAddTraveler}
      >
        Add Traveler
      </button>
      <button type="submit" className="package-booking-submit-button">
        Book Package
      </button>
    </form>
  );
};
export default PackageBooking;
