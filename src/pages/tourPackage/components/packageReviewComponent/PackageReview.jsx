import React, { useState } from "react";
import "./packageReviews.css";

const PackageReviews = ({ reviews }) => {
  reviews = [
    {
      id: 1,
      title: "Great tour package!",
      description:
        "This tour package was amazing! The guide was knowledgeable and friendly, and the sights were breathtaking.",
      date: "2023-02-15",
      rating: 5,
    },
    {
      id: 2,
      title: "Good but could be better",
      description:
        "The tour package was good, but there were a few areas that could be improved. The guide was knowledgeable but could have been more engaging.",
      date: "2023-02-14",
      rating: 3,
    },
    {
      id: 3,
      title: "Awesome experience!",
      description:
        "This tour package was incredible! The sights were amazing, and the guide was friendly and knowledgeable. I would highly recommend it!",
      date: "2023-02-13",
      rating: 5,
    },
    {
      id: 4,
      title: "Awesome experience!",
      description:
        "This tour package was incredible! The sights were amazing, and the guide was friendly and knowledgeable. I would highly recommend it!",
      date: "2023-02-13",
      rating: 4,
    },
    {
      id: 5,
      title: "Awesome experience!",
      description:
        "This tour package was incredible! The sights were amazing, and the guide was friendly and knowledgeable. I would highly recommend it!",
      date: "2023-02-13",
      rating: 6,
    },
    {
      id: 7,
      title: "Awesome experience!",
      description:
        "This tour package was incredible! The sights were amazing, and the guide was friendly and knowledgeable. I would highly recommend it!",
      date: "2023-02-13",
      rating: 3,
    },
    {
      id: 8,
      title: "Awesome experience!",
      description:
        "This tour package was incredible! The sights were amazing, and the guide was friendly and knowledgeable. I would highly recommend it!",
      date: "2023-02-13",
      rating: 2,
    },
  ];

  const [sortBy, setSortBy] = useState("date");
  const [filterBy, setFilterBy] = useState(5);

  if (!Array.isArray(reviews)) {
    return <div>No reviews found.</div>;
  }

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterBy(event.target.value);
  };

  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortBy === "rating") {
      return b.rating - a.rating;
    } else {
      return new Date(b.date) - new Date(a.date);
    }
  });

  const filteredReviews = sortedReviews.filter(
    (review) => review.rating >= filterBy
  );

  return (
    <div className="package-reviews">
      <h2 className="reviewsTitle">Reviews</h2>
      <div className="package-reviews__sort-filter">
        <label className="lable" htmlFor="sort-by">
          Sort by
        </label>
        <div className="selectContainer">
          <select id="sort-by" value={sortBy} onChange={handleSortChange}>
            <option value="date">Date</option>
            <option value="rating">Rating</option>
          </select>
        </div>
        <label className="lable" htmlFor="filter-by">
          Filter by rating
        </label>
        <div className="selectContainer">
          <select id="filter-by" value={filterBy} onChange={handleFilterChange}>
            <option value={5}>5 stars and above</option>
            <option value={4}>4 stars and above</option>
            <option value={3}>3 stars and above</option>
            <option value={2}>2 stars and above</option>
            <option value={1}>1 star and above</option>
          </select>
        </div>
      </div>
      <ul className="package-reviews__list">
        {filteredReviews.map((review) => (
          <li key={review.id} className="package-reviews__item">
            <div className="package-reviews__rating">{review.rating} stars</div>
            <div className="package-reviews__content">
              <h3 className="package-reviews__title">{review.title}</h3>
              <p className="package-reviews__description">
                {review.description}
              </p>
              <p className="package-reviews__date">{review.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PackageReviews;
