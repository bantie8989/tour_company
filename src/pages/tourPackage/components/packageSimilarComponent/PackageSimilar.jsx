import "./packageSimilar.css";
// import { Link } from 'react-router-dom';

const PackageSimilar = ({ currentPackageId }) => {
  const similarPackages = [
    {
      id: 1,
      name: 'Tropical Paradise',
      description: 'Experience the beauty of the Caribbean on this 7-day cruise.',
      image: './assets/images/lalibela.jpg',
    },
    {
      id: 2,
      name: 'European Adventure',
      description: 'Discover the rich history and culture of Europe on this 14-day tour.',
      image: './assets/images/gonder.jpg',
    },
    {
      id: 3,
      name: 'Asian Odyssey',
      description: 'Explore the diverse cultures and landscapes of Asia on this 21-day journey.',
      image: './assets/images/axum.jpg',
    },
  ];

  return (
    <div className="package-similar">
      <h2>Similar Tour Packages</h2>
      <ul>
        {similarPackages.map((packageItem) => (
          <li key={packageItem.id}>
            {/* <Link to={`/packages/${packageItem.id}`}> */}
              <img src={packageItem.image} alt={packageItem.name} />
              <h3>{packageItem.name}</h3>
              <p>{packageItem.description}</p>
            {/* </Link> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PackageSimilar;