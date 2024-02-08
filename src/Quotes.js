import React from "react";

const Quotes = ({ filteredQuotes }) => {
  return (
    <div className="quotes-container">
      {filteredQuotes.map((quote, index) => (
        <div key={index} className="quote-card">
          <p>{quote}</p>
        </div>
      ))}
    </div>
  );
};

export default Quotes;
