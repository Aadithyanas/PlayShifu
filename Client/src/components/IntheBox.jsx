import React from 'react';

const box = [
  {
    title: "Count Spike",
    image:
      "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-count%2Fout-of-the-box%2Fcount-spike.webp&w=1080&q=75",
  },
  {
    title: "2-Set Of 0-9 Numerals",
    image:
      "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-count%2Fout-of-the-box%2Fnumerals-and-arithmetic-operators.webp&w=1080&q=75",
  },
  {
    title: "Gamepad",
    image:
      "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-count%2Fout-of-the-box%2Fgamepad.webp&w=1080&q=75",
  },
  {
    title: "Quick Start Guide",
    image:
      "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-count%2Fout-of-the-box%2Fquick-start-guide.webp&w=1080&q=75",
  },
  {
    title: "48 Letter Tiles",
    image:
      "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-letters%2Fout-of-the-box%2F48-letter-tiles.webp&w=1080&q=75",
  },
  {
    title: "Letters Trunk",
    image:
      "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-letters%2Fout-of-the-box%2Fletters-trunk.webp&w=1080&q=75",
  },
  {
    title: "Smart Magnetic Tiles",
    image:
      "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-link%2Fout-of-the-box%2F15-smart-magnetic-tiles.webp&w=1080&q=75",
  },
];

function IntheBox() {
  return (
    <section className="bg-white py-12">
        <div className="h-px w-[55rem] bg-gray-400 my-4 mx-auto"></div>



      <h2 className="text-center text-2xl font-semibold mb-8 text-gray-600">In the Box</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {box.map((ele, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center w-48 mx-auto"
          >
            <img className="w-48 h-auto rounded-lg" src={ele.image} alt={ele.title} />
            <h3 className="text-base font-light">{ele.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default IntheBox;
