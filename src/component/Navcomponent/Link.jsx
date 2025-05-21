import React from 'react'

const Link = () => {
  return (
    <section className="p-10 text-center">
      <h2 className="text-3xl font-bold text-indigo-700 mb-4">Link Detector</h2>
      <p className="text-gray-600 mb-6">
        Quickly check any link to see if it’s safe or a potential phishing scam.
      </p>
      <input
        type="text"
        placeholder="Paste a URL here..."
        className="border p-3 w-full max-w-md rounded-xl"
      />
      <button className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-indigo-700">
        Track Now
      </button>
    </section>
  );
};

export default Link;

