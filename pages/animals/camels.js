import React from "react";
import Image from "next/image";
import Link from "next/link";
import CamelMap from "../../components/camelMap";
import camelImage from "../../public/camel.jpg";

export default function Camel() {
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
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">
              <span className="text-orange-400">Calgary</span> Zoo Explorer
            </h1>
          </div>
          <div className="w-20" />
        </div>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="lg:w-1/2">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-800 mb-6">
            Camel
          </h1>
          <p className="text-xl text-blue-600 mb-8">
            Adapted for survival in the harshest deserts
          </p>
          <div className="flex gap-4">
            <span className="px-4 py-2 bg-red-700 text-white rounded-full font-semibold">
              Critically Endangered
            </span>
            <span className="px-4 py-2 bg-blue-600 text-white rounded-full font-semibold">
              Herbivore
            </span>
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-xl">
            <Image
              src={camelImage}
              alt="Camel"
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg lg:col-span-2">
            <h2 className="text-3xl font-bold text-blue-800 mb-6 border-b-2 border-blue-100 pb-2">
              About Camels
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Camels are remarkable desert dwellers known for their humps, which store fat to help them survive long periods without food and water.
            </p>
            <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">
              Natural Habitat
            </h3>
            <p className="text-gray-700 mb-6">
              Camels are native to arid regions of the Middle East, North Africa, and Central Asia, where they endure extreme temperatures and minimal water.
            </p>
            <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">
              Diet
            </h3>
            <p className="text-gray-700 mb-6">
              Camels eat dry grasses, grains, and desert vegetation. Their tough mouths can handle thorny plants that other animals avoid.
            </p>
            <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">
              Conservation Status
            </h3>
            <p className="text-gray-700 mb-6">
              Wild Bactrian camels are classified as{" "}
              <span className="text-yellow-600 font-semibold">Vulnerable</span>{" "}
              due to habitat loss and limited wild populations.
            </p>
          </div>
        </div>

        {/* Zoo Information */}
        <div className="mt-8 bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 border-b-2 border-blue-100 pb-2">
            Camel Exhibit at Calgary Zoo
          </h2>
          <div className="flex flex-row">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                Exhibit Information
              </h3>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-lg">
                    Located in the Exploration Asia Area
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-lg">
                    Feeding demonstrations daily at 11:00 AM
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-lg">
                    Keeper talks on Saturdays at 2:00 PM
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
              <CamelMap />
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mt-12 bg-white p-8 rounded-xl shadow-lg border border-blue-200">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 border-b-2 border-blue-100 pb-2">
            Fascinating Camel Facts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                1. Hump Storage
              </h3>
              <p className="text-gray-700">
                Contrary to popular belief, camels store fat in their humps, not water.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                2. Water Efficiency
              </h3>
              <p className="text-gray-700">
                Camels can drink up to 40 gallons of water in one go and survive for weeks without drinking again.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                3. Desert Feet
              </h3>
              <p className="text-gray-700">
                Their wide, padded feet prevent sinking in the sand and make walking easier on hot terrain.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                4. Eyelash Protection
              </h3>
              <p className="text-gray-700">
                Long eyelashes and sealable nostrils help camels keep out blowing sand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
