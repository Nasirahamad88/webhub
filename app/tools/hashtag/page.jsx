"use client"
import Service from '@/app/component/Intro/page';
import { useState } from 'react';

export const metadata = {
  title: "LinkedIn Hashtag Generator - Elevate Your Social Media Presence",
  description: "Welcome to the LinkedIn Hashtag Generator! Enhance your social media presence with strategic hashtags. Discover trending hashtags for LinkedIn posts and elevate your content visibility. Optimize your reach and engagement with targeted hashtags.",
};

// List of popular LinkedIn hashtags
const hashtags = [
  "#business", "#marketing", "#sales", "#linkedin", "#socialmedia", "#entrepreneur", "#leadership",
  "#motivation", "#success", "#inspiration", "#worklifebalance", "#career", "#networking", "#communication",
  "#productivity", "#growth", "#mindset", "#strategy", "#goals", "#ambition", "#hustle", "#grind",
  "#results", "#achievements", "#impact", "#change", "#innovation", "#future", "#technology", "#trends",
  "#world", "#global", "#community", "#connection", "#relationship", "#collaboration", "#teamwork",
  "#culture", "#diversity", "#inclusion", "#belonging", "#wellbeing", "#happiness", "#positivity",
  "#gratitude", "#mindfulness", "#selfcare", "#mentalhealth", "#physicalhealth", "#fitness", "#nutrition",
  "#lifestyle", "#balance", "#harmony", "#purpose", "#meaning", "#fulfillment", "#legacy", "#impact",
  "#change", "#world", "#global", "#community", "#connection", "#relationship", "#collaboration",
  "#teamwork", "#culture", "#diversity", "#inclusion", "#belonging", "#wellbeing", "#happiness",
  "#positivity", "#gratitude", "#mindfulness", "#selfcare", "#mentalhealth", "#physicalhealth",
    "#fitness", "#nutrition", "#lifestyle", "#balance", "#harmony", "#business", "#marketing", "#sales",
    "#linkedin", "#socialmedia", "#entrepreneurship", "#leadership", "#motivation", "#success", "#inspiration",
    "#worklifebalance", "#career", "#networking", "#communication", "#productivity", "#growth", "#mindset", "#strategy",
    "#goals", "#ambition", "#hustle", "#grind", "#results", "#achievements", "#impact", "#change", "#innovation", "#future",
    "#technology", "#trends", "#world", "#global", "#community", "#connection", "#relationship", "#collaboration", "#teamwork",
    "#culture", "#diversity", "#inclusion", "#belonging", "#wellbeing", "#happiness", "#positivity", "#gratitude", "#mindfulness",
    "#selfcare", "#mentalhealth", "#physicalhealth", "#fitness", "#nutrition", "#lifestyle", "#balance", "#harmony", "#purpose", "#meaning", "#fulfillment", "#legacy", "#selfdevelopment", "#professionaldevelopment", "#learning", "#education", "#training", "#skills", "#expertise", "#knowledge", "#experience", "#creativity", "#innovation", "#disruption", "#startup", "#entrepreneur", "#smallbusiness", "#growthmindset", "#resilience", "#perseverance", "#grit", "#motivationalquotes", "#successquotes", "#leadershipquotes", "#inspirationalquotes", "#careerdevelopment", "#networkingevent", "#conference", "#webinar", "#podcast", "#digitalmarketing", "#contentmarketing", "#branding", "#personalbranding", "#seo", "#socialmediamarketing", "#emailmarketing", "#salesstrategy", "#customerexperience", "#clientmanagement", "#businessdevelopment", "#projectmanagement", "#entrepreneurialmindset", "#professionalgrowth"
];

// Function to generate a random hashtag
function generateHashtag() {
  return hashtags[Math.floor(Math.random() * hashtags.length)];
}

export default function HashtagGenerator() {
  const [generatedHashtags, setGeneratedHashtags] = useState([]);

  const generateRandomHashtags = () => {
    const randomHashtags = [];
    for (let i = 0; i < 15; i++) {
      randomHashtags.push(generateHashtag());
    }
    setGeneratedHashtags(randomHashtags);
  };
 const copyHashtags = () => {
    const textToCopy = generatedHashtags.join(' '); // Concatenate hashtags into a single string
    navigator.clipboard.writeText(textToCopy); // Copy text to clipboard
  };
    return (
        <div className='pt-10 mt-20'>
            <h1 className='font-bold text-4xl text-center'>LinkedIn Trending Hashtags</h1>
    <div className="max-w-md mx-auto mt-10">
      <div className="mb-4">
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={generateRandomHashtags}
        >
          Generate Hashtags
                    </button>
                    <button 
          className="ml-2 bg-gray-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={copyHashtags}
        >
          Copy Hashtags
        </button>
        <button 
          className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => window.location.reload()}
        >
          Remove
        </button>
      </div>
      
                   <div className="border border-gray-300 p-2">
        <ul className="flex">
          {generatedHashtags.map((hashtag, index) => (
            <li key={index} className="text-green-500 flex">#smallbusiness #connection #leadershipquotes #grit #teamwork #experience #networking #motivationalquotes #diversity #linkedin #motivation #networking #meaning #disruption #productivity{hashtag}</li>
          ))}
        </ul>
      </div>
            </div>
            <Service/>
        </div>
  );
}
