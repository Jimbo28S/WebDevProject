// app/ostrich/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import OstrichMap from "../../components/ostrichMap";

import ostrichImage from "../../public/ostrich.jpg";

export default function Ostrich() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg sticky top-0 z-10 py-8">
        <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="../home">
            <button className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 text-white px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
              <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium text-lg">Back</span>
            </button>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">
            <span className="text-orange-400">Calgary</span> Zoo Explorer
          </h1>
          <div className="w-20" />
        </div>
      </header>

      {/* Hero */}
      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="lg:w-1/2">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-800 mb-6">
            Ostrich
          </h1>
          <p className="text-xl text-blue-600 mb-8">
            The world's largest and fastest-running bird
          </p>
          <div className="flex gap-4">
            <span className="px-4 py-2 bg-green-500 text-white rounded-full font-semibold">
              Least Concern
            </span>
            <span className="px-4 py-2 bg-blue-600 text-white rounded-full font-semibold">
              Omnivore
            </span>
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-xl">
            <Image
              src={ostrichImage}
              alt="Ostrich"
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg lg:col-span-2">
            <h2 className="text-3xl font-bold text-blue-800 mb-6 border-b-2 border-blue-100 pb-2">
              About Ostriches
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Native to Africa, ostriches are flightless birds known for their
              massive size, powerful legs, and incredible speed. They can reach
              running speeds up to 70 km/h (43 mph).
            </p>
            <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">
              Natural Habitat
            </h3>
            <p className="text-gray-700 mb-6">
              Ostriches thrive in savannas, deserts, and open woodlands across
              Africa, where they roam in small herds or pairs.
            </p>
            <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">
              Diet
            </h3>
            <p className="text-gray-700 mb-6">
              They are omnivores, eating plants, seeds, insects, and even small
              reptiles. Ostriches also swallow pebbles to help grind food in
              their gizzards.
            </p>
            <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">
              Conservation Status
            </h3>
            <p className="text-gray-700 mb-6">
              Ostriches are listed as{" "}
              <span className="text-green-600 font-semibold">
                Least Concern
              </span>{" "}
              by the IUCN, though habitat loss and hunting are ongoing risks.
            </p>
          </div>
        </div>

        {/* Exhibit Info */}
        <div className="mt-8 bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 border-b-2 border-blue-100 pb-2">
            Ostrich Exhibit at Calgary Zoo
          </h2>
          <div className="flex flex-row">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 ">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                Exhibit Information
              </h3>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-lg">Located in the Destination Africa Section</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-lg">
                    Feeding sessions at 11:00 AM and 3:00 PM
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-lg">
                    Learn about their speed and survival skills
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-lg">
                    Open daily from 9:00 AM to 5:00 PM
                  </span>
                </li>
              </ul>
            </div>

            <div className="relative overflow-auto cursor-grab flex justify-center items-center max-w-full max-h-full group">
                <OstrichMap />
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mt-12 bg-white p-8 rounded-xl shadow-lg border border-blue-200">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 border-b-2 border-blue-100 pb-2">
            Fascinating Ostrich Facts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                1. Super Speed
              </h3>
              <p className="text-gray-700">
                Ostriches can run up to 70 km/h (43 mph), making them the
                fastest-running birds on Earth.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                2. Huge Eggs
              </h3>
              <p className="text-gray-700">
                They lay the largest eggs of any land animal—up to 15 cm long
                and 1.5 kg!
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                3. Kick Defense
              </h3>
              <p className="text-gray-700">
                Their powerful legs can deliver kicks strong enough to deter
                predators like lions.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                4. Long Necks, Big Eyes
              </h3>
              <p className="text-gray-700">
                They have the largest eyes of any land vertebrate—perfect for
                spotting threats from afar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


