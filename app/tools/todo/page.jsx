// pages/download.js
import Head from 'next/head';

export default function TODO() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Head>
        <title>Download Todo El Mundo & Todo Mac Extension - Enhance Your Experience</title>
        <meta name="description" content="Download Todo El Mundo and Todo Mac extensions to enhance your productivity. Easy to install and compatible with your favorite tools. Get them now!" />
        <meta name="keywords" content="download Todo El Mundo extension, Todo Mac extension, productivity tools, easy install extensions, enhance your experience" />
        <meta name="author" content="Your Name or Company Name" />
        <meta property="og:title" content="Download Todo El Mundo & Todo Mac Extension - Enhance Your Experience" />
        <meta property="og:description" content="Download Todo El Mundo and Todo Mac extensions to enhance your productivity. Easy to install and compatible with your favorite tools. Get them now!" />
        <meta property="og:url" content="https://webhubdev.com/download" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://webhubdev.com/path/to/your/image.jpg" />
      </Head>

      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Download Our Extension</h3>
        <p className="text-gray-600 mb-8">
          Enhance your website experience with our easy-to-use extension. Click the button below to download the latest version.
        </p>
        {/* Video Showcase */}
        <div className="mb-6">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/5hzv4t7CEEg?autoplay=1&mute=1" // Replace with your video ID
            title="Showcase Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <a
          href="/files/Todo-pro.zip"
          download
          className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white font-semibold rounded-md transition transform hover:scale-105 hover:shadow-lg"
        >
          Download Now
        </a>
      </div>
    </div>
  );
}
