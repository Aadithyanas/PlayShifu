import React, { useRef } from 'react';

const Cards = [
  { image: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-letters%2Fgames%2Fgame-6.webp&w=384&q=75" },
  { image: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-letters%2Fgames%2Fgame-8.webp&w=384&q=75" },
  { image: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-count%2Fgames%2Fgame-5.webp&w=384&q=75" },
  { image: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-letters%2Fgames%2Fgame-3.webp&w=384&q=75" },
  { image: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-letters%2Fgames%2Fgame-5.webp&w=384&q=75" },
  { image: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-letters%2Fgames%2Fgame-2.webp&w=384&q=75" },
  { image: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-count%2Fgames%2Fgame-4.webp&w=384&q=75" },
  { image: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-link%2Fgames%2Fgame-5.webp&w=384&q=75" },
  { image: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-link%2Fgames%2Fgame-3.webp&w=384&q=75" },
  { image: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-count%2Fgames%2Fgame-2.webp&w=384&q=75" },
  { image: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-link%2Fgames%2Fgame-6.webp&w=384&q=75" }
];

function GameCard() {
    const scrollRef = useRef(null);
  
    const scrollLeft = () => {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    };
  
    const scrollRight = () => {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    };
  
    return (
      <section className="bg-white py-6">
        <h2 className="text-xl font-semibold text-center mb-4">Games Preview</h2>
        
        
  
        <div className="flex justify-center items-center overflow-x-auto max-w-[70rem] rounded-full mx-auto scrollbar-hide">
        <button onClick={scrollLeft} className="px-4 h-12 py-2 bg-gray-200 rounded-full hover:bg-gray-300">←</button>
          <div 
            ref={scrollRef} 
            className="flex space-x-6 px-4 max-w-4xl overflow-x-scroll scroll-smooth scrollbar-hide"
          >
            {Cards.map((ele, idx) => (
              <div key={idx} className="flex-shrink-0">
                <img className="w-48 h-auto rounded-md" src={ele.image} alt={`Game ${idx + 1}`} />
              </div>
            ))}
          </div>
          <button onClick={scrollRight} className="px-4 py-2  ml-4 bg-gray-200 rounded-full hover:bg-gray-300">→</button>
        </div>
      </section>
    );
  }
  
  export default GameCard;
