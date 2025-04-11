import React from "react";
import Image from "next/image";
import Link from "next/link";
import alpacaImage from "../../public/alpaca.jpg";
import AlpacaMap from "../../components/alpacaMap";

export default function Alpacas() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Enhanced Header Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg sticky top-0 z-10 py-8">
        {" "}
        {/* Increased py-4 to py-8 */}
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Back Button */}
          <Link href="/">
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

          {/* Zoo Title */}
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">
              <span className="text-orange-400">Calgary</span> Zoo Explorer
            </h1>
          </div>

          {/* Spacer for balance */}
          <div className="w-20"></div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="lg:w-1/2">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-800 mb-6">
            Alpacas
          </h1>
          <p className="text-xl text-blue-600 mb-8">
            The fluffy wool producers of the Andes
          </p>
          <div className="flex gap-4">
            <span className="px-4 py-2 bg-green-500 text-white rounded-full font-semibold">
              Not Endangered
            </span>
            <span className="px-4 py-2 bg-blue-600 text-white rounded-full font-semibold">
              Herbivore
            </span>
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-xl">
            <Image
              src={alpacaImage}
              alt="Alpaca"
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 trasnition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Description Section */}
          <div className="bg-white p-8 rounded-xl shadow-lg lg:col-span-2">
            <h2 className="text-3xl font-bold text-blue-800 mb-6 border-b-2 border-blue-100 pb-2">
              About Alpacas
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Alpacas are domesticated animals native to South America, known
              for their soft, luxurious fleece. They are social creatures that
              live in herds and are often raised for their wool, which is used
              to make clothing and textiles. Alpacas are gentle and curious,
              making them popular in petting zoos and farms.
            </p>
            <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">
              Natural Habitat
            </h3>
            <p className="text-gray-700 mb-6">
              Alpacas are native to the high altitudes of the Andes mountains in
              South America, particularly in countries like Peru, Bolivia, and
              Chile. They thrive in cool, dry climates and are well adapted to
              the harsh conditions of their natural habitat.
            </p>
            <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">
              Diet
            </h3>
            <p className="text-gray-700 mb-6">
              Alpacas are herbivores and primarily graze on grasses, hay, and
              other vegetation. They have a unique digestive system that allows
              them to extract nutrients efficiently from their plant-based diet.
            </p>
          </div>
        </div>
        {/* Zoo Information Section */}
        <div className="mt-8 bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 border-b-2 border-blue-100 pb-2">
            Alpaca Exhibit at Calgary Zoo
          </h2>
          <div className="flex flex-row">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 ">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                Exhibit Information
              </h3>
              <ul className=" text-gray-700 space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-lg">
                    Located near the Dororthy Harvie Gardens Section
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-lg">
                    Daily Feeding demonstrations at 10:30 AM and 2:30 PM
                  </span>
                </li>

                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-lg">
                    Wool shearing demonstrations every Friday at 1:00 PM
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

            <div>
              <AlpacaMap />
            </div>
          </div>
          
        </div>

        {/* Fun Facts Section */}
        <div className="mt-12 bg-white p-8 rounded-xl shadow-lg border border-blue-200">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 border-b-2 border-blue-100 pb-2">
            Fun Facts about Alpacas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg ">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                1. Soft Wool
              </h3>
              <p className="text-gray-700 ">
                Alpaca wool is softer than sheep&#39;s wool and come in 22
                natural color.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg ">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                2. Social Animals
              </h3>
              <p className="text-gray-700 ">
                Alpacas are herd aanimals and can become stressed if they are
                isolated from their companions.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg ">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                3. Ancient Domestication
              </h3>
              <p className="text-gray-700 ">
                Alpacas were domesticated by the Incas civilization over 6,000
                years ago.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg ">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                4. Unique Communication
              </h3>
              <p className="text-gray-700 ">
                Alpacas hum to communicate with each hum having different
                meanings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
