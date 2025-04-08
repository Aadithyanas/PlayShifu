import React from 'react';

const juniorPackData = [
  {
    title: 'Hands-On Learning',
    image: 'https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fabout%2Fabout-1.webp&w=828&q=50',
    description:
      'Blend physical and digital play seamlessly. With letter tiles, number blocks, and magnetic tiles, kids spell, count, and build to solve puzzles on the screen',
  },
  {
    title: 'Learn the Fundamentals',
    image: 'https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fabout%2Fabout-2.webp&w=828&q=50',
    description:
      'Counting, sequencing, letter identification, spelling, shapes, and more!',
  },
  {
    title: 'Story-Based Learning',
    image: 'https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fabout%2Fabout-3.webp&w=828&q=50',
    description:
      'Play 14 exciting story-driven games with over 1000 levels using our innovative toys.',
  },
  {
    title: 'Age-Adaptive Games',
    image: 'https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fabout%2Fabout-4.webp&w=828&q=50',
    description:
      "The app customizes challenges to your child's grade level. For ages 4-6, master counting, sequences, phonics, sight words. Kids over 6 can conquer addition, subtraction, verbs, prepositions, and more.",
  },
  {
    title: 'Holistic STEM-Learning Pack',
    image: 'https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fabout%2Fabout-5.webp&w=828&q=50',
    description:
      'The junior genius pack is the ultimate educational learning toy to introduce your child to STEM concepts seamlessly.',
  },
  {
    title: 'Skill Building',
    image: 'https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fabout%2Fabout-6.webp&w=828&q=50',
    description:
      'Our educational learning toys nurture eloquent expression, mathematical reasoning, and spatial intelligence.',
  },
];

function JuniorPack() {
  return (
    <section className="px-4 py-5 bg-white">
        <h1 className='text-3xl font-normal text-gray-800'>
            About
        </h1>
        <h1 className='text-4xl font-normal text-gray-800 mb-8'>
        Junior Genius Pack
        </h1>
        
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl py-3 mx-auto">
        {juniorPackData.map((item, index) => (
          <div key={index} className=" rounded-xl ">
            <img
              src={item.image}
              alt={item.title}
              loading='lazy'
              className="w-[30rem] h-25 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold mb-2 text-purple-700">{item.title}</h2>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default JuniorPack;
