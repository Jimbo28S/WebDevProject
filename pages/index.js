import Image from "next/image";
import React, { View, Text, Button } from "react";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const animals = [
    {
      name: "African Lions",
      path: "/animals/africanLions",
      image: "/africanLion.jpg",
    },

    { name: "Alpacas", path: "/animals/alpacas", image: "/alpaca.jpg" },

    {
      name: "Bighorn Sheep",
      path: "/animals/bighornSheep",
      image: "/bighornSheep.jpg",
    },
    
    {
      name: "Black Bears",
      path: "/animals/blackBear",
      image: "/blackBear.jpg",
    },
    { name: "Camels", path: "/animals/camels", image: "/camel.jpg" },
    { name: "Giraffes", path: "/animals/giraffe", image: "/giraffe.jpg" },
    { name: "Moose", path: "/animals/moose", image: "/moose.jpg" },
    { name: "Ostriches", path: "/animals/ostrich", image: "/ostrich.jpg" },
    { name: "Polar Bears", path: "/animals/polarbear", image: "/polarBear.jpg" }
  ];

  const filteredAnimals = animals.filter((animal) =>
    animal.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-5xl font-bold text-center text-orange-400 drop-shadow-md">
            Calagary Zoo Explorer
          </h1>
          <p className="text-blue-100 mt-2 text-center text-lg">
            Discover amazing animals from around the world
          </p>

          {/* Search Bar */}
          <div className="w-54">
            <input
              type="text"
              placeholder="Search for an animal..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white text-black rounded-lg px-3 py-3 border border-black-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">
            Our Animals Collection
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Click on any animal to learn more about them and their habitat,
            diet, and conservative status.
          </p>
        </div>

        {/* Animal Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-8">
          {filteredAnimals.map((animal, index) => (
            <Link href={animal.path} key={index}>
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer">
                <div className="relative h-48 w-full">
                  <Image
                    src={animal.image}
                    alt={`${animal.name} Image`}
                    layout="fill"
                    objectFit="cover"
                    className="hover:opacity-90 transition-opacity "
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800 text-center">
                    {animal.name}
                  </h3>
                  <button className="bg-blue-600 mt-3 w-full py-2 hover:bg-blue-700 text-white rounded-md transition-colors">
                    Learn more
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            <div>
              <h3 className="text-xl font-bold mb-4">Calgary Zoo</h3>
              <p className="text-gray-300">
                1300 Zoo Rd NE, Calgary, AB T2E 7V6, Canada
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect with Us</h3>
              <div className="flex space-x-4">
                <Link
                  href="https://www.facebook.com/thecalgaryzoo"
                  className="text-gray-300 hover:text-white"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </Link>

                <Link
                  href="https://x.com/calgaryzoo"
                  className="text-gray-300 hover:text-white"
                >
                  <span className="sr-only">X</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>

                <Link
                  href="https://www.instagram.com/thecalgaryzoo/"
                  className="text-gray-300 hover:text-white"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <p>&copy; {new Date().getFullYear()} Calgary Zoo Explorer</p>
        </div>
      </footer>
    </div>
  );
}
