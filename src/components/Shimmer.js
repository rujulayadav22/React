import React from "react";

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(12)
        .fill("")
        .map((_, index) => (
          <div className="shimmer-card" key={index}>
            <div className="shimmer-img shimmer-animate"></div>

            <div className="shimmer-content">
              <div className="shimmer-line shimmer-title shimmer-animate"></div>
              <div className="shimmer-line shimmer-text shimmer-animate"></div>
              <div className="shimmer-line shimmer-text small shimmer-animate"></div>

              <div className="shimmer-row">
                <div className="shimmer-chip shimmer-animate"></div>
                <div className="shimmer-chip shimmer-animate"></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
