// app/page.js

"use client";

import { useState } from "react";

export default function Scraper() {
  const [url, setUrl] = useState("");
  const [data, setData] = useState(null);

  const handleScrape = async () => {
    const response = await fetch(`/api/scraper?url=${encodeURIComponent(url)}`);
    const result = await response.json();
    setData(result);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4">Google Maps Scraper</h1>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter Google Maps URL"
        className="border border-gray-300 p-2 rounded mb-4 w-full max-w-md"
      />
      <button
        onClick={handleScrape}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Scrape
      </button>
      {data && (
        <div className="mt-8 w-full max-w-md bg-white p-4 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4">{data.name}</h2>
          {data.reviews && (
            <>
              <h3 className="text-xl font-semibold mb-2">Reviews:</h3>
              <ul className="list-disc list-inside mb-4">
                {data.reviews.map((review, index) => (
                  <li key={index} className="mb-2">
                    {review}
                  </li>
                ))}
              </ul>
            </>
          )}
          {data.emails && (
            <>
              <h3 className="text-xl font-semibold mb-2">Emails:</h3>
              <ul className="list-disc list-inside">
                {data.emails.map((email, index) => (
                  <li key={index} className="mb-2">
                    {email}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
}
