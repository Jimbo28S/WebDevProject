import React from "react";
import Image from "next/image";
import Link from "next/link";
import BlackBearMap from "../../components/bearMap";

const blackBearImage = "/blackBear.jpg";

export default function BlackBear() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Enhanced Header Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg sticky top-0 z-10 py-8">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Zoo Title */}
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
            Black Bear
          </h1>
          <p className="text-xl text-blue-600 mb-8">
            The adaptable omnivores of North America
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
              src={blackBearImage}
              alt="Black Bear"
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
          {/* Description Section */}
          <div className="bg-white p-8 rounded-xl shadow-lg lg:col-span-2">
            <h2 className="text-3xl font-bold text-blue-800 mb-6 border-b-2 border-blue-100 pb-2">
              About Black Bears
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Black bears are one of the most common bear species in North
              America. They are known for their adaptability and can thrive in a
              variety of habitats, from forests to mountains.
            </p>
            <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">
              Natural Habitat
            </h3>
            <p className="text-gray-700 mb-6">
              Black bears are found in forests, swamps, and mountainous regions
              across North America. They are excellent climbers and often seek
              refuge in trees.
            </p>
            <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">
              Diet
            </h3>
            <p className="text-gray-700 mb-6">
              Black bears are omnivores, feeding on a wide range of foods
              including berries, nuts, insects, fish, and small mammals. They
              are opportunistic feeders and adapt their diet based on
              availability.
            </p>
            <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">
              Conservation Status
            </h3>
            <p className="text-gray-700 mb-6">
              Currently classified as{" "}
              <span className="text-green-600 font-semibold">
                Least Concern
              </span>{" "}
              by the IUCN Red List.
            </p>
          </div>
        </div>
        {/* Zoo Information Section */}
        <div className="mt-8 bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 border-b-2 border-blue-100 pb-2">
            Bighorn Sheep Exhibit at Calgary Zoo
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
                  Located in the Wild Canada Section
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-lg">
                  Feeding demonstrations daily at 12:00 AM
                </span>
              </li>

              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-lg">
                  Keeper talks on weekends at 1:30 PM
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
            <BlackBearMap />
          </div>
          </div>
          
        </div>

        {/* Fun Facts Section */}
        <div className="mt-12 bg-white p-8 rounded-xl shadow-lg border border-blue-200">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 border-b-2 border-blue-100 pb-2">
            Fascinating Facts about Black Bear
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg ">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                1. Color Variations
              </h3>
              <p className="text-gray-700 ">
                Despite their name, black bears can be brown, cinnamon, or even
                blonde. Their color can vary significantly based on their
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg ">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                2. Climbing Skills
              </h3>
              <p className="text-gray-700 ">
                Black bears are excellent climbers and often seek refuge in
                trees to escape predators or find food. They can climb trees at
                a speed of up to 30 miles per hour.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg ">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                3. Hibernation Experts
              </h3>
              <p className="text-gray-700 ">
                They hibernate for up to 7 months without eating, drinking, or
                eliminating waste.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg ">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                4. Strong Sense of Smell
              </h3>
              <p className="text-gray-700 ">
                Their sense of smell is about 7 times better than dogs, allowing
                them to detect food from miles away.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
