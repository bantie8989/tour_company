import "./packageList.css";
import React, { useState } from "react";
import packageDetail from "../packageDetailComponent/PackageDetail";
import PackageDetail from "../packageDetailComponent/PackageDetail";
import { Link } from "react-router-dom";


const PackageList = () => {
  const [packages, setPackages] = useState([
    {
      id: 1,
      image: "../assets/images/gonder.jpg",
      description: "fasiledes  castel ",
      price: 100,
      destination: "gonder ",
      duration: 3,
    },
    {
      id: 3,
      image: "../assets/images/axum.jpg",
      description: "axum palace",
      price: 300,
      destination: "axum",
      duration: 7,
    },
    {
      id: 5,
      image: "../assets/images/sofomer.jpg",
      description: "red sea",
      price: 500,
      destination: "red sea",
      duration: 10,
    },
    {
      id: 6,
      image: "../assets/images/pyassa.jpg",
      description: "pyassa",
      price: 600,
      destination: "addis ababa",
      duration: 11,
    },
    {
      id: 8,
      image: "../assets/images/birana.jpg",
      description: "birana",
      price: 800,
      destination: "birana",
      duration: 13,
    },
    {
      id: 9,
      image: "../assets/images/gedam.jpg",
      description: "gedam",
      price: 900,
      destination: "gedam",
      duration: 14,
    },
    {
      id: 10,
      image: "../assets/images/jungle.jpg",
      description: "jungle",
      price: 1000,
      destination: "jungle",
      duration: 15,
    },
    // Add more packages here
  ]);

  const [filteredPackages, setFilteredPackages] = useState(packages);
  const [sortCriteria, setSortCriteria] = useState("price");
  // const [packageDetails, setPackageDetails] = useState<import("react").HtmlHTMLAttributes>(null);
  

  // const handleDetails = (e) =>{
  //   setPackageDetails(packageDetail)
    

  // };

  const handleFilterChange = (event) => {
    const filterValue = event.target.value;
    const filteredPackages = packages.filter((pkg) => {
      return pkg.destination.toLowerCase().includes(filterValue.toLowerCase());
    });
    setFilteredPackages(filteredPackages);
  };

  const handleSortChange = (event) => {
    const sortValue = event.target.value;
    setSortCriteria(sortValue);
    const sortedPackages = filteredPackages.sort((a, b) => {
      if (sortValue === "price") {
        return a.price - b.price;
      } else if (sortValue === "duration") {
        return a.duration - b.duration;
      } else {
        return a.destination.localeCompare(b.destination);
      }
    });
    setFilteredPackages(sortedPackages);
  };
  const handleClick = (e) =>{
    return(
      console.log("hello")
    )
  }

  return (
    <div className="package-list">
      <div className="filter-container">
        <label className="filter-label">Filter by destination:</label>
        
        <input
          type="text"
          className="filter-input"
          onChange={handleFilterChange}
        />
      </div>
      <div className="sort-container">
        <label className="sort-label">Sort by:</label>
        <select
          value={sortCriteria}
          onChange={handleSortChange}
          className="sort-select"
        >
          <option value="price">Price</option>
          <option value="duration">Duration</option>
          <option value="destination">Destination</option>
        </select>
      </div>
      <ul className="package-list">
        {filteredPackages.map((pkg) => (
          <li key={pkg.id} className="package-item">
            <img
              className="package-image"
              src={pkg.image}
              alt={pkg.description}
            />
            <div className="package-details">
              <h2 className="package-title">{pkg.description}</h2>
              <p className="package-description">{pkg.description}</p>
              <p className="package-price">Price: ${pkg.price}</p>
              <p>Destination: {pkg.destination}</p>
              <p>Duration: {pkg.duration} days</p>{" "}
              <button className="detail-button" onClick={handleClick}>package detail</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PackageList;
