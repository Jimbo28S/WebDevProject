import React from "react";
import Image from "next/image";
import Link from "next/link";
import LionMap from "../../components/lionMap";

const lionImage = "/africanLion.jpg";

export default function AfricanLions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Enhanced Header Section - Made taller*/}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg sticky top-0 z-10 py-8">
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

          {/* Zoo Title - Made larger */}
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
            African Lion
          </h1>
          <p className="text-xl text-blue-600 mb-8">
            The King of the African savanna
          </p>
          <div className="flex gap-4">
            <span className="px-4 py-2 bg-yellow-500 text-white rounded-full font-semibold">
              {" "}
              Vulnerable
            </span>
            <span className="px-4 py-2 bg-blue-600 text-white rounded-full font-semibold">
              Carnivore
            </span>
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-xl">
            <Image
              src={lionImage}
              alt="African Lion"
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* About Section */}
          <div className="bg-white p-8 rounded-xl shadow-lg lg:col-span-2">
            <h2 className="text-3xl font-bold text-blue-800 mb-6 border-b-2 border-blue-100 pb-2">
              About African lions
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              The African Lion is a large cat at the top of the African food
              chain. They are extremely strong, fast, and intimidating as they
              can reach speeds of 80 km/h and roar at a volume of up to 114
              decibels.
            </p>

            <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">
              Natural Habitat
            </h3>
            <p className="text-gray-700 mb-6">
              African Lions are carnivores and require lots of food to maintain
              their energy levels. They primarily hunt larger animals, weighing
              roughly between 100 and 1000 pounds. They will also hunt smaller
              rodents when they find themselves with a lack of food.
            </p>

            <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">
              Conservation Status
            </h3>

            <p className="text-gray-700 mb-6">
              African lions are currently classified as{" "}
              <span className="text-yellow-600 font-semibold">Vulnerable</span>{" "}
              by the IUCN Red List.
            </p>
          </div>
        </div>

        {/* Zoo Information Section */}
        <div className="mt-8 bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 border-b-2 border-blue-100 pb-2">
            African Lion Exhibit at Calgary Zoo
          </h2>
          <div className="flex flex-row">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                Exhibit Information
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-lg">
                    Located in the Destination Africa Section
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-lg">
                    Feeding times: 11:00 AM and 3:00 PM daily
                  </span>
                </li>

                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-lg">
                    Keeper talks on weekends at 1:00 PM
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
              <LionMap />
            </div>

          </div>
          
        </div>
        {/* Conservtion Section */}
        <div className="mt-12 bg-white p-8 rounded-xl shadow-lg border border-blue-200">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 border-b-2 border-blue-100 pb-2">
            Conservation Efforts
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            The Calgary Zoo participates in lion conservation through breeding
            programs and partnerships with African wildlife preserves.Our lions
            are part of a Species Survival Plan to maintain genetic divesity in
            captive populations.
          </p>
          <button className="px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg transition-colors">
            <Link href="https://youthforlions.org/how-you-can-help/">
              Learn How You Can Help
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
