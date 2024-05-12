import "./faq.css";
import { useState } from "react";
function Faq() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    if (activeQuestion === index) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(index);
    }
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-wrap -mx-3">
          <div className="lg:w-1/3 md:w-1/2 px-3 mb-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-3">
                Getting There & Around
              </h3>
              <button className="question" onClick={() => toggleQuestion(0)}>
                <span className="icon">Q</span>
                <span className="text">
                  How do I get to [Destination Name]? (Include airport
                  information, public transportation options)
                </span>
              </button>
              {activeQuestion === 0 && (
                <div className="answer">
                  <p>Answer to question 1</p>
                </div>
              )}
              <button className="question" onClick={() => toggleQuestion(1)}>
                <span className="icon">Q</span>
                <span className="text">
                  What is the best time of year to visit? (Consider weather
                  patterns and peak seasons)
                </span>
              </button>
              {activeQuestion === 1 && (
                <div className="answer">
                  <p>Answer to question 2</p>
                </div>
              )}

              <button className="question" onClick={() => toggleQuestion(2)}>
                <span className="icon">Q</span>
                <span className="text">
                  What is the best time of year of the dd to visit? (Consider
                  weather patterns and peak seasons)
                </span>
              </button>
              {activeQuestion === 2 && (
                <div className="answer">
                  <p>Answer to question 3</p>
                </div>
              )}

              <button className="question" onClick={() => toggleQuestion(3)}>
                <span className="icon">Q</span>
                <span className="text">
                  What is the best time of year to visit? (Consider weather
                  patterns and peak seasons)
                </span>
              </button>
              {activeQuestion === 3 && (
                <div className="answer">
                  <p>Answer to question 4</p>
                </div>
              )}

              <button className="question" onClick={() => toggleQuestion(4)}>
                <span className="icon">Q</span>
                <span className="text">
                  What is the best time of year to visit? (Consider weather
                  patterns and peak seasons)
                </span>
              </button>
              {activeQuestion === 4 && (
                <div className="answer">
                  <p>Answer to question 5</p>
                </div>
              )}

              <button className="question" onClick={() => toggleQuestion(5)}>
                <span className="icon">Q</span>
                <span className="text">
                  What is the best time of year to visit? (Consider weather
                  patterns and peak seasons)
                </span>
              </button>
              {activeQuestion === 5 && (
                <div className="answer">
                  <p>Answer to question 6</p>
                </div>
              )}
            </div>
          </div>
          {/* Repeat for other sections */}
        </div>
      </div>
    </div>
  );
}

export default Faq;
