import React from 'react';
import Image from "next/image";
import Link from 'next/link';

const bhSheepImage = "/bighornSheep.jpg";


export default function BighornSheep() {



    return (
        <div>
            <Link href="/">
                <button className="border-1 border-gray-600 bg-green-500 w-30 mt-10 ml-10">Back</button>
            </Link>
            
            <div className="flex space-x-100 border-2 border-white m-10">
                <text className="text-7xl text-blue-500 m-50">Bighorn Sheep</text>
                <Image 
                    src={bhSheepImage} 
                    alt="Bighorn Sheep image"
                    height={500}
                    width={500}>
                </Image>
            </div>

            <div className="flex mx-40">
                <div className="flex flex-col w-200 h-100 border-2 border-white m-10">
                    <text className="text-3xl text-blue-500">More About Bighorn Sheep</text>
                    <text className="text-blue-300">Put some info about Bighorn Sheep here</text>
                </div>

                <div className="flex flex-col w-200 h-100 border-2 border-white m-10">
                    <text className="text-3xl text-blue-500">Find Bighorn Sheep at the Calgary Zoo</text>
                    <text className="text-blue-300">Put a map or something showing where the Bighorn Sheep exhibit is located</text>
                </div>
            </div>
            
        </div>
        
        
    )
}
