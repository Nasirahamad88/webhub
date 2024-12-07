"use client"

import { useState } from "react";

export default function PrimeNumber() {
  const [number, setNumber] = useState("");
  const [primeFactors, setPrimeFactors] = useState([]);

  const getPrimeFactors = (N) => {
    if (N < 2) {
      return ["Input must be greater than 1."];
    }

    const factors = [];
    let divisor = 2;

    while (N >= 2) {
      while (N % divisor === 0) {
        factors.push(divisor);
        N = N / divisor;
      }
      divisor++;
      if (divisor * divisor > N && N > 1) {
        factors.push(N);
        break;
      }
    }

    return factors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const num = parseInt(number);
    if (!isNaN(num) && num > 1) {
      setPrimeFactors(getPrimeFactors(num));
    } else {
      setPrimeFactors(["Please enter a valid number greater than 1."]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">
          Prime Factorization
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="number" className="block text-gray-700 font-medium">
              Enter a Number
            </label>
            <input
              type="text"
              id="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="e.g., 56"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Get Prime Factors
          </button>
        </form>
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-800">Result:</h2>
          <div className="mt-2 bg-gray-100 p-4 rounded-lg shadow-inner">
            {primeFactors.length === 0 ? (
              <p className="text-gray-500">No result yet.</p>
            ) : (
              <ul className="list-disc pl-5 text-gray-700">
                {primeFactors.map((factor, index) => (
                  <li key={index}>{factor}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
