import './testimonial.css'

import React from 'react';
const testimonials= [
  {
    id: 1,
    name: 'John Doe',
    image: 'https://www.youtube.com/watch?v=DQacCB9tDaw',
    quote: 'This tour was amazing! I had such a great time and the guide was so knowledgeable.',
    videoId: 'DQacCB9tDaw'

  },
  {
    id: 2,
    name: 'Jane Smith',
    image: 'https://www.youtube.com/watch?v=12X9exHzSOY',
    quote: 'I highly recommend this tour company. The service was top-notch and the tour guides were incredibly helpful.',
    videoId:"12X9exHzSOY"

  },
  {
    id: 3,
    name: 'Mary Johnson',
    image: 'https://www.youtube.com/watch?v=mFzHpK7ibfo',
    quote: 'I traveled with this tour company last year and it was the best experience I had ever had. The itinerary was well planned and the hotels were great.',
    videoId:"mFzHpK7ibfo"
  },
];


const Testimonial = () => {
  return (
    <div className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-container">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial">
            <div className="videoWrapper">
              <iframe width="560"  height="315" src={`https://www.youtube.com/embed/${testimonial.videoId}`} title="YouTube video player" framerBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <p>{testimonial.quote}</p>
            <h3>{testimonial.name}</h3>
          </div>
        ))}
      </div>

    </div>
  );
};


export default Testimonial;
