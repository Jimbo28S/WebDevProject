import React from "react";
import Image from "next/image";
import Link from "next/link";
import PolarMap from "../../components/polarbearMap";

import polarBearImage from "../../public/polarBear.jpg";

export default function PolarBear() {
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
            Polar Bear
          </h1>
          <p className="text-xl text-blue-600 mb-8">
            Apex predators of the Arctic
          </p>
          <div className="flex gap-4">
            <span className="px-4 py-2 bg-red-500 text-white rounded-full font-semibold">
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
              src={polarBearImage}
              alt="Polar Bear"
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
              About Polar Bears
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Polar bears are the largest land carnivores and are perfectly adapted to life on the Arctic sea ice. Their thick fur and a layer of fat keep them warm in freezing temperatures.
            </p>
            <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">
              Natural Habitat
            </h3>
            <p className="text-gray-700 mb-6">
              Native to the Arctic regions surrounding the North Pole, polar bears spend most of their time on sea ice hunting for seals.
            </p>
            <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">
              Diet
            </h3>
            <p className="text-gray-700 mb-6">
              Polar bears primarily eat seals, using the ice to sneak up on them or wait by breathing holes.
            </p>
            <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">
              Conservation Status
            </h3>
            <p className="text-gray-700 mb-6">
              Polar bears are listed as{" "}
              <span className="text-red-600 font-semibold">Vulnerable</span>{" "}
              due to climate change reducing the sea ice they depend on.
            </p>
          </div>
        </div>

        {/* Zoo Information */}
        <div className="mt-8 bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 border-b-2 border-blue-100 pb-2">
            Polar Bear Exhibit at Calgary Zoo
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
                    Located in the Wild Canada Section
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-lg">
                    Polar bear feeding daily at 2:30 PM
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-lg">
                    Keeper talks on Sundays at 11:00 AM
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
              <PolarMap />
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mt-12 bg-white p-8 rounded-xl shadow-lg border border-blue-200">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 border-b-2 border-blue-100 pb-2">
            Fascinating Polar Bear Facts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                1. Giant Swimmers
              </h3>
              <p className="text-gray-700">
                Polar bears can swim for hundreds of kilometers at a time, using their powerful front paws.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                2. Black Skin
              </h3>
              <p className="text-gray-700">
                Under their white fur, polar bears have black skin to absorb and retain heat.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                3. Super Noses
              </h3>
              <p className="text-gray-700">
                They can smell seals nearly a mile away and even under several feet of snow.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                4. Solitary Life
              </h3>
              <p className="text-gray-700">
                Polar bears are mostly solitary, coming together only during mating season or when food is abundant.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
